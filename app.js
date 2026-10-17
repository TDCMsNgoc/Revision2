/**
 * PHẦN MỀM TRẮC NGHIỆM TIẾNG ANH - REVISION 2 (40 CÂU NGẪU NHIÊN)
 * Trường Cao đẳng Công nghệ Thủ Đức (TDC)
 * 
 * Các tính năng chính:
 * 1. Chọn ngẫu nhiên 40 câu hỏi (8 câu từ mỗi chủ đề trong 5 chủ đề:
 *    Countable & Uncountable Nouns, Referring to Nouns, Pronouns & Referencing,
 *    Adjectives & Adverbs, Prepositions).
 * 2. Xáo trộn ngẫu nhiên câu hỏi và các lựa chọn (A, B, C, D) mỗi lần làm lại.
 * 3. Khung câu hỏi neo ở dưới cùng trên Điện thoại và iPad.
 * 4. Đảm bảo câu hỏi và các lựa chọn cùng nằm trên 1 khung duy nhất.
 * 5. Tuyệt đối KHÔNG có gợi ý lúc làm bài; Sau khi nộp bài hiển thị đáp án đúng,
 *    giải thích ngữ pháp và dịch nghĩa tiếng Việt chi tiết.
 * 6. Bộ đếm lượt truy cập thời gian thực trên GitHub Pages & Bảng điểm Admin xuất CSV.
 */

(function () {
  "use strict";

  // Cấu hình bài thi
  const TOTAL_QUESTIONS = 40;
  const QUESTIONS_PER_TOPIC = 8;
  const INITIAL_COUNTDOWN_SECONDS = 45 * 60; // 45 phút đếm ngược (2700s)

  // LocalStorage Keys
  const STORAGE_PREFIX = "tdc_revision2_";
  const STORAGE_KEY_STATE = `${STORAGE_PREFIX}state`;
  const STORAGE_KEY_VISITS = `${STORAGE_PREFIX}visits_count`;
  const STORAGE_KEY_SESSION = `${STORAGE_PREFIX}has_visited`;
  const STORAGE_KEY_SUBMISSIONS = `${STORAGE_PREFIX}submissions`;
  const STORAGE_KEY_STUDENT = `${STORAGE_PREFIX}current_student`;
  const STORAGE_KEY_THEME = `${STORAGE_PREFIX}theme`;

  // Application State
  const state = {
    quizQuestions: [],      // 40 questions for current attempt
    currentIndex: 0,        // 0..39
    userAnswers: {},        // { [index]: 'A'|'B'|'C'|'D' }
    flaggedSet: new Set(),  // Set of flagged question indices
    isSubmitted: false,
    remainingSeconds: INITIAL_COUNTDOWN_SECONDS,
    elapsedSeconds: 0,
    timerInterval: null,
    viewMode: "desktop",
    theme: "light",
    visitCount: 188,
    student: {
      name: "Sinh viên TDC",
      id: "",
      className: ""
    }
  };

  // DOM Elements cache
  const elements = {};

  function cacheDOMElements() {
    elements.appRoot = document.getElementById("app-root");
    elements.timerDisplay = document.getElementById("timer-display");
    elements.quizTimerBox = document.getElementById("quiz-timer");
    elements.visitorCountText = document.getElementById("visitor-count-text");
    elements.themeIcon = document.getElementById("theme-icon");
    elements.btnThemeToggle = document.getElementById("btn-theme-toggle");
    elements.btnAdminOpen = document.getElementById("btn-admin-open");

    // Device switchers
    elements.btnViewDesktop = document.getElementById("btn-view-desktop");
    elements.btnViewIpad = document.getElementById("btn-view-ipad");
    elements.btnViewMobile = document.getElementById("btn-view-mobile");

    // Upper section
    elements.answeredCount = document.getElementById("answered-count");
    elements.progressBarFill = document.getElementById("progress-bar-fill");
    elements.questionPillGrid = document.getElementById("question-pill-grid");
    elements.studentNameTag = document.getElementById("student-name-tag");
    elements.avatarCircle = document.getElementById("avatar-circle");
    elements.btnEditStudent = document.getElementById("btn-edit-student");
    elements.btnNewQuizTop = document.getElementById("btn-new-quiz-top");
    elements.btnQuickSubmit = document.getElementById("btn-quick-submit");

    // Question Card (Single unified frame)
    elements.questionCard = document.getElementById("question-card");
    elements.currentQBadge = document.getElementById("current-q-badge");
    elements.currentTopicBadge = document.getElementById("current-topic-badge");
    elements.btnCardFlag = document.getElementById("btn-card-flag");
    elements.cardFlagIcon = document.getElementById("card-flag-icon");
    elements.cardFlagText = document.getElementById("card-flag-text");
    elements.statusTag = document.getElementById("status-tag");
    elements.questionText = document.getElementById("question-text");
    elements.optionsGroup = document.getElementById("options-group");

    // Explanation Box inside card
    elements.explanationBox = document.getElementById("explanation-box");
    elements.expBadge = document.getElementById("exp-badge");
    elements.expTranslation = document.getElementById("exp-translation");
    elements.expExplanation = document.getElementById("exp-explanation");

    // Card Footer Nav
    elements.btnPrev = document.getElementById("btn-prev");
    elements.btnNext = document.getElementById("btn-next");
    elements.btnSubmit = document.getElementById("btn-submit");

    // Result Modal
    elements.resultModal = document.getElementById("result-modal");
    elements.resultScore = document.getElementById("result-score");
    elements.resultScale10 = document.getElementById("result-scale10");
    elements.resultRating = document.getElementById("result-rating");
    elements.statCorrect = document.getElementById("stat-correct");
    elements.statWrong = document.getElementById("stat-wrong");
    elements.statUnanswered = document.getElementById("stat-unanswered");
    elements.statTime = document.getElementById("stat-time");
    elements.breakdownGrid = document.getElementById("breakdown-grid");

    // Topic scores in result modal
    elements.topicScoreNouns = document.getElementById("topic-score-nouns");
    elements.topicScoreReferring = document.getElementById("topic-score-referring");
    elements.topicScorePronouns = document.getElementById("topic-score-pronouns");
    elements.topicScoreAdjadv = document.getElementById("topic-score-adjadv");
    elements.topicScorePrepositions = document.getElementById("topic-score-prepositions");

    elements.btnCloseResult = document.getElementById("btn-close-result");
    elements.btnReview = document.getElementById("btn-review");
    elements.btnRestart = document.getElementById("btn-restart");
    elements.btnViewAll40 = document.getElementById("btn-view-all-40");

    // Confirm Modal
    elements.confirmModal = document.getElementById("confirm-modal");
    elements.confirmText = document.getElementById("confirm-text");
    elements.cAnsweredNum = document.getElementById("c-answered-num");
    elements.cUnansweredNum = document.getElementById("c-unanswered-num");
    elements.cFlaggedNum = document.getElementById("c-flagged-num");
    elements.btnCancelSubmit = document.getElementById("btn-cancel-submit");
    elements.btnConfirmSubmit = document.getElementById("btn-confirm-submit");
    elements.btnCloseConfirm = document.getElementById("btn-close-confirm");

    // Student Modal
    elements.studentModal = document.getElementById("student-modal");
    elements.formStudent = document.getElementById("form-student");
    elements.inputStudentName = document.getElementById("input-student-name");
    elements.inputStudentId = document.getElementById("input-student-id");
    elements.inputStudentClass = document.getElementById("input-student-class");
    elements.btnCloseStudent = document.getElementById("btn-close-student");

    // Admin Modal
    elements.adminModal = document.getElementById("admin-modal");
    elements.adminVisitCount = document.getElementById("admin-visit-count");
    elements.adminSubmissionCount = document.getElementById("admin-submission-count");
    elements.adminAvgScore = document.getElementById("admin-avg-score");
    elements.adminTableBody = document.getElementById("admin-table-body");
    elements.btnCloseAdmin = document.getElementById("btn-close-admin");
    elements.btnExportCsv = document.getElementById("btn-export-csv");
    elements.btnClearData = document.getElementById("btn-clear-data");

    // Full Review Modal
    elements.fullReviewModal = document.getElementById("full-review-modal");
    elements.fullReviewContent = document.getElementById("full-review-content");
    elements.btnCloseFullReview = document.getElementById("btn-close-full-review");
  }

  // =========================================================================
  // UTILITIES & SHUFFLE ALGORITHMS (Fisher-Yates)
  // =========================================================================
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    const mm = String(m).padStart(2, "0");
    const ss = String(s).padStart(2, "0");
    return `${mm}:${ss}`;
  }

  // Clean leading number prefix if present (e.g. "1. Shall we..." -> "Shall we...")
  function cleanQuestionText(text) {
    if (!text) return "";
    return text.replace(/^\s*\d+[\.\)]\s*/, "").trim();
  }

  // =========================================================================
  // 40 RANDOM QUESTIONS GENERATOR FROM 5 TOPICS
  // 8 câu từ Countable & Uncountable Nouns
  // 8 câu từ Referring to Nouns
  // 8 câu từ Pronouns & Referencing
  // 8 câu từ Adjectives & Adverbs
  // 8 câu từ Prepositions
  // =========================================================================
  function generate40Questions() {
    if (typeof window.QUESTION_BANK === "undefined") {
      console.error("QUESTION_BANK is not defined! Make sure questions_bank.js is loaded.");
      return [];
    }

    const bank = window.QUESTION_BANK;
    const topics = [
      { key: "countable_uncountable", name: "Countable & Uncountable Nouns" },
      { key: "referring_nouns", name: "Referring to Nouns" },
      { key: "pronouns_referencing", name: "Pronouns & Referencing" },
      { key: "adj_adv", name: "Adjectives & Adverbs" },
      { key: "prepositions", name: "Prepositions" }
    ];

    let selectedQuestions = [];

    topics.forEach(t => {
      const topicPool = bank[t.key] || [];
      const shuffledPool = shuffleArray(topicPool);
      const chosen = shuffledPool.slice(0, QUESTIONS_PER_TOPIC);

      chosen.forEach(q => {
        // Clone and also shuffle the 4 options (A, B, C, D)
        const originalCorrectKey = q.answer || q.correct;
        const originalCorrectOption = q.options.find(opt => opt.key === originalCorrectKey);
        const correctText = originalCorrectOption ? originalCorrectOption.text : "";

        const shuffledOpts = shuffleArray(q.options);
        const newKeys = ["A", "B", "C", "D"];
        let newCorrectKey = "A";

        const mappedOptions = shuffledOpts.map((opt, idx) => {
          const key = newKeys[idx];
          if (opt.text === correctText) {
            newCorrectKey = key;
          }
          return {
            key: key,
            text: opt.text
          };
        });

        selectedQuestions.push({
          id: q.id,
          topicId: t.key,
          topicName: t.name,
          question: cleanQuestionText(q.question || q.sentence),
          options: mappedOptions,
          answer: newCorrectKey,
          translation: q.translation || "",
          explanation: q.explanation || ""
        });
      });
    });

    // Shuffle the 40 questions completely so topics are mixed
    selectedQuestions = shuffleArray(selectedQuestions);

    // Assign dynamic 1..40 display index
    return selectedQuestions.map((q, idx) => ({
      ...q,
      displayNumber: idx + 1
    }));
  }

  // =========================================================================
  // STATE PERSISTENCE (LocalStorage)
  // =========================================================================
  function saveState() {
    if (state.isSubmitted) return;
    try {
      const data = {
        quizQuestions: state.quizQuestions,
        currentIndex: state.currentIndex,
        userAnswers: state.userAnswers,
        flaggedList: Array.from(state.flaggedSet),
        remainingSeconds: state.remainingSeconds,
        elapsedSeconds: state.elapsedSeconds
      };
      localStorage.setItem(STORAGE_KEY_STATE, JSON.stringify(data));
    } catch (e) {
      console.warn("Could not save quiz state", e);
    }
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STATE);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.quizQuestions && data.quizQuestions.length === TOTAL_QUESTIONS) {
          state.quizQuestions = data.quizQuestions;
          state.currentIndex = data.currentIndex || 0;
          state.userAnswers = data.userAnswers || {};
          state.flaggedSet = new Set(data.flaggedList || []);
          state.remainingSeconds = typeof data.remainingSeconds === "number" ? data.remainingSeconds : INITIAL_COUNTDOWN_SECONDS;
          state.elapsedSeconds = typeof data.elapsedSeconds === "number" ? data.elapsedSeconds : 0;
          return true;
        }
      }
    } catch (e) {
      console.warn("Could not restore quiz state", e);
    }
    return false;
  }

  function clearSavedState() {
    try {
      localStorage.removeItem(STORAGE_KEY_STATE);
    } catch (e) {}
  }

  // =========================================================================
  // TIMER (45:00 Countdown)
  // =========================================================================
  function startTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    updateTimerUI();

    state.timerInterval = setInterval(() => {
      if (state.isSubmitted) {
        clearInterval(state.timerInterval);
        return;
      }

      state.remainingSeconds--;
      state.elapsedSeconds++;

      updateTimerUI();
      saveState();

      // Time up! Auto submit
      if (state.remainingSeconds <= 0) {
        clearInterval(state.timerInterval);
        state.remainingSeconds = 0;
        updateTimerUI();
        alert("Đã hết thời gian 45 phút làm bài! Hệ thống sẽ tự động nộp bài thi của bạn.");
        submitQuiz(true);
      }
    }, 1000);
  }

  function updateTimerUI() {
    elements.timerDisplay.textContent = formatTime(state.remainingSeconds);

    // Warning alert when remaining time < 5 minutes (300 seconds)
    if (state.remainingSeconds <= 300) {
      elements.quizTimerBox.classList.add("warning");
    } else {
      elements.quizTimerBox.classList.remove("warning");
    }
  }

  // =========================================================================
  // VISITOR TRACKING & STUDENT PROFILE
  // =========================================================================
  async function initVisitorTracking() {
    let localVisits = parseInt(localStorage.getItem(STORAGE_KEY_VISITS) || "188", 10);

    // If new session, increment visit count
    if (!sessionStorage.getItem(STORAGE_KEY_SESSION)) {
      localVisits += 1;
      localStorage.setItem(STORAGE_KEY_VISITS, localVisits.toString());
      sessionStorage.setItem(STORAGE_KEY_SESSION, "true");
    }

    state.visitCount = localVisits;
    if (elements.visitorCountText) {
      elements.visitorCountText.textContent = localVisits.toLocaleString();
    }

    // Load saved student profile
    const savedStudent = localStorage.getItem(STORAGE_KEY_STUDENT);
    if (savedStudent) {
      try {
        state.student = JSON.parse(savedStudent);
        updateStudentUI();
      } catch (e) {}
    }

    // Connect to public cloud counter API for live GitHub Pages tracking
    try {
      const isNew = !sessionStorage.getItem(`${STORAGE_PREFIX}api_hit_done`);
      const endpoint = isNew
        ? "https://api.counterapi.dev/v1/tdc_quiz_revision2_vn/visits/up"
        : "https://api.counterapi.dev/v1/tdc_quiz_revision2_vn/visits";

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2200);

      const res = await fetch(endpoint, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data && typeof data.count === "number") {
          sessionStorage.setItem(`${STORAGE_PREFIX}api_hit_done`, "true");
          const cloudCount = Math.max(data.count, localVisits);
          state.visitCount = cloudCount;
          localStorage.setItem(STORAGE_KEY_VISITS, cloudCount.toString());
          if (elements.visitorCountText) {
            elements.visitorCountText.textContent = cloudCount.toLocaleString();
          }
        }
      }
    } catch (err) {
      // Graceful fallback to local counter
    }
  }

  function updateStudentUI() {
    if (elements.studentNameTag) {
      elements.studentNameTag.textContent = state.student.name || "Sinh viên TDC";
    }
    if (elements.avatarCircle) {
      const letter = (state.student.name || "T").trim().charAt(0).toUpperCase();
      elements.avatarCircle.textContent = letter || "T";
    }
  }

  function saveStudentProfile(e) {
    if (e) e.preventDefault();
    const name = elements.inputStudentName.value.trim();
    const id = elements.inputStudentId.value.trim();
    const className = elements.inputStudentClass.value.trim();

    state.student = {
      name: name || "Sinh viên TDC",
      id: id,
      className: className
    };

    localStorage.setItem(STORAGE_KEY_STUDENT, JSON.stringify(state.student));
    updateStudentUI();
    elements.studentModal.classList.remove("open");
  }

  function recordSubmission(score, total, timeFormatted) {
    const submissions = JSON.parse(localStorage.getItem(STORAGE_KEY_SUBMISSIONS) || "[]");
    const scale10 = (score / 4).toFixed(1);

    const record = {
      id: Date.now(),
      name: state.student.name || "Sinh viên TDC",
      studentId: state.student.id || "N/A",
      className: state.student.className || "N/A",
      score: score,
      scale10: scale10,
      total: total,
      percentage: Math.round((score / total) * 100),
      timeSpent: timeFormatted,
      date: new Date().toLocaleString("vi-VN")
    };

    submissions.unshift(record);
    localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(submissions));
  }

  // =========================================================================
  // CORE QUIZ LOGIC
  // =========================================================================
  function initQuiz() {
    cacheDOMElements();

    const restored = loadState();
    if (!restored) {
      state.quizQuestions = generate40Questions();
      state.currentIndex = 0;
      state.userAnswers = {};
      state.flaggedSet.clear();
      state.remainingSeconds = INITIAL_COUNTDOWN_SECONDS;
      state.elapsedSeconds = 0;
      state.isSubmitted = false;
    }

    buildNavigatorPills();
    renderQuestion(state.currentIndex);
    startTimer();
    initTheme();
    initVisitorTracking();
    attachEvents();
  }

  // Build Question Navigator Pills (1 to 40)
  function buildNavigatorPills() {
    elements.questionPillGrid.innerHTML = "";
    state.quizQuestions.forEach((q, idx) => {
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = "q-pill";
      pill.id = `q-pill-${idx}`;
      pill.textContent = idx + 1;
      pill.title = `Câu hỏi ${idx + 1} (${q.topicName})`;
      pill.addEventListener("click", () => {
        goToQuestion(idx);
      });
      elements.questionPillGrid.appendChild(pill);
    });
    updateNavigatorPills();
  }

  // Update pills state (active, answered, flagged, correct, wrong)
  function updateNavigatorPills() {
    state.quizQuestions.forEach((q, idx) => {
      const pill = document.getElementById(`q-pill-${idx}`);
      if (!pill) return;

      pill.className = "q-pill";

      if (idx === state.currentIndex) {
        pill.classList.add("active");
      }

      if (state.flaggedSet.has(idx)) {
        pill.classList.add("flagged");
      }

      if (state.isSubmitted) {
        // Review mode: green if correct, red if wrong
        const userAns = state.userAnswers[idx];
        if (userAns === q.answer) {
          pill.classList.add("correct-pill");
        } else {
          pill.classList.add("wrong-pill");
        }
      } else {
        // During quiz: green if answered
        if (state.userAnswers[idx] !== undefined) {
          pill.classList.add("answered");
        }
      }
    });

    // Update progress bar
    const answeredTotal = Object.keys(state.userAnswers).length;
    elements.answeredCount.textContent = answeredTotal;
    const percent = (answeredTotal / TOTAL_QUESTIONS) * 100;
    elements.progressBarFill.style.width = `${percent}%`;
  }

  // Render question inside the SINGLE unified frame
  function renderQuestion(index) {
    if (index < 0 || index >= state.quizQuestions.length) return;
    state.currentIndex = index;
    const qData = state.quizQuestions[index];

    // Card header inside frame
    elements.currentQBadge.textContent = `CÂU ${index + 1} / ${TOTAL_QUESTIONS}`;
    elements.currentTopicBadge.textContent = qData.topicName;

    // Flag button state
    const isFlagged = state.flaggedSet.has(index);
    elements.btnCardFlag.classList.toggle("flagged", isFlagged);
    elements.cardFlagIcon.textContent = isFlagged ? "🚩" : "🏳️";
    elements.cardFlagText.textContent = isFlagged ? "Đã gắn cờ" : "Gắn cờ";

    // Status tag
    const isAnswered = state.userAnswers[index] !== undefined;
    if (state.isSubmitted) {
      const isCorrect = state.userAnswers[index] === qData.answer;
      elements.statusTag.className = `status-tag ${isCorrect ? "done" : ""}`;
      elements.statusTag.style.backgroundColor = isCorrect ? "var(--success-light)" : "var(--danger-light)";
      elements.statusTag.style.color = isCorrect ? "var(--success-dark)" : "var(--danger)";
      elements.statusTag.textContent = isCorrect ? "✓ Trả lời Đúng" : "✗ Trả lời Sai";
    } else {
      elements.statusTag.className = `status-tag ${isAnswered ? "done" : ""}`;
      elements.statusTag.style.backgroundColor = "";
      elements.statusTag.style.color = "";
      elements.statusTag.textContent = isAnswered ? "Đã chọn đáp án" : "Chưa làm";
    }

    // Question Text inside single frame (Strictly NO hints during quiz)
    elements.questionText.textContent = `${index + 1}. ${qData.question}`;

    // Options inside the SAME frame
    elements.optionsGroup.innerHTML = "";
    const selectedKey = state.userAnswers[index];

    qData.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.dataset.key = opt.key;

      let badgeHtml = "";

      if (state.isSubmitted) {
        btn.disabled = true;
        if (opt.key === qData.answer) {
          btn.classList.add("correct");
          badgeHtml = `<span class="answer-badge badge-correct">✓ Đáp án đúng</span>`;
        }
        if (opt.key === selectedKey && selectedKey !== qData.answer) {
          btn.classList.add("wrong");
          badgeHtml = `<span class="answer-badge badge-wrong">✗ Lựa chọn của bạn</span>`;
        }
        if (opt.key === selectedKey && selectedKey === qData.answer) {
          badgeHtml = `<span class="answer-badge badge-correct">✓ Bạn đã chọn đúng</span>`;
        }
      } else {
        if (opt.key === selectedKey) {
          btn.classList.add("selected");
        }
        btn.addEventListener("click", () => selectOption(index, opt.key));
      }

      btn.innerHTML = `
        <span class="option-key">${opt.key}</span>
        <span class="option-text">${opt.text}</span>
        ${badgeHtml}
      `;

      elements.optionsGroup.appendChild(btn);
    });

    // Explanation and Translation Box inside the SAME frame
    // Strictly shown ONLY after submission in review mode
    if (state.isSubmitted) {
      elements.explanationBox.style.display = "block";
      elements.expBadge.textContent = `Đáp án đúng: ${qData.answer}`;
      elements.expTranslation.textContent = qData.translation || "Đang cập nhật dịch nghĩa.";
      elements.expExplanation.innerHTML = qData.explanation || "Đang cập nhật giải thích ngữ pháp.";
    } else {
      elements.explanationBox.style.display = "none";
    }

    // Footer Navigation state inside the SAME frame
    elements.btnPrev.disabled = index === 0;
    elements.btnNext.disabled = index === TOTAL_QUESTIONS - 1;

    if (state.isSubmitted) {
      elements.btnSubmit.textContent = "Xem kết quả";
    } else {
      elements.btnSubmit.textContent = "Nộp bài thi";
    }

    updateNavigatorPills();
  }

  // Select option during quiz
  function selectOption(qIndex, key) {
    if (state.isSubmitted) return;

    state.userAnswers[qIndex] = key;
    saveState();
    renderQuestion(qIndex);

    // Auto advance to next question after 280ms if not on last question
    if (qIndex < TOTAL_QUESTIONS - 1) {
      setTimeout(() => {
        if (state.currentIndex === qIndex && !state.isSubmitted) {
          goToQuestion(qIndex + 1);
        }
      }, 280);
    }
  }

  function goToQuestion(index) {
    if (index < 0 || index >= TOTAL_QUESTIONS) return;
    renderQuestion(index);
    saveState();
  }

  function toggleFlagCurrentQuestion() {
    const idx = state.currentIndex;
    if (state.flaggedSet.has(idx)) {
      state.flaggedSet.delete(idx);
    } else {
      state.flaggedSet.add(idx);
    }
    saveState();
    renderQuestion(idx);
  }

  // =========================================================================
  // SUBMISSION & RESULT CALCULATION
  // =========================================================================
  function openSubmitConfirm() {
    if (state.isSubmitted) {
      openResultModal();
      return;
    }

    const answeredCount = Object.keys(state.userAnswers).length;
    const unansweredCount = TOTAL_QUESTIONS - answeredCount;
    const flaggedCount = state.flaggedSet.size;

    elements.cAnsweredNum.textContent = answeredCount;
    elements.cUnansweredNum.textContent = unansweredCount;
    elements.cFlaggedNum.textContent = flaggedCount;

    if (unansweredCount > 0) {
      elements.confirmText.textContent = `Bạn đã làm ${answeredCount}/${TOTAL_QUESTIONS} câu (Còn ${unansweredCount} câu chưa trả lời). Bạn có chắc chắn muốn nộp bài bây giờ?`;
    } else {
      elements.confirmText.textContent = `Tuyệt vời! Bạn đã hoàn thành toàn bộ 40/40 câu hỏi. Bạn có muốn nộp bài để chấm điểm ngay?`;
    }

    elements.confirmModal.classList.add("open");
  }

  function submitQuiz(isAuto = false) {
    elements.confirmModal.classList.remove("open");
    state.isSubmitted = true;
    clearSavedState();

    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }

    // Calculate score
    let correctCount = 0;
    const topicScores = {
      countable_uncountable: { correct: 0, total: 0 },
      referring_nouns: { correct: 0, total: 0 },
      pronouns_referencing: { correct: 0, total: 0 },
      adj_adv: { correct: 0, total: 0 },
      prepositions: { correct: 0, total: 0 }
    };

    state.quizQuestions.forEach((q, idx) => {
      const userAns = state.userAnswers[idx];
      const isCorrect = userAns === q.answer;

      if (isCorrect) correctCount++;

      if (topicScores[q.topicId]) {
        topicScores[q.topicId].total++;
        if (isCorrect) topicScores[q.topicId].correct++;
      }
    });

    const timeSpentStr = formatTime(state.elapsedSeconds);
    recordSubmission(correctCount, TOTAL_QUESTIONS, timeSpentStr);

    // Populate result modal
    elements.resultScore.textContent = correctCount;
    const scale10 = (correctCount / 4).toFixed(1);
    elements.resultScale10.textContent = `Điểm quy đổi: ${scale10} / 10`;

    // Rating
    if (correctCount >= 36) {
      elements.resultRating.textContent = "Xuất sắc! 🎉";
    } else if (correctCount >= 30) {
      elements.resultRating.textContent = "Rất tốt! 🌟";
    } else if (correctCount >= 20) {
      elements.resultRating.textContent = "Khá! Cần ôn luyện thêm 📖";
    } else {
      elements.resultRating.textContent = "Cần cố gắng nhiều hơn! 💪";
    }

    elements.statCorrect.textContent = correctCount;
    elements.statWrong.textContent = Object.keys(state.userAnswers).length - correctCount;
    elements.statUnanswered.textContent = TOTAL_QUESTIONS - Object.keys(state.userAnswers).length;
    elements.statTime.textContent = timeSpentStr;

    // Topic scores
    elements.topicScoreNouns.textContent = `${topicScores.countable_uncountable.correct} / ${topicScores.countable_uncountable.total}`;
    elements.topicScoreReferring.textContent = `${topicScores.referring_nouns.correct} / ${topicScores.referring_nouns.total}`;
    elements.topicScorePronouns.textContent = `${topicScores.pronouns_referencing.correct} / ${topicScores.pronouns_referencing.total}`;
    elements.topicScoreAdjadv.textContent = `${topicScores.adj_adv.correct} / ${topicScores.adj_adv.total}`;
    elements.topicScorePrepositions.textContent = `${topicScores.prepositions.correct} / ${topicScores.prepositions.total}`;

    // Populate 40-item breakdown
    elements.breakdownGrid.innerHTML = "";
    state.quizQuestions.forEach((q, idx) => {
      const item = document.createElement("div");
      item.className = "b-item";
      item.textContent = idx + 1;

      const userAns = state.userAnswers[idx];
      if (userAns === undefined) {
        item.classList.add("unanswered");
      } else if (userAns === q.answer) {
        item.classList.add("correct");
      } else {
        item.classList.add("wrong");
      }

      item.title = `Câu ${idx + 1}: ${userAns === q.answer ? "Đúng" : "Sai"}`;
      item.addEventListener("click", () => {
        elements.resultModal.classList.remove("open");
        goToQuestion(idx);
      });

      elements.breakdownGrid.appendChild(item);
    });

    renderQuestion(state.currentIndex);
    openResultModal();
  }

  function openResultModal() {
    elements.resultModal.classList.add("open");
  }

  // Restart quiz with NEW random set of 40 questions
  function restartWithNewQuiz() {
    if (!state.isSubmitted) {
      if (!confirm("Bạn có chắc chắn muốn bỏ bài thi hiện tại và tạo một đề thi 40 câu ngẫu nhiên mới?")) {
        return;
      }
    }

    clearSavedState();
    elements.resultModal.classList.remove("open");
    elements.confirmModal.classList.remove("open");

    state.quizQuestions = generate40Questions();
    state.currentIndex = 0;
    state.userAnswers = {};
    state.flaggedSet.clear();
    state.remainingSeconds = INITIAL_COUNTDOWN_SECONDS;
    state.elapsedSeconds = 0;
    state.isSubmitted = false;

    buildNavigatorPills();
    renderQuestion(0);
    startTimer();
  }

  // =========================================================================
  // FULL 40 QUESTIONS REVIEW MODAL
  // =========================================================================
  function openFullReviewModal() {
    const container = elements.fullReviewContent;
    container.innerHTML = "";

    state.quizQuestions.forEach((q, idx) => {
      const card = document.createElement("div");
      card.className = "full-review-card";

      const userAns = state.userAnswers[idx];
      const isCorrect = userAns === q.answer;

      let statusBadge = "";
      if (userAns === undefined) {
        statusBadge = `<span class="status-tag" style="background-color: var(--warning-light); color: var(--warning);">Chưa làm</span>`;
      } else if (isCorrect) {
        statusBadge = `<span class="status-tag done" style="background-color: var(--success-light); color: var(--success-dark);">✓ Đúng</span>`;
      } else {
        statusBadge = `<span class="status-tag" style="background-color: var(--danger-light); color: var(--danger);">✗ Sai</span>`;
      }

      let optionsHtml = "";
      q.options.forEach(opt => {
        let optClass = "full-opt-item";
        let optTag = "";
        if (opt.key === q.answer) {
          optClass += " correct";
          optTag = `<strong style="color: var(--success); margin-left: auto;">[Đáp án đúng]</strong>`;
        }
        if (opt.key === userAns && userAns !== q.answer) {
          optClass += " user-wrong";
          optTag = `<strong style="color: var(--danger); margin-left: auto;">[Bạn đã chọn]</strong>`;
        }
        optionsHtml += `
          <div class="${optClass}">
            <strong>${opt.key}.</strong>
            <span>${opt.text}</span>
            ${optTag}
          </div>
        `;
      });

      card.innerHTML = `
        <div class="full-review-header">
          <div class="full-review-title">
            Câu ${idx + 1} / ${TOTAL_QUESTIONS} <small style="color: var(--text-muted); font-weight: 500;">(${q.topicName})</small>
          </div>
          <div>${statusBadge}</div>
        </div>
        <p class="full-q-text">${q.question}</p>
        <div class="full-options-list">
          ${optionsHtml}
        </div>
        <div class="full-exp-box">
          <div><strong>🇻🇳 Dịch nghĩa:</strong> ${q.translation || "Chưa có bản dịch"}</div>
          <div><strong>📚 Giải thích:</strong> ${q.explanation || "Chưa có giải thích"}</div>
        </div>
      `;

      container.appendChild(card);
    });

    elements.fullReviewModal.classList.add("open");
  }

  // =========================================================================
  // ADMIN DASHBOARD & EXCEL (CSV) EXPORT
  // =========================================================================
  function openAdminModal() {
    const submissions = JSON.parse(localStorage.getItem(STORAGE_KEY_SUBMISSIONS) || "[]");
    const visits = state.visitCount;

    elements.adminVisitCount.textContent = visits.toLocaleString();
    elements.adminSubmissionCount.textContent = submissions.length.toLocaleString();

    let avgScore = 0;
    if (submissions.length > 0) {
      const sum = submissions.reduce((acc, curr) => acc + curr.score, 0);
      avgScore = (sum / submissions.length).toFixed(1);
    }
    const avgScale10 = (avgScore / 4).toFixed(1);
    elements.adminAvgScore.textContent = `${avgScore} / 40 (${avgScale10}/10)`;

    const tbody = elements.adminTableBody;
    tbody.innerHTML = "";

    if (submissions.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 20px;">Chưa có lượt nộp bài nào được lưu.</td></tr>`;
    } else {
      submissions.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td><strong>${item.name}</strong></td>
          <td>${item.studentId || "-"}</td>
          <td>${item.className || "-"}</td>
          <td><strong style="color: var(--primary);">${item.score} / ${item.total}</strong></td>
          <td><strong>${item.scale10 || (item.score / 4).toFixed(1)}</strong></td>
          <td>${item.timeSpent}</td>
          <td><small style="color: var(--text-muted);">${item.date}</small></td>
        `;
        tbody.appendChild(tr);
      });
    }

    elements.adminModal.classList.add("open");
  }

  function exportSubmissionsCSV() {
    const submissions = JSON.parse(localStorage.getItem(STORAGE_KEY_SUBMISSIONS) || "[]");
    if (submissions.length === 0) {
      alert("Chưa có dữ liệu sinh viên nộp bài để xuất file.");
      return;
    }

    let csvContent = "\uFEFF"; // UTF-8 BOM for Excel compatibility
    csvContent += "STT,Họ và tên,MSSV,Lớp,Điểm số (/40),Thang điểm 10,Tỉ lệ %,Thời gian làm bài,Thời điểm nộp\n";

    submissions.forEach((item, i) => {
      const row = [
        i + 1,
        `"${item.name.replace(/"/g, '""')}"`,
        `"${(item.studentId || "").replace(/"/g, '""')}"`,
        `"${(item.className || "").replace(/"/g, '""')}"`,
        item.score,
        item.scale10 || (item.score / 4).toFixed(1),
        item.percentage + "%",
        item.timeSpent,
        `"${item.date}"`
      ];
      csvContent += row.join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `TDC_Revision2_BangDiem_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function clearSubmissions() {
    if (confirm("Bạn có chắc chắn muốn xóa tất cả lịch sử nộp bài của sinh viên trên máy này?")) {
      localStorage.removeItem(STORAGE_KEY_SUBMISSIONS);
      openAdminModal();
    }
  }

  // =========================================================================
  // THEME & VIEW SWITCHER
  // =========================================================================
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY_THEME) || "light";
    setTheme(saved);
  }

  function setTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY_THEME, theme);
    elements.themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  function toggleTheme() {
    setTheme(state.theme === "dark" ? "light" : "dark");
  }

  function setViewMode(mode) {
    state.viewMode = mode;
    elements.appRoot.classList.remove("desktop-mode", "ipad-mode", "mobile-mode");
    elements.appRoot.classList.add(`${mode}-mode`);

    document.querySelectorAll(".dev-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.view === mode);
    });
  }

  // =========================================================================
  // EVENT LISTENERS
  // =========================================================================
  function attachEvents() {
    // Navigation inside question card
    elements.btnPrev.addEventListener("click", () => goToQuestion(state.currentIndex - 1));
    elements.btnNext.addEventListener("click", () => goToQuestion(state.currentIndex + 1));
    elements.btnSubmit.addEventListener("click", openSubmitConfirm);
    elements.btnQuickSubmit.addEventListener("click", openSubmitConfirm);
    elements.btnCardFlag.addEventListener("click", toggleFlagCurrentQuestion);
    elements.btnNewQuizTop.addEventListener("click", restartWithNewQuiz);

    // Confirm Modal
    elements.btnConfirmSubmit.addEventListener("click", () => submitQuiz(false));
    elements.btnCancelSubmit.addEventListener("click", () => elements.confirmModal.classList.remove("open"));
    elements.btnCloseConfirm.addEventListener("click", () => elements.confirmModal.classList.remove("open"));

    // Result Modal
    elements.btnCloseResult.addEventListener("click", () => elements.resultModal.classList.remove("open"));
    elements.btnReview.addEventListener("click", () => elements.resultModal.classList.remove("open"));
    elements.btnRestart.addEventListener("click", restartWithNewQuiz);
    elements.btnViewAll40.addEventListener("click", () => {
      elements.resultModal.classList.remove("open");
      openFullReviewModal();
    });

    // Full Review Modal
    elements.btnCloseFullReview.addEventListener("click", () => elements.fullReviewModal.classList.remove("open"));

    // Student Profile Modal
    elements.btnEditStudent.addEventListener("click", () => {
      elements.inputStudentName.value = state.student.name || "";
      elements.inputStudentId.value = state.student.id || "";
      elements.inputStudentClass.value = state.student.className || "";
      elements.studentModal.classList.add("open");
    });
    elements.btnCloseStudent.addEventListener("click", () => elements.studentModal.classList.remove("open"));
    elements.formStudent.addEventListener("submit", saveStudentProfile);

    // Admin Dashboard Modal
    elements.btnAdminOpen.addEventListener("click", openAdminModal);
    elements.btnCloseAdmin.addEventListener("click", () => elements.adminModal.classList.remove("open"));
    elements.btnExportCsv.addEventListener("click", exportSubmissionsCSV);
    elements.btnClearData.addEventListener("click", clearSubmissions);

    // Theme Toggle
    elements.btnThemeToggle.addEventListener("click", toggleTheme);

    // Device View Switcher
    elements.btnViewDesktop.addEventListener("click", () => setViewMode("desktop"));
    elements.btnViewIpad.addEventListener("click", () => setViewMode("ipad"));
    elements.btnViewMobile.addEventListener("click", () => setViewMode("mobile"));

    // Keyboard Shortcuts
    window.addEventListener("keydown", (e) => {
      if (document.querySelector(".modal-backdrop.open")) return;

      if (e.key === "ArrowLeft") {
        goToQuestion(state.currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        goToQuestion(state.currentIndex + 1);
      } else if (["1", "2", "3", "4"].includes(e.key)) {
        const keys = ["A", "B", "C", "D"];
        const key = keys[parseInt(e.key, 10) - 1];
        selectOption(state.currentIndex, key);
      } else if (["a", "b", "c", "d", "A", "B", "C", "D"].includes(e.key)) {
        selectOption(state.currentIndex, e.key.toUpperCase());
      } else if (e.key === "f" || e.key === "F") {
        toggleFlagCurrentQuestion();
      }
    });
  }

  // Initialize on DOM Ready
  document.addEventListener("DOMContentLoaded", initQuiz);

})();
