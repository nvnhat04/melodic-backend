# Melodic 🎵🛍️

**Melodic** là một nền tảng phát nhạc trực tuyến kết hợp thương mại điện tử, nơi người dùng có thể nghe nhạc, nghệ sĩ có thể đăng tải nhạc và bán merch, còn admin có thể quản lý toàn bộ hệ thống. Dự án được xây dựng với kiến trúc RESTful API và sử dụng Node.js.

---

## 🎯 Tính năng chính

### 👤 User
- Đăng ký / Đăng nhập
- Nghe nhạc trực tuyến
- Tìm kiếm nghệ sĩ / bài hát
- Mua merch (sản phẩm từ nghệ sĩ)
- Theo dõi nghệ sĩ yêu thích

### 🎤 Artist
- Đăng ký / Đăng nhập
- Đăng bài hát
- Đăng bán merch
- Quản lý nội dung cá nhân
- Xem thống kê lượt nghe / lượt mua

### 🛠️ Admin
- Quản lý người dùng và nghệ sĩ
- Duyệt bài hát / merch
- Quản lý báo cáo, nội dung hệ thống

---

## 📁 Cấu trúc thư mục

```
src/
├── config/ # Cấu hình DB, môi trường
├── controller/ # Xử lý logic cho các route
├── cron/ # Tác vụ tự động (cập nhật playlist)
├── hooks/ # Hooks dùng chung
├── middlewares/ # Middleware (auth, token...)
├── model/
├── routes/ # Định nghĩa các API routes

```
---

## 🚀 Khởi động dự án

```bash
# Cài đặt dependencies
npm install

# Cấu hình môi trường
cp .env.sample .env

# Chạy server
npm start

Server sẽ chạy mặc định tại http://localhost:3000.

```
## 👨‍💻 Tác giả

Dự án được phát triển bởi đội ngũ Mythic-UET❤.
## Demo ứng dụng

https://github.com/user-attachments/assets/ffb88b39-7af5-4212-b141-02ac675d69b8

