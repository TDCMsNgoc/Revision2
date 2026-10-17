# PHẦN MỀM TRẮC NGHIỆM TIẾNG ANH: REVISION 2 (40 CÂU NGẪU NHIÊN)
### TRƯỜNG CAO ĐẲNG CÔNG NGHỆ THỦ ĐỨC (TDC)

Phần mềm ôn tập và kiểm tra trắc nghiệm tiếng Anh tổng hợp 40 câu hỏi ngẫu nhiên từ ngân hàng **100 câu hỏi có sẵn** thuộc **5 chuyên đề ngữ pháp cốt lõi**:
1. **Countable and Uncountable Nouns** (Danh từ đếm được và không đếm được)
2. **Referring to Nouns** (Mạo từ xác định/bất định & Từ hạn định chỉ định)
3. **Pronouns and Referencing** (Đại từ nhân xưng, đại từ sở hữu, đại từ phản thân & quy chiếu)
4. **Adjectives and Adverbs** (Tính từ, trạng từ, trật tự tính từ OSASCOMP & từ loại)
5. **Prepositions** (Giới từ đi kèm danh từ, tính từ, động từ & cụm cố định)

---

## 🌟 ĐẶC ĐIỂM NỔI BẬT THEO ĐÚNG YÊU CẦU

### 1. Thuật toán chọn 40 câu ngẫu nhiên & Xáo trộn hoàn hảo
- Ngân hàng gồm 100 câu hỏi (20 câu mỗi chủ đề).
- Mỗi lần sinh viên bắt đầu làm bài hoặc bấm **"Làm đề mới ngẫu nhiên" / "🔄 Đề mới"**:
  - Hệ thống tự động chọn ngẫu nhiên **8 câu từ Countable and Uncountable Nouns** (trong 20 câu).
  - Chọn ngẫu nhiên **8 câu từ Referring to Nouns** (trong 20 câu).
  - Chọn ngẫu nhiên **8 câu từ Pronouns and Referencing** (trong 20 câu).
  - Chọn ngẫu nhiên **8 câu từ Adjectives and Adverbs** (trong 20 câu).
  - Chọn ngẫu nhiên **8 câu từ Prepositions** (trong 20 câu).
  - Tổng cộng chọn đủ **40 câu hỏi**, đảm bảo tỉ lệ đồng đều tuyệt đối giữa 5 chuyên đề.
- **Xáo trộn 2 lớp (Fisher-Yates Shuffle)**:
  - Xáo trộn thứ tự xuất hiện của toàn bộ 40 câu hỏi.
  - Xáo trộn vị trí của 4 phương án trả lời (A, B, C, D) trong từng câu hỏi và tự động cập nhật lại mã đáp án đúng tương ứng, ngăn chặn tuyệt đối việc học vẹt vị trí phương án.

### 2. Thiết kế hiển thị chuẩn cho Điện thoại và iPad
- **Khung câu hỏi đặt bên dưới cùng (Bottom-docked card)**:
  - Trên **Desktop**: Bố cục rộng rãi, trực quan với bảng 40 câu hỏi ở trên và khung làm bài ở dưới.
  - Trên **Điện thoại và iPad (Màn hình <= 992px hoặc chế độ iPad/Mobile)**:
    - Bảng tiến độ và danh sách 40 câu hỏi được đặt ở phần trên (`upper-section`), có thể cuộn nhẹ.
    - **Khung làm bài được neo cố định ở BÊN DƯỚI CÙNG (`bottom-question-section`)**, dạng thẻ nổi (bottom-sheet) bo tròn cạnh trên, giúp ngón tay cái thao tác bấm chọn phương án và chuyển câu cực kỳ thuận tiện.
- **Câu hỏi và các lựa chọn cùng nằm trên 1 khung duy nhất**:
  - Toàn bộ số thứ tự câu hỏi, tên chủ đề, cờ đánh dấu, nội dung đề bài và cả 4 phương án (A, B, C, D) nằm trọn vẹn trong **MỘT KHUNG THẺ DUY NHẤT** (`.question-card`).
  - Không bị tách rời hay đứt quãng trên mọi kích thước màn hình.
  - Trên điện thoại, các phương án tự động xếp thành 1 cột dọc rộng rãi; trên iPad và PC xếp thành 2 cột cân đối.

### 3. Bảo mật khi làm bài & Xem giải thích chi tiết sau khi nộp
- **Lúc làm bài**:
  - Tuyệt đối **KHÔNG** đưa bất kỳ gợi ý, cờ đúng/sai hay đáp án nào bên cạnh câu hỏi.
  - Sinh viên chỉ tập trung suy nghĩ và bấm chọn phương án tốt nhất.
- **Sau khi nộp bài (Chế độ Xem lại - Review Mode)**:
  - Hiển thị màn hình kết quả với:
    * Điểm số trên thang 40 và quy đổi sang **thang điểm 10** chuẩn xác.
    * Đánh giá học lực: Xuất sắc, Rất tốt, Khá, Cần cố gắng.
    * Thống kê: Số câu đúng, Số câu sai, Số câu chưa làm, Thời gian hoàn thành.
    * **Phân tích kết quả chi tiết theo từng chuyên đề** (Ví dụ: Countable Nouns: 8/8, Prepositions: 7/8...).
    * Lưới 40 ô câu hỏi chuyển màu: Xanh lá (Đúng), Đỏ (Sai), Xám (Chưa làm) - bấm vào ô để nhảy ngay đến câu đó.
  - Trong khung câu hỏi xuất hiện hộp **💡 Giải thích chi tiết & Dịch nghĩa**:
    * Phương án đúng chuyển màu xanh lá kèm huy hiệu `✓ Đáp án đúng`.
    * Phương án sinh viên chọn sai chuyển màu đỏ kèm huy hiệu `✗ Lựa chọn của bạn`.
    * 🇻🇳 **Dịch nghĩa**: Dịch trọn vẹn nghĩa ngữ cảnh câu hỏi sang tiếng Việt chuẩn mực.
    * 📚 **Giải thích ngữ pháp**: Phân tích quy tắc ngữ pháp, cấu trúc từ loại, mạo từ, đại từ, giới từ giải thích tường tận vì sao lại chọn đáp án đó.
  - Nút **"Xem trọn bộ 40 câu"**: Mở bảng tổng hợp toàn bộ 40 câu kèm đề bài, các phương án, đáp án đúng và lời giải thích đầy đủ trên một trang cuộn duy nhất.

### 4. Theo dõi số lượng người đăng nhập và truy cập khi đưa lên GitHub
- **Bộ đếm thời gian thực (Live Visitor Counter)**:
  - Tích hợp bộ đếm đám mây (`CounterAPI`) hiển thị trực tiếp ngay trên thanh điều hướng (`Truy cập: ...`).
  - Khi triển khai lên GitHub Pages, mọi sinh viên mở link từ bất kỳ đâu đều được ghi nhận vào bộ đếm trực tuyến.
- **Đăng nhập thông tin sinh viên**:
  - Sinh viên có thể nhập: Họ và tên, Mã số sinh viên (MSSV) và Lớp học phần trước khi làm bài (bấm vào ô thông tin sinh viên ở thanh trên để cập nhật).
- **Bảng Thống kê & Quản lý điểm số dành cho Giảng viên (Admin Dashboard)**:
  - Bấm vào nút `📊 Thống kê` trên góc phải thanh điều hướng.
  - Hiển thị tổng số lượt truy cập link, số lượt đã hoàn thành nộp bài, điểm trung bình toàn bộ sinh viên.
  - Bảng chi tiết danh sách từng sinh viên: STT, Họ và tên, MSSV, Lớp, Điểm số (/40), Thang 10, Thời gian làm bài, Thời điểm nộp bài.
  - **Nút xuất Excel (`📥 Tải về file Excel (CSV)`)**: Giảng viên có thể tải về file bảng điểm lớp định dạng CSV chuẩn UTF-8 (mở được ngay bằng Microsoft Excel mà không bị lỗi font tiếng Việt).
- **Theo dõi qua GitHub Insights**:
  - Hướng dẫn giảng viên cách xem biểu đồ lượt xem và người dùng thực tế qua tính năng GitHub Traffic.

### 5. Các tiện ích cao cấp khác
- **Đồng hồ đếm ngược 45:00**: Tự động chuyển màu đỏ cảnh báo khi còn dưới 5 phút, tự động nộp bài khi hết giờ.
- **Tính năng Đánh dấu cờ (Flag 🚩)**: Giúp sinh viên gắn cờ các câu khó để xem lại trước khi nộp.
- **Bộ mô phỏng chuyển đổi nhanh PC / iPad / Mobile**: Giúp kiểm tra giao diện trên từng thiết bị ngay trên trình duyệt máy tính.
- **Chế độ Sáng / Tối (Dark / Light Mode)**.
- **Phím tắt nhanh trên bàn phím**:
  - Phím `1, 2, 3, 4` hoặc `A, B, C, D`: Chọn nhanh phương án trả lời.
  - Phím `←` và `→`: Chuyển câu trước / câu sau.
  - Phím `F`: Bật / tắt cờ đánh dấu câu xem lại.

---

## 🚀 HƯỚNG DẪN CHẠY THỬ TRÊN MÁY LOCAL

### Cách 1: Chạy bằng file Batch (Khuyên dùng - 1 Click)
1. Mở thư mục `d:\websiteabc\REVISION 2`
2. Nhấp đúp chuột vào file **`Chay_Ung_Dung.bat`** (hoặc **`run_local.bat`**).
3. Cửa sổ màu đen sẽ mở ra và trình duyệt web sẽ tự động bật trang thi tại:
   ```
   http://localhost:8086/
   ```
4. Trên cửa sổ dòng lệnh cũng hiển thị địa chỉ IP mạng nội bộ (Ví dụ: `http://192.168.1.15:8086/`). Bạn có thể gõ địa chỉ này vào Safari trên iPad hoặc Chrome trên điện thoại kết nối cùng mạng WiFi để trải nghiệm giao diện neo đáy thực tế.

### Cách 2: Mở trực tiếp file HTML
1. Nhấp đúp chuột trực tiếp vào file **`index.html`**.
2. Ứng dụng sẽ hoạt động trơn tru ngay trên trình duyệt mà không cần cài đặt thêm phần mềm nào.

---

## 🌐 HƯỚNG DẪN ĐƯA LÊN GITHUB PAGES & THEO DÕI NGƯỜI ĐĂNG NHẬP

Để đưa trang web lên mạng Internet miễn phí và gửi link cho sinh viên làm bài qua GitHub Pages:

### Bước 1: Tạo Repository mới trên GitHub
1. Truy cập [github.com](https://github.com/) và đăng nhập tài khoản của bạn.
2. Bấm vào dấu `+` ở góc trên bên phải -> chọn **New repository**.
3. Đặt tên kho lưu trữ (ví dụ: `tdc-revision2-quiz`).
4. Chọn chế độ **Public** và bấm **Create repository**.

### Bước 2: Tải code từ máy lên GitHub
Mở cửa sổ PowerShell hoặc Command Prompt tại thư mục `d:\websiteabc\REVISION 2` và chạy các lệnh sau:
```powershell
cd "d:\websiteabc\REVISION 2"
git init
git add .
git commit -m "Khoi tao phan mem trac nghiem Revision 2 TDC 40 cau ngau nhien"
git branch -M main
git remote add origin https://github.com/<ten-tai-khoan-github-cua-ban>/tdc-revision2-quiz.git
git push -u origin main
```
*(Thay `<ten-tai-khoan-github-cua-ban>` bằng username GitHub của bạn).*

### Bước 3: Kích hoạt GitHub Pages
1. Trong trang repository trên GitHub, bấm vào tab **Settings** (Cài đặt) ở thanh trên.
2. Ở menu bên trái, tìm và chọn mục **Pages**.
3. Dưới mục **Build and deployment > Branch**:
   - Chọn nhánh **main**.
   - Thư mục chọn **/ (root)**.
   - Bấm **Save**.
4. Chờ khoảng 1-2 phút, GitHub sẽ hiển thị đường link trang web thi công khai, có dạng:
   ```
   https://<ten-tai-khoan-github-cua-ban>.github.io/tdc-revision2-quiz/
   ```
5. Sao chép link này và gửi cho sinh viên hoặc gắn vào tài liệu học tập của lớp.

### Bước 4: Cách theo dõi số lượng người truy cập trên GitHub
Giảng viên có 2 cách cực kỳ tiện lợi để theo dõi:
1. **Xem trực tiếp trên giao diện bài thi**:
   - Ngay trên thanh đầu trang có huy hiệu `Truy cập: ...` hiển thị tổng số lượt truy cập.
   - Bấm nút `📊 Thống kê` để xem danh sách từng sinh viên nộp bài và tải file Excel bảng điểm.
2. **Xem biểu đồ phân tích chuyên sâu của GitHub**:
   - Vào GitHub Repository của bài thi.
   - Bấm vào tab **Insights** (Thông tin chi tiết) -> chọn mục **Traffic** (Lưu lượng truy cập).
   - Bạn sẽ thấy biểu đồ:
     * **Visitors**: Số lượng người duy nhất truy cập theo từng ngày.
     * **Views**: Tổng số lượt xem trang theo giờ và ngày.
     * **Referring sites**: Các nguồn giới thiệu link truy cập (Zalo, Facebook, Google...).

---

## 📁 CẤU TRÚC THƯ MỤC DỰ ÁN

```
d:\websiteabc\REVISION 2\
│
├── index.html           # Giao diện chính, tối ưu khung neo đáy trên mobile/iPad
├── style.css            # Toàn bộ CSS phong cách TDC hiện đại, responsive, Dark mode
├── app.js               # Logic chọn 40 câu ngẫu nhiên, shuffle 2 lớp, chấm điểm, thống kê
├── questions_bank.js    # Ngân hàng 100 câu hỏi hoàn chỉnh từ 5 chuyên đề có dịch & giải thích
├── tdc_logo.png         # Logo chính thức của Trường Cao đẳng Công nghệ Thủ Đức
├── server.ps1           # Web server nội bộ phục vụ test trên PC, iPad và điện thoại
├── run_local.bat        # File 1-click khởi chạy web server
├── Chay_Ung_Dung.bat    # File 1-click khởi chạy (tên tiếng Việt)
└── README.md            # Tài liệu hướng dẫn sử dụng và triển khai GitHub chi tiết
```
