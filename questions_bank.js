/**
 * NGAN HANG CAU HOI TRAC NGHIEM TIENG ANH - 100 CAU (REVISION 2)
 * Tong hop tu 5 chuyen de cot loi (Moi chu de 20 cau):
 * 1. Countable and Uncountable Nouns (20 cau)
 * 2. Referring to Nouns (20 cau)
 * 3. Pronouns and Referencing (20 cau)
 * 4. Adjectives and Adverbs (20 cau)
 * 5. Prepositions (20 cau)
 *
 * Moi lan lam bai hoac lam lai: He thong tu dong trich xuat 8 cau ngau nhien
 * tu moi chu de (tong cong 40 cau), xao tron thu tu cau hoi va phuong an lua chon.
 */

const QUESTION_BANK = {
  // =========================================================================
  // CHỦ ĐỀ 1: COUNTABLE AND UNCOUNTABLE NOUNS (20 CÂU)
  // =========================================================================
  countable_uncountable: [
    {
      id: 1,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "I have _______ money, enough to buy a ticket.",
      options: [
        { key: "A", text: "a lot of" },
        { key: "B", text: "little" },
        { key: "C", text: "many" },
        { key: "D", text: "a little" }
      ],
      answer: "D",
      translation: "Tôi có một ít tiền, đủ để mua một tấm vé.",
      explanation: "<b>'money'</b> là danh từ không đếm được (uncountable). Vế sau <i>'enough to buy a ticket'</i> mang nghĩa tích cực (có một ít, đủ để mua vé) ➔ dùng <b>'a little'</b>.<br><i>(Lưu ý: 'little' mang nghĩa phủ định, hầu như không có; 'many' chỉ dùng cho danh từ đếm được).</i>"
    },
    {
      id: 2,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "She has _______books, enough to read.",
      options: [
        { key: "A", text: "many" },
        { key: "B", text: "few" },
        { key: "C", text: "a few" },
        { key: "D", text: "a little" }
      ],
      answer: "C",
      translation: "Cô ấy có một vài cuốn sách, đủ để đọc.",
      explanation: "<b>'books'</b> là danh từ đếm được số nhiều. Vế sau <i>'enough to read'</i> (đủ để đọc) thể hiện nghĩa tích cực ➔ dùng <b>'a few'</b>.<br><i>('few' mang nghĩa tiêu cực, hầu như không có; 'a little' chỉ dùng cho danh từ không đếm được).</i>"
    },
    {
      id: 3,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "There _______ traffic on the street at rush hours.",
      options: [
        { key: "A", text: "are too many" },
        { key: "B", text: "is too much" },
        { key: "C", text: "are too a lot" },
        { key: "D", text: "are too little" }
      ],
      answer: "B",
      translation: "Có quá nhiều phương tiện giao thông trên đường vào các giờ cao điểm.",
      explanation: "<b>'traffic'</b> (giao thông/lưu lượng xe) là danh từ không đếm được.<br>➔ Động từ chia số ít <b>'is'</b> và lượng từ chỉ số lượng nhiều là <b>'much'</b> (too much: quá nhiều)."
    },
    {
      id: 4,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "He bought _______ furniture for her new apartment which she has bought recently.",
      options: [
        { key: "A", text: "many" },
        { key: "B", text: "few" },
        { key: "C", text: "much" },
        { key: "D", text: "a few" }
      ],
      answer: "C",
      translation: "Anh ấy đã mua nhiều đồ nội thất cho căn hộ mới mà cô ấy vừa mua gần đây.",
      explanation: "<b>'furniture'</b> (đồ nội thất) là danh từ KHÔNG đếm được trong tiếng Anh.<br>Các lượng từ <i>'many'</i>, <i>'few'</i>, <i>'a few'</i> chỉ đi với danh từ đếm được số nhiều. Do đó đáp án chính xác là <b>'much'</b>."
    },
    {
      id: 5,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "_______ the people I work with are very friendly.",
      options: [
        { key: "A", text: "Some" },
        { key: "B", text: "Some of" },
        { key: "C", text: "A little of" },
        { key: "D", text: "A few" }
      ],
      answer: "B",
      translation: "Một số người làm việc cùng tôi rất thân thiện.",
      explanation: "Khi đứng trước danh từ có mạo từ xác định <i>'the'</i> (the people), ta phải dùng giới từ <i>'of'</i>: <b>'Some of'</b>.<br><i>'Some'</i> và <i>'A few'</i> không thể đứng liền trước 'the people' mà thiếu 'of'; 'people' là danh từ đếm được nên không dùng 'a little of'."
    },
    {
      id: 6,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "_______the money is mine.",
      options: [
        { key: "A", text: "Some" },
        { key: "B", text: "A few of" },
        { key: "C", text: "Many" },
        { key: "D", text: "None of" }
      ],
      answer: "D",
      translation: "Không đồng nào trong số tiền đó là của tôi cả.",
      explanation: "<b>'money'</b> là danh từ không đếm được.<br>- <i>'Some'</i> đứng trước 'the' phải có 'of' (Some of).<br>- <i>'A few of'</i> và <i>'Many'</i> chỉ dùng cho danh từ đếm được số nhiều.<br>➔ <b>'None of'</b> dùng được với danh từ không đếm được mang nghĩa 'Không đồng nào trong số tiền đó là của tôi'."
    },
    {
      id: 7,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "Would you like _______ to eat?",
      options: [
        { key: "A", text: "something" },
        { key: "B", text: "anything" },
        { key: "C", text: "everything" },
        { key: "D", text: "nothing" }
      ],
      answer: "A",
      translation: "Bạn có muốn dùng một chút gì đó để ăn không?",
      explanation: "Trong câu mời hoặc lời đề nghị lịch sự với <i>'Would you like...?'</i>, ta dùng <b>'something'</b> (chứ không dùng 'anything' như câu hỏi thông thường)."
    },
    {
      id: 8,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "The audience clapped their hands so _______ that the singer had to sing again.",
      options: [
        { key: "A", text: "many times" },
        { key: "B", text: "much time" },
        { key: "C", text: "very much" },
        { key: "D", text: "much time" }
      ],
      answer: "A",
      translation: "Khán giả đã vỗ tay nhiều lần đến mức ca sĩ phải hát lại một lần nữa.",
      explanation: "Cấu trúc so...that: <b>'so many times that'</b> = vỗ tay nhiều lần đến nỗi ca sĩ phải hát lại một lần nữa.<br><i>(Ở đây 'times' có 's' nghĩa là 'số lần' - danh từ đếm được số nhiều).</i>"
    },
    {
      id: 9,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "I need _______ fruit for dessert tomorrow. Let’s go to a supermarket.",
      options: [
        { key: "A", text: "many" },
        { key: "B", text: "a few" },
        { key: "C", text: "some" },
        { key: "D", text: "any" }
      ],
      answer: "C",
      translation: "Tôi cần một ít trái cây cho món tráng miệng ngày mai. Chúng ta cùng đi siêu thị nhé.",
      explanation: "<b>'fruit'</b> (trái cây nói chung) là danh từ không đếm được.<br>Trong câu khẳng định (affirmative sentence), ta dùng <b>'some'</b> (Tôi cần một ít trái cây...)."
    },
    {
      id: 10,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "I want to buy _______flowers. Is there _______ flower shop around here?",
      options: [
        { key: "A", text: "some / a" },
        { key: "B", text: "some / any" },
        { key: "C", text: "a little / a" },
        { key: "D", text: "any / some" }
      ],
      answer: "A",
      translation: "Tôi muốn mua một vài bông hoa. Có tiệm hoa nào ở quanh đây không?",
      explanation: "- Vế 1: <i>'flowers'</i> là danh từ đếm được số nhiều trong câu khẳng định ➔ dùng <b>'some'</b>.<br>- Vế 2: <i>'flower shop'</i> là danh từ đếm được số ít (một tiệm hoa) ➔ dùng mạo từ <b>'a'</b>."
    },
    {
      id: 11,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "How _______eggs do you need?",
      options: [
        { key: "A", text: "often" },
        { key: "B", text: "many" },
        { key: "C", text: "about" },
        { key: "D", text: "much" }
      ],
      answer: "B",
      translation: "Bạn cần bao nhiêu quả trứng?",
      explanation: "<b>'eggs'</b> (những quả trứng) là danh từ đếm được số nhiều.<br>➔ Cấu trúc hỏi số lượng danh từ đếm được: <b>'How many + plural noun'</b>."
    },
    {
      id: 12,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "How _______money have you got in your pocket?",
      options: [
        { key: "A", text: "a lot of" },
        { key: "B", text: "any" },
        { key: "C", text: "many" },
        { key: "D", text: "much" }
      ],
      answer: "D",
      translation: "Bạn có bao nhiêu tiền trong túi?",
      explanation: "<b>'money'</b> (tiền) là danh từ không đếm được.<br>➔ Cấu trúc hỏi số lượng danh từ không đếm được: <b>'How much + uncountable noun'</b>."
    },
    {
      id: 13,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "How _______bread_______ for breakfast?",
      options: [
        { key: "A", text: "many / are there" },
        { key: "B", text: "many / there are" },
        { key: "C", text: "much / is there" },
        { key: "D", text: "much / there is" }
      ],
      answer: "C",
      translation: "Còn bao nhiêu bánh mì cho bữa sáng vậy?",
      explanation: "- <b>'bread'</b> (bánh mì) là danh từ không đếm được trong tiếng Anh ➔ dùng <b>'How much'</b>.<br>- Câu hỏi nghi vấn cần đảo trợ từ/to be lên trước: <b>'is there'</b>."
    },
    {
      id: 14,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "If there _______words you don’t understand, use a dictionary.",
      options: [
        { key: "A", text: "has some" },
        { key: "B", text: "are any" },
        { key: "C", text: "is some" },
        { key: "D", text: "is any" }
      ],
      answer: "B",
      translation: "Nếu có bất kỳ từ nào bạn không hiểu, hãy tra từ điển nhé.",
      explanation: "<b>'words'</b> là danh từ đếm được số nhiều ➔ động từ to be là <b>'are'</b>.<br>Trong câu điều kiện có 'If', <b>'any'</b> thường được dùng để chỉ 'bất kỳ': <i>'If there are any words...'</i>."
    },
    {
      id: 15,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "They spent _______time studying Victorian literature.",
      options: [
        { key: "A", text: "few" },
        { key: "B", text: "many" },
        { key: "C", text: "a great deal of" },
        { key: "D", text: "any" }
      ],
      answer: "C",
      translation: "Họ đã dành rất nhiều thời gian để nghiên cứu văn học thời kỳ Victoria.",
      explanation: "<b>'time'</b> (thời gian) là danh từ không đếm được.<br>- <i>'few'</i> và <i>'many'</i> chỉ đi với danh từ đếm được số nhiều.<br>➔ Cụm từ <b>'a great deal of'</b> = rất nhiều, dùng chuyên biệt cho danh từ không đếm được."
    },
    {
      id: 16,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "_______popular expressions in our language have interesting background.",
      options: [
        { key: "A", text: "Little" },
        { key: "B", text: "A lot" },
        { key: "C", text: "Much" },
        { key: "D", text: "A large number of" }
      ],
      answer: "D",
      translation: "Một số lượng lớn các thành ngữ phổ biến trong ngôn ngữ của chúng ta có nguồn gốc rất thú vị.",
      explanation: "<b>'popular expressions'</b> (các thành ngữ) là danh từ đếm được số nhiều.<br>- <i>'Little'</i> và <i>'Much'</i> chỉ dùng cho danh từ không đếm được.<br>- <i>'A lot'</i> phải có 'of' (A lot of).<br>➔ <b>'A large number of'</b> đi kèm danh từ đếm được số nhiều (Một số lượng lớn...)."
    },
    {
      id: 17,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "At the beginning everybody spoke English very quickly and I couldn’t understand _______but after _______days, it is easier and _______things I had learnt came back to me.",
      options: [
        { key: "A", text: "much / a few / many" },
        { key: "B", text: "a lot / little / a lot" },
        { key: "C", text: "much / much / a great number" },
        { key: "D", text: "many / a few / many" }
      ],
      answer: "A",
      translation: "Ban đầu mọi người nói tiếng Anh rất nhanh và tôi không hiểu được nhiều, nhưng sau vài ngày mọi thứ dễ dàng hơn và nhiều điều tôi từng học đã ùa về.",
      explanation: "1) <i>'couldn't understand much'</i> (hiểu được nhiều - dùng <b>'much'</b> trong câu phủ định).<br>2) <i>'after a few days'</i> (<b>'days'</b> là đếm được số nhiều ➔ <b>'a few'</b>: sau vài ngày).<br>3) <i>'many things'</i> (<b>'things'</b> là đếm được số nhiều ➔ <b>'many'</b>)."
    },
    {
      id: 18,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "_______them were at the meeting last night, so they didn’t have knowledge about marketing.",
      options: [
        { key: "A", text: "Neither of" },
        { key: "B", text: "Any of" },
        { key: "C", text: "Many" },
        { key: "D", text: "A lot of" }
      ],
      answer: "A",
      translation: "Cả hai người họ đều không có mặt tại cuộc họp tối qua, vì vậy họ không có kiến thức về tiếp thị.",
      explanation: "Vế sau có kết quả: <i>'so they didn't have knowledge about marketing'</i> (vì vậy họ không có kiến thức về marketing) ➔ suy ra họ đã KHÔNG có mặt.<br>➔ <b>'Neither of them'</b> = Cả hai người họ đều không có mặt."
    },
    {
      id: 19,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "Very _______ people were flying because of terrorist activities then.",
      options: [
        { key: "A", text: "few" },
        { key: "B", text: "a little" },
        { key: "C", text: "a few" },
        { key: "D", text: "little" }
      ],
      answer: "A",
      translation: "Rất ít người đi máy bay vào thời điểm đó vì các hoạt động khủng bố.",
      explanation: "<b>'people'</b> là danh từ đếm được số nhiều.<br>Cụm từ cố định: <b>'Very few + plural noun'</b> = Rất ít người (gần như không có ai).<br><i>(Ta không dùng 'Very a few' hay 'Very little' với people).</i>"
    },
    {
      id: 20,
      topicId: "countable_uncountable",
      topicName: "Countable & Uncountable Nouns",
      question: "I’ve made some little _______ for Claire's birthday party.",
      options: [
        { key: "A", text: "cake" },
        { key: "B", text: "cakes" },
        { key: "C", text: "a cake" },
        { key: "D", text: "much cake" }
      ],
      answer: "B",
      translation: "Tôi đã làm một số chiếc bánh nhỏ cho bữa tiệc sinh nhật của Claire.",
      explanation: "Ở đây từ <i>'little'</i> đóng vai trò là tính từ mô tả kích thước nhỏ nhắn.<br>Sau lượng từ <b>'some'</b> và tính từ 'little', ta cần danh từ đếm được số nhiều ➔ <b>'cakes'</b> (những chiếc bánh nhỏ/bánh cupcake)."
    }
  ],

  // =========================================================================
  // CHỦ ĐỀ 2: REFERRING TO NOUNS (20 CÂU)
  // =========================================================================
  referring_nouns: [
    {
      id: 1,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "Shall we sit in _______ garden for a while?",
      options: [
        { key: "A", text: "an" },
        { key: "B", text: "the" },
        { key: "C", text: "a" },
        { key: "D", text: "no article" }
      ],
      answer: "B",
      translation: "Chúng ta ra ngoài vườn ngồi một lát nhé?",
      explanation: "Dùng mạo từ xác định <b>'the'</b> ('the garden') vì trong ngữ cảnh này, khu vườn là đối tượng cụ thể mà cả người nói và người nghe đều biết rõ (khu vườn của ngôi nhà họ đang ở hoặc đang ghé thăm)."
    },
    {
      id: 2,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "She lives in Alexandra Road. It’s not far from _______ antiques shop.",
      options: [
        { key: "A", text: "an" },
        { key: "B", text: "a" },
        { key: "C", text: "the" },
        { key: "D", text: "no article" }
      ],
      answer: "A",
      translation: "Cô ấy sống ở đường Alexandra. Nơi đó cách không xa một cửa hàng bán đồ cổ.",
      explanation: "Dùng mạo từ bất định <b>'an'</b> trước cụm danh từ đếm được số ít 'antiques shop' được nhắc đến lần đầu tiên (người nghe chưa xác định cụ thể là tiệm đồ cổ nào), và từ 'antiques' bắt đầu bằng nguyên âm /æ/."
    },
    {
      id: 3,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "My husband collected _______antiques. He’s always going to auctions.",
      options: [
        { key: "A", text: "an" },
        { key: "B", text: "the" },
        { key: "C", text: "a" },
        { key: "D", text: "no article" }
      ],
      answer: "D",
      translation: "Chồng tôi sưu tầm đồ cổ. Anh ấy lúc nào cũng đi dự các buổi đấu giá.",
      explanation: "Không dùng mạo từ (<b>no article</b>) trước danh từ số nhiều 'antiques' khi mang nghĩa chỉ chung các món đồ cổ (sở thích sưu tầm đồ cổ nói chung, không chỉ đích danh món đồ cổ cụ thể nào)."
    },
    {
      id: 4,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "I’m not sure, but I think I’d like to be _______architect when I grow up.",
      options: [
        { key: "A", text: "an" },
        { key: "B", text: "a" },
        { key: "C", text: "the" },
        { key: "D", text: "no article" }
      ],
      answer: "A",
      translation: "Tôi không chắc lắm, nhưng tôi nghĩ mình muốn trở thành một kiến trúc sư khi lớn lên.",
      explanation: "Trong tiếng Anh, trước danh từ chỉ nghề nghiệp số ít phải dùng mạo từ bất định 'a/an'. Vì danh từ <b>'architect'</b> bắt đầu bằng nguyên âm /ɑː/ nên ta dùng <b>'an'</b>."
    },
    {
      id: 5,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "I once saw a cat wearing _______ pink coat and boots!",
      options: [
        { key: "A", text: "an" },
        { key: "B", text: "a" },
        { key: "C", text: "the" },
        { key: "D", text: "no article" }
      ],
      answer: "B",
      translation: "Tôi từng nhìn thấy một chú mèo mặc một chiếc áo khoác màu hồng và đi ủng!",
      explanation: "Dùng mạo từ bất định <b>'a'</b> trước cụm danh từ đếm được số ít 'pink coat' được đề cập lần đầu tiên, và từ 'pink' bắt đầu bằng phụ âm /p/."
    },
    {
      id: 6,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "My father likes _______classical music and listens to it all the time.",
      options: [
        { key: "A", text: "an" },
        { key: "B", text: "the" },
        { key: "C", text: "a" },
        { key: "D", text: "no article" }
      ],
      answer: "D",
      translation: "Bố tôi rất thích nhạc cổ điển và nghe thể loại này suốt ngày.",
      explanation: "<b>'Music'</b> là danh từ không đếm được. Khi diễn đạt sở thích chung đối với một thể loại âm nhạc ('classical music' - nhạc cổ điển nói chung), quy tắc ngữ pháp là <b>không dùng mạo từ (no article)</b>."
    },
    {
      id: 7,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "That is _______ problem I told you about.",
      options: [
        { key: "A", text: "an" },
        { key: "B", text: "the" },
        { key: "C", text: "a" },
        { key: "D", text: "no article" }
      ],
      answer: "B",
      translation: "Đó chính là vấn đề mà tôi đã nói với bạn.",
      explanation: "Dùng mạo từ xác định <b>'the'</b> ('the problem') vì danh từ 'problem' đã được xác định cụ thể bởi mệnh đề quan hệ theo sau ('I told you about' - vấn đề mà tôi đã kể cho bạn)."
    },
    {
      id: 8,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "Mr. Chang, with _______ work experience and competence, deserves the promotion.",
      options: [
        { key: "A", text: "he" },
        { key: "B", text: "his" },
        { key: "C", text: "him" },
        { key: "D", text: "himself" }
      ],
      answer: "B",
      translation: "Ông Chang, với kinh nghiệm làm việc và năng lực của mình, rất xứng đáng được thăng chức.",
      explanation: "Chỗ trống đứng trước cụm danh từ 'work experience and competence' nên cần một tính từ sở hữu (possessive adjective) bổ nghĩa. Do chủ ngữ là 'Mr. Chang' (nam giới, số ít) nên chọn <b>'his'</b>."
    },
    {
      id: 9,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "Business owners should think about what _______ can do for the public.",
      options: [
        { key: "A", text: "he" },
        { key: "B", text: "she" },
        { key: "C", text: "they" },
        { key: "D", text: "you" }
      ],
      answer: "C",
      translation: "Các chủ doanh nghiệp nên suy nghĩ về những gì họ có thể làm cho cộng đồng.",
      explanation: "Chỗ trống đóng vai trò đại từ chủ ngữ (subject pronoun) trong mệnh đề danh từ 'what ... can do', thay thế cho danh từ số nhiều đứng trước là 'Business owners' (các chủ doanh nghiệp), vì vậy phải dùng <b>'they'</b>."
    },
    {
      id: 10,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "The first candidate’s qualifications are superior to _______ of the second candidate.",
      options: [
        { key: "A", text: "this" },
        { key: "B", text: "that" },
        { key: "C", text: "them" },
        { key: "D", text: "those" }
      ],
      answer: "D",
      translation: "Bằng cấp và năng lực chuyên môn của ứng viên thứ nhất vượt trội hơn năng lực của ứng viên thứ hai.",
      explanation: "Trong cấu trúc so sánh, để tránh lặp lại danh từ số nhiều 'qualifications', ta dùng đại từ chỉ định thay thế <b>'those'</b> ('those of...' = 'the qualifications of...'). Nếu thay cho danh từ số ít thì dùng 'that'."
    },
    {
      id: 11,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "Ann is doing _______homework.",
      options: [
        { key: "A", text: "their" },
        { key: "B", text: "his" },
        { key: "C", text: "her" },
        { key: "D", text: "its" }
      ],
      answer: "C",
      translation: "Ann đang làm bài tập về nhà của cô ấy.",
      explanation: "Chủ ngữ 'Ann' là danh từ riêng chỉ nữ giới số ít. Chỗ trống đứng trước danh từ 'homework' nên cần tính từ sở hữu (possessive adjective) tương ứng là <b>'her'</b>."
    },
    {
      id: 12,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "Sandy wrote a letter to her parents and sent it to_______ yesterday.",
      options: [
        { key: "A", text: "it" },
        { key: "B", text: "the parents" },
        { key: "C", text: "herself" },
        { key: "D", text: "them" }
      ],
      answer: "D",
      translation: "Sandy đã viết một bức thư cho bố mẹ mình và gửi nó cho họ vào ngày hôm qua.",
      explanation: "Chỗ trống đứng sau giới từ 'to' và thay thế cho tân ngữ số nhiều chỉ người đã được nhắc trước đó là 'her parents' (bố mẹ cô ấy), vì vậy ta dùng đại từ tân ngữ (object pronoun) là <b>'them'</b>."
    },
    {
      id: 13,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "_______ shoes are too big for me.",
      options: [
        { key: "A", text: "This" },
        { key: "B", text: "That" },
        { key: "C", text: "Then" },
        { key: "D", text: "Those" }
      ],
      answer: "D",
      translation: "Những đôi giày kia quá rộng đối với tôi.",
      explanation: "Danh từ 'shoes' là danh từ số nhiều. Trong các phương án, chỉ có <b>'Those'</b> là từ hạn định chỉ định số nhiều (This/That chỉ dùng cho danh từ số ít; Then là trạng từ chỉ thời gian)."
    },
    {
      id: 14,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "William and Tracy love _______ dogs so much.",
      options: [
        { key: "A", text: "their" },
        { key: "B", text: "theirs" },
        { key: "C", text: "they" },
        { key: "D", text: "These" }
      ],
      answer: "A",
      translation: "William và Tracy rất yêu quý những chú chó của họ.",
      explanation: "Cần một tính từ sở hữu (possessive adjective) bổ nghĩa cho danh từ 'dogs'. Chủ ngữ 'William and Tracy' là ngôi thứ ba số nhiều, nên tính từ sở hữu đúng là <b>'their'</b> ('theirs' là đại từ sở hữu đứng độc lập, không đi kèm danh từ)."
    },
    {
      id: 15,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "_______ are his pens with notebooks.",
      options: [
        { key: "A", text: "This" },
        { key: "B", text: "That" },
        { key: "C", text: "These" },
        { key: "D", text: "There" }
      ],
      answer: "C",
      translation: "Đây là những cây bút cùng vở ghi của anh ấy.",
      explanation: "Động từ theo sau là to be số nhiều 'are'. Do đó cần một đại từ chỉ định số nhiều làm chủ ngữ. Trong 4 phương án, chỉ có <b>'These'</b> là đại từ chỉ định số nhiều phù hợp (This/That là số ít)."
    },
    {
      id: 16,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "The teacher told _______an interesting story.",
      options: [
        { key: "A", text: "our" },
        { key: "B", text: "us" },
        { key: "C", text: "his" },
        { key: "D", text: "their" }
      ],
      answer: "B",
      translation: "Thầy/Cô giáo đã kể cho chúng tôi nghe một câu chuyện thú vị.",
      explanation: "Cấu trúc: 'tell + somebody + something' (kể cho ai điều gì). Vị trí sau động từ 'told' đóng vai trò là tân ngữ gián tiếp (indirect object), do đó cần đại từ tân ngữ (object pronoun) <b>'us'</b> (our/his/their là các tính từ sở hữu)."
    },
    {
      id: 17,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "_______ bananas are yellow, but those bananas over there are green.",
      options: [
        { key: "A", text: "This" },
        { key: "B", text: "That" },
        { key: "C", text: "These" },
        { key: "D", text: "Those" }
      ],
      answer: "C",
      translation: "Những quả chuối ở đây đã chín vàng, còn những quả chuối ở đằng kia thì vẫn còn xanh.",
      explanation: "Danh từ 'bananas' là số nhiều, và vế sau có sự đối lập với 'those bananas over there' (những quả chuối ở đằng kia - ở khoảng cách xa). Vì vậy vế đầu dùng để chỉ những quả ở gần người nói, dùng đại từ chỉ định số nhiều <b>'These'</b>."
    },
    {
      id: 18,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "Hoa’s pencil case is blue. _______friends’ pencil cases are violet.",
      options: [
        { key: "A", text: "Her" },
        { key: "B", text: "His" },
        { key: "C", text: "Their" },
        { key: "D", text: "My" }
      ],
      answer: "A",
      translation: "Hộp bút của Hoa màu xanh lam. Hộp bút của các bạn cô ấy có màu tím.",
      explanation: "'Hoa' là danh từ riêng chỉ nữ giới số ít. Vị trí cần điền bổ nghĩa cho danh từ 'friends' (những người bạn của Hoa), do đó dùng tính từ sở hữu <b>'Her'</b> ('Her friends' pencil cases' = Hộp bút của những người bạn của cô ấy)."
    },
    {
      id: 19,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "I want to be a teacher and _______sister wants to be a doctor.",
      options: [
        { key: "A", text: "me" },
        { key: "B", text: "us" },
        { key: "C", text: "them" },
        { key: "D", text: "my" }
      ],
      answer: "D",
      translation: "Tôi muốn trở thành một giáo viên và chị/em gái của tôi muốn trở thành bác sĩ.",
      explanation: "Chỗ trống đứng trước danh từ 'sister' nên cần một tính từ sở hữu (possessive adjective). Với chủ ngữ vế trước là 'I', tính từ sở hữu tương ứng là <b>'my'</b> ('my sister' = chị/em gái của tôi)."
    },
    {
      id: 20,
      topicId: "referring_nouns",
      topicName: "Referring to Nouns",
      question: "Peter is so realistic. _______ is why she loves his drawing.",
      options: [
        { key: "A", text: "This" },
        { key: "B", text: "The" },
        { key: "C", text: "He" },
        { key: "D", text: "Its" }
      ],
      answer: "A",
      translation: "Peter vẽ rất chân thực. Đây chính là lý do tại sao cô ấy yêu thích các bức tranh của anh ấy.",
      explanation: "Cấu trúc: 'This is why + S + V...' (Đây chính là lý do vì sao...). Đại từ chỉ định <b>'This'</b> được dùng để quy chiếu/thay thế cho cả một sự việc hoặc phát biểu đã nêu ở câu liền trước ('Peter is so realistic')."
    }
  ],

  // =========================================================================
  // CHỦ ĐỀ 3: PRONOUNS AND REFERENCING (20 CÂU)
  // =========================================================================
  pronouns_referencing: [
    {
      id: 1,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "The hurricane took several days to blow ________ out.",
      options: [
        { key: "A", text: "it" },
        { key: "B", text: "its" },
        { key: "C", text: "itself" },
        { key: "D", text: "it’s" }
      ],
      answer: "C",
      translation: "Cơn bão đã mất vài ngày để suy yếu dần rồi tự tan biến.",
      explanation: "Cụm phrasal verb/thành ngữ <b>'blow itself out'</b> dùng cho bão hoặc gió lớn, có nghĩa là cơn bão dần yếu đi rồi tự tan biến hoàn toàn. Chủ ngữ 'The hurricane' là danh từ số ít chỉ vật, do đó ta dùng đại từ phản thân tương ứng là <b>'itself'</b>."
    },
    {
      id: 2,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "Jim is looking forward ________ blue shirt everywhere. Have you seen it?",
      options: [
        { key: "A", text: "he" },
        { key: "B", text: "his" },
        { key: "C", text: "him" },
        { key: "D", text: "himself" }
      ],
      answer: "B",
      translation: "Jim đang tìm kiếm chiếc áo sơ mi màu xanh của anh ấy khắp nơi. Bạn có thấy nó không?",
      explanation: "Trước cụm danh từ 'blue shirt' (chiếc áo sơ mi xanh), ta cần một tính từ sở hữu (possessive adjective) là <b>'his'</b> để bổ nghĩa ('his blue shirt' = chiếc áo sơ mi của anh ấy). 'he' là đại từ chủ ngữ, 'him' là tân ngữ, 'himself' là đại từ phản thân."
    },
    {
      id: 3,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "Have you seen ________ stapler?",
      options: [
        { key: "A", text: "I’m" },
        { key: "B", text: "my" },
        { key: "C", text: "mine" },
        { key: "D", text: "me" }
      ],
      answer: "B",
      translation: "Bạn có thấy cái dập ghim của tôi ở đâu không?",
      explanation: "Trước danh từ 'stapler' (cái dập ghim / bấm kim) cần dùng tính từ sở hữu (possessive adjective) <b>'my'</b> (của tôi). 'mine' là đại từ sở hữu đứng độc lập (không đi kèm danh từ theo sau), 'me' là đại từ tân ngữ, 'I’m' là viết tắt của 'I am'."
    },
    {
      id: 4,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "I can do my homework by ________.",
      options: [
        { key: "A", text: "mine" },
        { key: "B", text: "me" },
        { key: "C", text: "myself" },
        { key: "D", text: "my" }
      ],
      answer: "C",
      translation: "Tôi có thể tự mình làm bài tập về nhà.",
      explanation: "Cấu trúc cố định <b>'by + đại từ phản thân'</b> (by myself = on my own) mang nghĩa tự mình làm điều gì đó mà không cần ai giúp đỡ. Với chủ ngữ 'I', đại từ phản thân tương ứng là <b>'myself'</b>."
    },
    {
      id: 5,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "There are two balls in the box. One is white and ________ is blue and red.",
      options: [
        { key: "A", text: "other" },
        { key: "B", text: "others" },
        { key: "C", text: "the other" },
        { key: "D", text: "the others" }
      ],
      answer: "C",
      translation: "Có hai quả bóng trong hộp. Một quả màu trắng và quả còn lại thì có màu xanh và đỏ.",
      explanation: "Khi nói về một nhóm xác định chỉ có đúng 2 đối tượng ('two balls'), sau khi đã nhắc đến đối tượng thứ nhất là 'One', thì đối tượng duy nhất còn lại đã xác định bắt buộc dùng <b>'the other'</b>. 'others' dùng cho các đối tượng số nhiều chưa xác định, 'the others' dùng cho nhóm số nhiều còn lại."
    },
    {
      id: 6,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "Those are ________ books.",
      options: [
        { key: "A", text: "her" },
        { key: "B", text: "hers" },
        { key: "C", text: "she’s" },
        { key: "D", text: "she" }
      ],
      answer: "A",
      translation: "Đó là những cuốn sách của cô ấy.",
      explanation: "Trước danh từ số nhiều 'books' cần dùng tính từ sở hữu (possessive adjective) <b>'her'</b>. 'hers' là đại từ sở hữu (không đứng trước danh từ), 'she' là đại từ chủ ngữ, 'she’s' là viết tắt của 'she is' hoặc 'she has'."
    },
    {
      id: 7,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "________ going to the soccer game.",
      options: [
        { key: "A", text: "Their" },
        { key: "B", text: "There" },
        { key: "C", text: "They’re" },
        { key: "D", text: "There’re" }
      ],
      answer: "C",
      translation: "Họ đang đi đến xem trận đấu bóng đá.",
      explanation: "<b>'They’re'</b> là viết tắt của 'They are' (Đại từ chủ ngữ 'They' + trợ động từ to be 'are'). Kết hợp với 'going' tạo thành thì hiện tại tiếp diễn ('They are going to...'). 'Their' là tính từ sở hữu, 'There' là từ chỉ nơi chốn."
    },
    {
      id: 8,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "He has two dogs: one is from England and ________ is from Germany.",
      options: [
        { key: "A", text: "another" },
        { key: "B", text: "an other" },
        { key: "C", text: "other" },
        { key: "D", text: "the other" }
      ],
      answer: "D",
      translation: "Anh ấy có hai con chó: một con đến từ nước Anh và con còn lại đến từ nước Đức.",
      explanation: "Trong tổng số 2 đối tượng xác định ('two dogs'), sau 'one' thì đối tượng còn lại duy nhất phải dùng <b>'the other'</b>. 'another' chỉ dùng khi nói về một đối tượng khác không xác định trong nhóm có từ 3 đối tượng trở lên."
    },
    {
      id: 9,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "Sandy wrote a letter to her parents and sent it to ________ yesterday.",
      options: [
        { key: "A", text: "herself" },
        { key: "B", text: "the parents" },
        { key: "C", text: "it" },
        { key: "D", text: "them" }
      ],
      answer: "D",
      translation: "Sandy đã viết một lá thư cho bố mẹ mình và gửi nó cho họ vào ngày hôm qua.",
      explanation: "'her parents' là danh từ số nhiều chỉ người. Sau giới từ 'to', ta cần một đại từ tân ngữ (object pronoun) ở ngôi thứ 3 số nhiều là <b>'them'</b> để thay thế cho 'her parents' nhằm tránh lặp lại danh từ."
    },
    {
      id: 10,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "Many of the audience members at the concert forgot to bring ________ umbrellas.",
      options: [
        { key: "A", text: "their" },
        { key: "B", text: "his" },
        { key: "C", text: "our" },
        { key: "D", text: "theirs" }
      ],
      answer: "A",
      translation: "Nhiều khán giả tại buổi hòa nhạc đã quên mang theo ô của họ.",
      explanation: "Chủ ngữ 'Many of the audience members' là danh từ số nhiều (nhiều khán giả). Do đó, tính từ sở hữu bổ nghĩa cho danh từ 'umbrellas' phải tương ứng ở ngôi thứ 3 số nhiều là <b>'their'</b> (của họ). 'theirs' là đại từ sở hữu, không đứng trước danh từ."
    },
    {
      id: 11,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "The couple painted their house ________.",
      options: [
        { key: "A", text: "herself" },
        { key: "B", text: "themselves" },
        { key: "C", text: "his or herself" },
        { key: "D", text: "himself" }
      ],
      answer: "B",
      translation: "Hai vợ chồng đã tự mình sơn ngôi nhà của họ.",
      explanation: "'The couple' (cặp đôi, hai vợ chồng) là chủ ngữ số nhiều gồm 2 người. Đại từ phản thân (reflexive pronoun) số nhiều <b>'themselves'</b> được dùng ở cuối mệnh đề để nhấn mạnh chính hai người họ tự làm việc đó mà không nhờ hay thuê người khác."
    },
    {
      id: 12,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "Sorry, this is taking so long. Can you wait for ________ ten minutes?",
      options: [
        { key: "A", text: "other" },
        { key: "B", text: "an other" },
        { key: "C", text: "another" },
        { key: "D", text: "few" }
      ],
      answer: "C",
      translation: "Xin lỗi vì việc này mất nhiều thời gian quá. Bạn có thể đợi thêm mười phút nữa được không?",
      explanation: "Quy tắc ngữ pháp đặc biệt: <b>'another'</b> có thể kết hợp với cụm từ chỉ thời gian / khoảng cách / số lượng có số đếm ('another + number + plural noun') mang ý nghĩa là 'thêm... nữa'. Ví dụ: 'another ten minutes' = thêm 10 phút nữa. 'other' không đi với số đếm theo cấu trúc này."
    },
    {
      id: 13,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "Brian and Diana phone ________ almost every day.",
      options: [
        { key: "A", text: "themselves" },
        { key: "B", text: "them self" },
        { key: "C", text: "each other" },
        { key: "D", text: "the other" }
      ],
      answer: "C",
      translation: "Brian và Diana gọi điện thoại cho nhau hầu như mỗi ngày.",
      explanation: "<b>'Each other'</b> là đại từ tương hỗ (reciprocal pronoun) dùng khi 2 đối tượng thực hiện hành động qua lại lẫn nhau (Brian gọi Diana và Diana gọi Brian). Dùng 'themselves' sẽ mang nghĩa phi lý là mỗi người tự gọi điện thoại cho chính mình."
    },
    {
      id: 14,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "He seems to have cut ________ shaving this morning.",
      options: [
        { key: "A", text: "him" },
        { key: "B", text: "himself" },
        { key: "C", text: "his" },
        { key: "D", text: "he" }
      ],
      answer: "B",
      translation: "Anh ấy dường như đã tự làm đứt da mình khi cạo râu sáng nay.",
      explanation: "Khi chủ ngữ thực hiện hành động tác động lên chính bản thân mình (chủ ngữ và tân ngữ cùng là một người), ta phải dùng đại từ phản thân (reflexive pronoun). Với chủ ngữ 'He', đại từ phản thân tương ứng là <b>'himself'</b> (cut himself = tự làm trầy xước/cắt vào da mình)."
    },
    {
      id: 15,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "When I saw her last night, she was talking to ________ loudly.",
      options: [
        { key: "A", text: "themselves" },
        { key: "B", text: "hers" },
        { key: "C", text: "herself" },
        { key: "D", text: "she" }
      ],
      answer: "C",
      translation: "Khi tôi nhìn thấy cô ấy tối qua, cô ấy đang tự nói chuyện một mình rất to.",
      explanation: "Chủ ngữ là 'she' (ngôi thứ 3 số ít). Hành động tự nói chuyện với chính mình ('talk to oneself') cần dùng đại từ phản thân tương ứng là <b>'herself'</b> (talking to herself = tự nói một mình)."
    },
    {
      id: 16,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "Good-bye, Eduardo and Maria. Please take good care of ________.",
      options: [
        { key: "A", text: "yourself" },
        { key: "B", text: "themselves" },
        { key: "C", text: "yourselves" },
        { key: "D", text: "theirs" }
      ],
      answer: "C",
      translation: "Tạm biệt Eduardo và Maria. Hai bạn nhớ tự chăm sóc bản thân thật tốt nhé.",
      explanation: "Người nói đang trực tiếp nói chuyện với hai người ('Eduardo and Maria' - ngôi thứ 2 số nhiều 'you'). Cụm từ 'take care of + đại từ phản thân', dạng số nhiều của ngôi thứ 2 là <b>'yourselves'</b> (các bạn hãy tự chăm sóc mình). 'yourself' chỉ dùng cho một người số ít."
    },
    {
      id: 17,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "This bag is very old. I need a new ________.",
      options: [
        { key: "A", text: "bag" },
        { key: "B", text: "bags" },
        { key: "C", text: "one" },
        { key: "D", text: "ones" }
      ],
      answer: "C",
      translation: "Chiếc túi này cũ lắm rồi. Tôi cần một chiếc mới.",
      explanation: "<b>'One'</b> là đại từ thay thế (pronoun of reference / substitution) dùng để thay thế cho một danh từ đếm được số ít ('bag') đã nhắc ở câu trước nhằm tránh lặp lại từ. Đi sau mạo từ 'a' và tính từ 'new' ('a new one') bắt buộc dùng 'one' số ít."
    },
    {
      id: 18,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "The new smartphones are much faster than the old________.",
      options: [
        { key: "A", text: "one" },
        { key: "B", text: "ones" },
        { key: "C", text: "other" },
        { key: "D", text: "another" }
      ],
      answer: "B",
      translation: "Những chiếc điện thoại thông minh mới nhanh hơn nhiều so với những chiếc cũ.",
      explanation: "<b>'Ones'</b> là đại từ thay thế cho danh từ số nhiều ('smartphones') đã xuất hiện ở phía trước để tránh việc lặp từ ('the old ones' = the old smartphones)."
    },
    {
      id: 19,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "I need some new glasses. ________ I have at the moment are broken.",
      options: [
        { key: "A", text: "The one" },
        { key: "B", text: "The ones" },
        { key: "C", text: "The glass" },
        { key: "D", text: "Glasses" }
      ],
      answer: "B",
      translation: "Tôi cần mua kính mới. Những chiếc tôi đang có lúc này đều đã bị vỡ rồi.",
      explanation: "'Glasses' (mắt kính) là danh từ luôn ở dạng số nhiều. Để thay thế cho danh từ số nhiều xác định này khi đi kèm với một mệnh đề quan hệ xác định ('that I have at the moment'), ta dùng đại từ thay thế xác định số nhiều <b>'The ones'</b>."
    },
    {
      id: 20,
      topicId: "pronouns_referencing",
      topicName: "Pronouns & Referencing",
      question: "Jane has already done her work, but I’m saving ________until later.",
      options: [
        { key: "A", text: "hers" },
        { key: "B", text: "her" },
        { key: "C", text: "mine" },
        { key: "D", text: "my" }
      ],
      answer: "C",
      translation: "Jane đã hoàn thành xong công việc của cô ấy rồi, nhưng tôi thì để dành việc của mình đến lát nữa mới làm.",
      explanation: "Ta cần một đại từ sở hữu (possessive pronoun) làm tân ngữ cho động từ 'saving', mang ý nghĩa là 'công việc của tôi' ('my work') để tương phản với 'her work'. Dùng <b>'mine'</b> để tránh lặp lại từ 'work'. 'my' là tính từ sở hữu, bắt buộc phải có danh từ theo sau."
    }
  ],

  // =========================================================================
  // CHỦ ĐỀ 4: ADJECTIVES AND ADVERBS (20 CÂU)
  // =========================================================================
  adj_adv: [
    {
      id: 1,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "I can ________ understand what he says.",
      options: [
        { key: "A", text: "ease" },
        { key: "B", text: "easier" },
        { key: "C", text: "easy" },
        { key: "D", text: "easily" }
      ],
      answer: "D",
      translation: "Tôi có thể dễ dàng hiểu được những gì anh ấy nói.",
      explanation: "Vị trí đứng trước động từ chính 'understand' (hoặc giữa trợ động từ 'can' và động từ chính) cần một trạng từ chỉ thể cách (Adverb of manner) để bổ nghĩa cho động từ đó. Trong 4 phương án:\n• 'ease': danh từ/động từ\n• 'easier': tính từ so sánh hơn\n• 'easy': tính từ\n• 'easily': trạng từ (một cách dễ dàng) ➔ Đáp án D. <b>easily</b>."
    },
    {
      id: 2,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "The interviews with parents showed that the vast majority were ________ of teachers.",
      options: [
        { key: "A", text: "support" },
        { key: "B", text: "supportive" },
        { key: "C", text: "supporter" },
        { key: "D", text: "supporting" }
      ],
      answer: "B",
      translation: "Các cuộc phỏng vấn với các bậc phụ huynh cho thấy đại đa số họ đều ủng hộ các giáo viên.",
      explanation: "Cấu trúc cụm tính từ đi kèm giới từ: <b>'to be supportive of somebody/something'</b> có nghĩa là ủng hộ, tương trợ ai đó/điều gì đó. Sau động từ to be 'were' ta cần một tính từ miêu tả thái độ ➔ Đáp án B. <b>supportive</b>."
    },
    {
      id: 3,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "London is home to people of many ________ cultures.",
      options: [
        { key: "A", text: "diverse" },
        { key: "B", text: "diversity" },
        { key: "C", text: "diversify" },
        { key: "D", text: "diversification" }
      ],
      answer: "A",
      translation: "London là nơi sinh sống của người dân đến từ nhiều nền văn hóa đa dạng.",
      explanation: "Vị trí đứng trước danh từ số nhiều 'cultures' (các nền văn hóa) cần một tính từ (Adjective) để bổ nghĩa cho danh từ đó ('diverse cultures' = các nền văn hóa phong phú, đa dạng) ➔ Đáp án A. <b>diverse</b>."
    },
    {
      id: 4,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "They had a ________ candlelit dinner last night and she accepted his proposal of marriage.",
      options: [
        { key: "A", text: "romance" },
        { key: "B", text: "romanticize" },
        { key: "C", text: "romantically" },
        { key: "D", text: "romantic" }
      ],
      answer: "D",
      translation: "Tối qua họ đã có một bữa tối lãng mạn dưới ánh nến và cô ấy đã nhận lời cầu hôn của anh.",
      explanation: "Vị trí đứng trước cụm danh từ 'candlelit dinner' (bữa tối dưới ánh nến) cần một tính từ (Adjective) để miêu tả tính chất của bữa tối đó ('a romantic candlelit dinner') ➔ Đáp án D. <b>romantic</b>."
    },
    {
      id: 5,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "If a boss wants to have a well-qualified staff, he should have to pay his employees________.",
      options: [
        { key: "A", text: "appropriately" },
        { key: "B", text: "appropriate" },
        { key: "C", text: "appropriation" },
        { key: "D", text: "appropriating" }
      ],
      answer: "A",
      translation: "Nếu người sếp muốn có một đội ngũ nhân viên giỏi, ông ấy phải trả lương cho nhân viên một cách thỏa đáng.",
      explanation: "Cấu trúc bổ ngữ cho động từ hành động: [Verb + Object + Adverb]. Ở đây động từ 'pay' (trả lương) đi kèm tân ngữ 'his employees', do đó từ đứng sau tân ngữ phải là một trạng từ chỉ thể cách (Adverb of manner) bổ nghĩa cho 'pay' ➔ Đáp án A. <b>appropriately</b>."
    },
    {
      id: 6,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "As an ________, Mr. Pike is very worried about the increasing of juvenile delinquency.",
      options: [
        { key: "A", text: "educate" },
        { key: "B", text: "education" },
        { key: "C", text: "educator" },
        { key: "D", text: "educative" }
      ],
      answer: "C",
      translation: "Với tư cách là một nhà giáo dục, ông Pike rất lo lắng về sự gia tăng của tình trạng phạm pháp ở tuổi vị thành niên.",
      explanation: "Cấu trúc 'As an + [Noun chỉ người/nghề nghiệp]' đứng đầu câu để chỉ cương vị, nghề nghiệp tương ứng với chủ ngữ 'Mr. Pike'. Sau mạo từ 'an' cần một danh từ số ít chỉ người bắt đầu bằng nguyên âm ➔ Đáp án C. <b>educator</b>."
    },
    {
      id: 7,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "The Minister of the Education and Training Department appeared on TV last night to ________ his new policy.",
      options: [
        { key: "A", text: "public" },
        { key: "B", text: "publicly" },
        { key: "C", text: "publicize" },
        { key: "D", text: "publicizing" }
      ],
      answer: "C",
      translation: "Bộ trưởng Bộ Giáo dục và Đào tạo đã xuất hiện trên truyền hình tối qua để công bố chính sách mới của mình.",
      explanation: "Cấu trúc chỉ mục đích trong tiếng Anh: 'to + V-infinitive' (để làm gì). Sau 'to' cần một động từ nguyên thể có tân ngữ theo sau ('his new policy') ➔ Đáp án C. <b>publicize</b>."
    },
    {
      id: 8,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "Sara speaks so ________ that I can't understand her.",
      options: [
        { key: "A", text: "fastly" },
        { key: "B", text: "fast" },
        { key: "C", text: "faster" },
        { key: "D", text: "fastest" }
      ],
      answer: "B",
      translation: "Sara nói nhanh đến mức tôi không thể hiểu được những gì cô ấy nói.",
      explanation: "Cấu trúc 'so + adv + that...'. 'fast' vừa là tính từ vừa là trạng từ bất quy tắc (không thêm -ly, không có từ 'fastly'). Ngữ cảnh không so sánh nên dùng dạng nguyên thể ➔ Đáp án B. <b>fast</b>."
    },
    {
      id: 9,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "She bought _________ for her younger brother yesterday afternoon.",
      options: [
        { key: "A", text: "a pair of sport new French shoes" },
        { key: "B", text: "a pair of new sport French shoes" },
        { key: "C", text: "a pair of new French sport shoes" },
        { key: "D", text: "a pair of French new sport shoes" }
      ],
      answer: "C",
      translation: "Chiều hôm qua cô ấy đã mua một đôi giày thể thao Pháp mới cho em trai mình.",
      explanation: "Quy tắc trật tự tính từ OSASCOMP: Age (new) -> Origin (French) -> Purpose (sport) + shoes => <b>'a pair of new French sport shoes'</b>. Do đó đáp án chính xác là C."
    },
    {
      id: 10,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "He sat beside _________ covered with books.",
      options: [
        { key: "A", text: "an old wooden thick table" },
        { key: "B", text: "a wooden thick old table" },
        { key: "C", text: "a thick wooden old table" },
        { key: "D", text: "a thick old wooden table" }
      ],
      answer: "D",
      translation: "Anh ấy ngồi cạnh một chiếc bàn gỗ cũ dày cộm phủ đầy sách.",
      explanation: "Quy tắc trật tự tính từ OSASCOMP: Size (thick) -> Age (old) -> Material (wooden) => <b>'a thick old wooden table'</b>. Do đó đáp án đúng là D."
    },
    {
      id: 11,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "Edward felt ________ after the big meal.",
      options: [
        { key: "A", text: "sleep" },
        { key: "B", text: "sleepy" },
        { key: "C", text: "sleepily" },
        { key: "D", text: "slept" }
      ],
      answer: "B",
      translation: "Edward cảm thấy buồn ngủ sau bữa ăn no nê.",
      explanation: "Động từ 'feel' (quá khứ là 'felt') trong ngữ cảnh này là Linking Verb miêu tả trạng thái, cảm giác. Theo sau Linking Verb là Tính từ (Adjective) ➔ Đáp án B. <b>sleepy</b>."
    },
    {
      id: 12,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "The theater got ________ when the movie began.",
      options: [
        { key: "A", text: "quiet" },
        { key: "B", text: "quietly" },
        { key: "C", text: "quietness" },
        { key: "D", text: "more quieter" }
      ],
      answer: "A",
      translation: "Rạp hát trở nên yên ắng khi bộ phim bắt đầu chiếu.",
      explanation: "Động từ 'get' (ở quá khứ là 'got') là một Linking Verb mang nghĩa 'trở nên, trở thành'. Cấu trúc: 'get + Adjective' ➔ Đáp án A. <b>quiet</b>."
    },
    {
      id: 13,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "He grew more and more ________ as she told him the story.",
      options: [
        { key: "A", text: "angry" },
        { key: "B", text: "angrily" },
        { key: "C", text: "anger" },
        { key: "D", text: "angrier" }
      ],
      answer: "A",
      translation: "Anh ấy càng lúc càng trở nên tức giận khi nghe cô ấy kể lại câu chuyện.",
      explanation: "Động từ 'grow' (quá khứ là 'grew') là Linking Verb. Cấu trúc so sánh lũy tiến: 'more and more + Adjective nguyên cấp' ➔ Đáp án A. <b>angry</b>."
    },
    {
      id: 14,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "They sounded the alarm ________ when they smelled the smoke of the fire.",
      options: [
        { key: "A", text: "louder" },
        { key: "B", text: "loud" },
        { key: "C", text: "loudly" },
        { key: "D", text: "loudness" }
      ],
      answer: "C",
      translation: "Họ đã bấm chuông báo động một cách ầm ĩ khi ngửi thấy mùi khói của đám cháy.",
      explanation: "'sound' ở đây là ngoại động từ chỉ hành động ('sounded the alarm' = bấm còi/chuông báo động) đi kèm tân ngữ 'the alarm'. Để bổ nghĩa cho hành động đó cần trạng từ chỉ thể cách ➔ Đáp án C. <b>loudly</b>."
    },
    {
      id: 15,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "He ________ to find a job but he had no luck.",
      options: [
        { key: "A", text: "hardly tries" },
        { key: "B", text: "tried hardly" },
        { key: "C", text: "hard tries" },
        { key: "D", text: "tried hard" }
      ],
      answer: "D",
      translation: "Anh ấy đã cố gắng hết sức để tìm một công việc nhưng không gặp may.",
      explanation: "1) Quá khứ đơn 'tried' (đồng nhất với 'had no luck'). 2) 'try hard' = nỗ lực, cố gắng hết mình ('hardly' mang nghĩa phủ định 'hầu như không') ➔ Đáp án D. <b>tried hard</b>."
    },
    {
      id: 16,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "________, I have started jogging at night.",
      options: [
        { key: "A", text: "Late" },
        { key: "B", text: "Later" },
        { key: "C", text: "Lately" },
        { key: "D", text: "Latest" }
      ],
      answer: "C",
      translation: "Dạo gần đây, tôi đã bắt đầu đi chạy bộ vào ban đêm.",
      explanation: "<b>'Lately'</b> (adv) = dạo gần đây (= recently), là dấu hiệu đặc trưng của thì hiện tại hoàn thành ('have started'). ('Late' là muộn, trễ) ➔ Đáp án C. <b>Lately</b>."
    },
    {
      id: 17,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "Is the store ________ on Sundays?",
      options: [
        { key: "A", text: "open" },
        { key: "B", text: "opens" },
        { key: "C", text: "will open" },
        { key: "D", text: "to opening" }
      ],
      answer: "A",
      translation: "Cửa hàng có mở cửa vào các ngày Chủ nhật không?",
      explanation: "Trong câu hỏi với to be 'Is [Subject] + [Adj]?', từ <b>'open'</b> đóng vai trò là một TÍNH TỪ chỉ trạng thái mở cửa hoạt động (trái nghĩa với closed - đóng cửa) ➔ Đáp án A. <b>open</b>."
    },
    {
      id: 18,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "It was an ________ experience in my life.",
      options: [
        { key: "A", text: "extremely frightened" },
        { key: "B", text: "frightened extremely" },
        { key: "C", text: "extremely frightening" },
        { key: "D", text: "frightening extremely" }
      ],
      answer: "C",
      translation: "Đó là một trải nghiệm cực kỳ đáng sợ trong cuộc đời tôi.",
      explanation: "Tính từ đuôi -ing (frightening) miêu tả bản chất gây sợ hãi của sự việc 'experience'. Trạng từ mức độ 'extremely' đứng trước tính từ ➔ Đáp án C. <b>extremely frightening</b>."
    },
    {
      id: 19,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "What is this ________ thing on the cake?",
      options: [
        { key: "A", text: "round disgusting pink" },
        { key: "B", text: "disgusting pink round" },
        { key: "C", text: "disgusting round pink" },
        { key: "D", text: "round pink disgusting" }
      ],
      answer: "C",
      translation: "Cái thứ màu hồng tròn tròn trông gớm ghiếc này trên chiếc bánh là cái gì thế?",
      explanation: "Trật tự tính từ OSASCOMP: Opinion (disgusting) -> Shape (round) -> Color (pink) => <b>'disgusting round pink thing'</b>. Do đó đáp án chính xác là C."
    },
    {
      id: 20,
      topicId: "adj_adv",
      topicName: "Adjectives & Adverbs",
      question: "We had ________ lake right in front of us.",
      options: [
        { key: "A", text: "an amazing enormous blue" },
        { key: "B", text: "an enormous amazing blue" },
        { key: "C", text: "a blue enormous amazing" },
        { key: "D", text: "an amazing blue enormous" }
      ],
      answer: "A",
      translation: "Chúng tôi có một hồ nước xanh ngắt to lớn tuyệt đẹp ngay trước mắt mình.",
      explanation: "Trật tự tính từ OSASCOMP: Opinion (amazing) -> Size (enormous) -> Color (blue) => <b>'an amazing enormous blue lake'</b>. Do đó đáp án đúng là A."
    }
  ],

  // =========================================================================
  // CHỦ ĐỀ 5: PREPOSITIONS (20 CÂU)
  // =========================================================================
  prepositions: [
    {
      id: 1,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "More and more rare animals are ________ danger of extinction.",
      options: [
        { key: "A", text: "for" },
        { key: "B", text: "on" },
        { key: "C", text: "at" },
        { key: "D", text: "in" }
      ],
      answer: "D",
      translation: "Ngày càng có nhiều loài động vật quý hiếm đang đứng trước nguy cơ tuyệt chủng.",
      explanation: "Cụm cố định (Collocation): <b>'in danger of (something/extinction)'</b> có nghĩa là đang gặp nguy hiểm, có nguy cơ (bị tuyệt chủng). Ngược lại là 'out of danger' (đã qua cơn nguy hiểm)."
    },
    {
      id: 2,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "He may be quick________ understanding but he isn’t capable ________ remembering anything.",
      options: [
        { key: "A", text: "at, of" },
        { key: "B", text: "of, at" },
        { key: "C", text: "for, to" },
        { key: "D", text: "in, of" }
      ],
      answer: "A",
      translation: "Anh ấy có thể nhanh hiểu vấn đề nhưng lại không có khả năng ghi nhớ bất cứ thứ gì.",
      explanation: "• Vế 1: <b>'quick at doing something'</b> nghĩa là nhanh nhẹn, sáng dạ trong việc gì.<br>• Vế 2: <b>'capable of doing something'</b> nghĩa là có năng lực, khả năng làm điều gì.<br>Kết hợp cả 2 vế là cặp giới từ <b>'at, of'</b> (Đáp án A)."
    },
    {
      id: 3,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "I don’t think this position is suitable ________ someone of his experience.",
      options: [
        { key: "A", text: "with" },
        { key: "B", text: "to" },
        { key: "C", text: "for" },
        { key: "D", text: "about" }
      ],
      answer: "C",
      translation: "Tôi không nghĩ vị trí công việc này phù hợp với một người có bề dày kinh nghiệm như anh ấy.",
      explanation: "Cấu trúc tính từ: <b>'suitable FOR somebody/something'</b> nghĩa là thích hợp, phù hợp với ai hoặc việc gì. Đáp án đúng là C. <b>for</b>."
    },
    {
      id: 4,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "The teacher explained the competition rules ________ the students very carefully.",
      options: [
        { key: "A", text: "to" },
        { key: "B", text: "with" },
        { key: "C", text: "for" },
        { key: "D", text: "of" }
      ],
      answer: "A",
      translation: "Giáo viên đã giải thích các quy định của cuộc thi cho các bạn học sinh một cách rất cẩn thận.",
      explanation: "Cấu trúc động từ: <b>'explain something TO somebody'</b> nghĩa là giải thích, giảng giải điều gì cho ai nghe. Tiếng Anh bắt buộc dùng giới từ 'to', không dùng 'with' hay 'for'."
    },
    {
      id: 5,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "It was most generous ________ you to lend me the money.",
      options: [
        { key: "A", text: "for" },
        { key: "B", text: "of" },
        { key: "C", text: "with" },
        { key: "D", text: "from" }
      ],
      answer: "B",
      translation: "Bạn thật là hào phóng khi đã cho tôi mượn số tiền đó.",
      explanation: "Cấu trúc đánh giá tính cách, phẩm chất: <b>'It is/was + [Tính từ tính cách] + OF somebody + to-V'</b>. Các tính từ như: generous, kind, nice, polite... luôn đi với giới từ <b>'of'</b>."
    },
    {
      id: 6,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "He apologized ________not being able to complete the poem.",
      options: [
        { key: "A", text: "in" },
        { key: "B", text: "to" },
        { key: "C", text: "at" },
        { key: "D", text: "for" }
      ],
      answer: "D",
      translation: "Anh ấy đã xin lỗi vì không thể hoàn thành bài thơ.",
      explanation: "Cấu trúc động từ xin lỗi: <b>'apologize (to somebody) FOR (doing) something'</b> nghĩa là xin lỗi (ai) vì chuyện gì/vì đã làm gì. Phía sau là hành động nêu lý do xin lỗi nên dùng <b>'for'</b>."
    },
    {
      id: 7,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "They had met ________ chance at university and finished up getting married.",
      options: [
        { key: "A", text: "on" },
        { key: "B", text: "in" },
        { key: "C", text: "at" },
        { key: "D", text: "by" }
      ],
      answer: "D",
      translation: "Họ tình cờ gặp nhau ở trường đại học và cuối cùng đã tiến tới hôn nhân.",
      explanation: "Cụm trạng từ cố định: <b>'by chance'</b> (= 'by accident') có nghĩa là tình cờ, ngẫu nhiên, không sắp đặt trước (trái nghĩa với 'on purpose' - cố ý). Do đó đáp án là D. <b>by</b>."
    },
    {
      id: 8,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "We don’t approve ________ hunting animals for sport.",
      options: [
        { key: "A", text: "on" },
        { key: "B", text: "of" },
        { key: "C", text: "with" },
        { key: "D", text: "to" }
      ],
      answer: "B",
      translation: "Chúng tôi không tán thành việc săn bắn động vật để làm trò tiêu khiển.",
      explanation: "Cấu trúc động từ: <b>'approve OF somebody/something / doing something'</b> có nghĩa là tán thành, ủng hộ việc gì (trái nghĩa là 'disapprove of'). Do đó chọn B. <b>of</b>."
    },
    {
      id: 9,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "In England, schooling is compulsory ________ all children from the age of 5 to 16.",
      options: [
        { key: "A", text: "to" },
        { key: "B", text: "from" },
        { key: "C", text: "for" },
        { key: "D", text: "of" }
      ],
      answer: "C",
      translation: "Ở nước Anh, việc đi học là bắt buộc đối với tất cả trẻ em từ 5 đến 16 tuổi.",
      explanation: "Cấu trúc tính từ: <b>'compulsory FOR somebody'</b> nghĩa là mang tính bắt buộc đối với đối tượng nào. Do đó chọn C. <b>for</b>."
    },
    {
      id: 10,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "Many women today prefer wearing modern clothing ________ traditional clothing.",
      options: [
        { key: "A", text: "to" },
        { key: "B", text: "with" },
        { key: "C", text: "from" },
        { key: "D", text: "on" }
      ],
      answer: "A",
      translation: "Nhiều phụ nữ ngày nay thích mặc trang phục hiện đại hơn trang phục truyền thống.",
      explanation: "Cấu trúc so sánh sở thích: <b>'prefer something TO something'</b> hoặc 'prefer V-ing TO V-ing' (thích cái gì hơn cái gì). Bắt buộc dùng giới từ <b>'to'</b>, không dùng 'than'."
    },
    {
      id: 11,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "We all agree ________you. Let’s start ________ once.",
      options: [
        { key: "A", text: "with, at" },
        { key: "B", text: "to, to" },
        { key: "C", text: "for, in" },
        { key: "D", text: "on, with" }
      ],
      answer: "A",
      translation: "Tất cả chúng tôi đều đồng ý với bạn. Chúng ta hãy bắt đầu ngay lập tức nhé.",
      explanation: "• Vế 1: <b>'agree WITH somebody'</b> = đồng ý, tán thành với ai.<br>• Vế 2: Thành ngữ <b>'at once'</b> = ngay lập tức (immediately).<br>Cặp giới từ đúng là <b>'with, at'</b> (Đáp án A)."
    },
    {
      id: 12,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "We are all responsible ________ keeping the environment clean and clear.",
      options: [
        { key: "A", text: "for" },
        { key: "B", text: "of" },
        { key: "C", text: "to" },
        { key: "D", text: "about" }
      ],
      answer: "A",
      translation: "Tất cả chúng ta đều có trách nhiệm giữ gìn môi trường trong lành và sạch đẹp.",
      explanation: "Cấu trúc tính từ: <b>'responsible FOR something / doing something'</b> nghĩa là chịu trách nhiệm về việc gì hoặc nhiệm vụ gì. Do đó chọn A. <b>for</b>."
    },
    {
      id: 13,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "Please fill the glass ________ cold water.",
      options: [
        { key: "A", text: "for" },
        { key: "B", text: "with" },
        { key: "C", text: "of" },
        { key: "D", text: "to" }
      ],
      answer: "B",
      translation: "Làm ơn hãy rót đầy ly nước này bằng nước lạnh.",
      explanation: "Cấu trúc động từ: <b>'fill something WITH something'</b> nghĩa là đổ đầy, rót đầy vật gì bằng chất liệu/chất lỏng gì. (Phân biệt với tính từ: 'The glass is full OF water'). Do đó chọn B. <b>with</b>."
    },
    {
      id: 14,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "I’m sure you are tired ________ doing this work.",
      options: [
        { key: "A", text: "of" },
        { key: "B", text: "for" },
        { key: "C", text: "from" },
        { key: "D", text: "to" }
      ],
      answer: "A",
      translation: "Tôi chắc chắn rằng bạn đã cảm thấy chán ngấy với việc làm công việc này.",
      explanation: "Cụm tính từ quen thuộc: <b>'tired OF (doing) something'</b> có nghĩa là chán ngấy, ngán ngẩm việc gì. ('tired from' là mệt mỏi về thể xác). Do đó đáp án là A. <b>of</b>."
    },
    {
      id: 15,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "Our discussion turned ________ a big fight.",
      options: [
        { key: "A", text: "in" },
        { key: "B", text: "to" },
        { key: "C", text: "at" },
        { key: "D", text: "into" }
      ],
      answer: "D",
      translation: "Cuộc thảo luận của chúng tôi đã biến thành một trận cãi vã lớn.",
      explanation: "Cụm động từ (Phrasal Verb): <b>'turn into something'</b> có nghĩa là chuyển biến, biến đổi thành một trạng thái hoặc sự vật khác. Do đó chọn D. <b>into</b>."
    },
    {
      id: 16,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "His colleague was convicted ________ theft.",
      options: [
        { key: "A", text: "by" },
        { key: "B", text: "of" },
        { key: "C", text: "with" },
        { key: "D", text: "into" }
      ],
      answer: "B",
      translation: "Đồng nghiệp của anh ấy đã bị kết án về tội trộm cắp.",
      explanation: "Cấu trúc pháp lý: 'to convict somebody OF a crime' -> dạng bị động: <b>'be convicted OF something'</b> (bị kết án phạm tội gì). Do đó giới từ chuẩn xác là B. <b>of</b>."
    },
    {
      id: 17,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "These classes are different ________ other classes because the students are disabled.",
      options: [
        { key: "A", text: "in" },
        { key: "B", text: "of" },
        { key: "C", text: "from" },
        { key: "D", text: "with" }
      ],
      answer: "C",
      translation: "Những lớp học này khác biệt so với các lớp học khác vì học sinh ở đây là người khuyết tật.",
      explanation: "Cấu trúc tính từ so sánh khác biệt: <b>'different FROM somebody/something'</b> nghĩa là khác biệt, không giống với ai hay cái gì. Do đó đáp án là C. <b>from</b>."
    },
    {
      id: 18,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "Their parents seemed satisfied ________ their progress.",
      options: [
        { key: "A", text: "with" },
        { key: "B", text: "to" },
        { key: "C", text: "in" },
        { key: "D", text: "at" }
      ],
      answer: "A",
      translation: "Bố mẹ của họ có vẻ rất hài lòng với sự tiến bộ của họ.",
      explanation: "Cấu trúc tính từ cảm xúc, thái độ: <b>'satisfied WITH something'</b> có nghĩa là cảm thấy hài lòng, vừa ý hoặc thỏa mãn với kết quả nào đó. Do đó đáp án chính xác là A. <b>with</b>."
    },
    {
      id: 19,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "Whether or not you're given a car depends ________ your position in the company.",
      options: [
        { key: "A", text: "for" },
        { key: "B", text: "of" },
        { key: "C", text: "in" },
        { key: "D", text: "on" }
      ],
      answer: "D",
      translation: "Việc bạn có được cấp xe hơi hay không tùy thuộc vào chức vụ của bạn trong công ty.",
      explanation: "Cấu trúc động từ: <b>'depend ON somebody/something'</b> có nghĩa là phụ thuộc vào, tùy thuộc vào điều gì hoặc ai đó. Do đó đáp án là D. <b>on</b>."
    },
    {
      id: 20,
      topicId: "prepositions",
      topicName: "Prepositions",
      question: "He’s color-blind and can’t distinguish ________ red ________ green easily.",
      options: [
        { key: "A", text: "both, and" },
        { key: "B", text: "between, and" },
        { key: "C", text: "from, to" },
        { key: "D", text: "neither, nor" }
      ],
      answer: "B",
      translation: "Anh ấy bị mù màu nên không thể dễ dàng phân biệt được giữa màu đỏ và màu xanh lá cây.",
      explanation: "Cấu trúc động từ phân biệt: <b>'distinguish BETWEEN A AND B'</b> có nghĩa là phân biệt sự khác nhau giữa hai đối tượng A và B. Do đó đáp án đúng là B. <b>between, and</b>."
    }
  ]
};

// Export to global window scope
if (typeof window !== "undefined") {
  window.QUESTION_BANK = QUESTION_BANK;
}
