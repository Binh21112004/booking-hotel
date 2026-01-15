# Hotel Booking System

Web app đặt phòng khách sạn. Có 2 vai trò chính: khách hàng đặt phòng và chủ khách sạn quản lý.

## Công nghệ

**Frontend:**
- React + Vite
- React Router
- Clerk (authentication)
- Tailwind CSS 

**Backend:**
- Node.js + Express
- MongoDB (Atlas)
- Cloudinary (lưu ảnh)
- Clerk webhooks

## Tính năng chính

### Dành cho khách hàng:
- Xem danh sách phòng khách sạn
- Tìm kiếm theo thành phố
- Đặt phòng và thanh toán
- Xem lịch sử booking
- Hủy đặt phòng

### Dành cho chủ khách sạn:
- Đăng ký khách sạn
- Thêm phòng mới với ảnh
- Quản lý danh sách phòng
- Bật/tắt trạng thái phòng
- Dashboard xem thống kê

## Cài đặt và chạy

### 1. Clone project
```bash
git clone https://github.com/Binh21112004/booking-hotel.git
cd booking-hotel
```

### 2. Setup Backend

```bash
cd server
npm install
```

Tạo file `.env` trong folder `server`:
```env
MONGODB_URI=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
CLERK_WEBHOOK_SECRET=your_webhook_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

Chạy server:
```bash
npm start
```
Server chạy ở `http://localhost:3000`

### 3. Setup Frontend

```bash
cd client
npm install
```

Tạo file `.env` trong folder `client`:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_BACKEND_URL=http://localhost:3000
```

Chạy client:
```bash
npm run dev
```
Client chạy ở `http://localhost:5173`



## Structure

```
hotel-booking/
├── client/          # React frontend
├── server/          # Express backend
│   ├── configs/     # Database, Cloudinary config
│   ├── controllers/ # Business logic
│   ├── models/      # MongoDB schemas
│   ├── routes/      # API routes
│   └── middleware/  # Auth, upload middleware
└── README.md
```

## Database Models

- **User**: Thông tin user từ Clerk
- **Hotel**: Thông tin khách sạn
- **Room**: Phòng của khách sạn
- **Booking**: Đơn đặt phòng

## API Routes

- `/api/user` - Thông tin user
- `/api/rooms` - CRUD rooms
- `/api/bookings` - Booking operations
- `/api/payment` - Payment gateway
- `/api/clerk` - Clerk webhooks

