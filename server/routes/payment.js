import express from 'express';
import axios from 'axios';
import moment from 'moment';
import CryptoJS from 'crypto-js';
import Booking from '../models/Booking.js'; // đường dẫn đúng theo dự án bạn
const router = express.Router();

const config = {
  app_id: "2553",
  key1: "PcY4iZIKFCIdgZvA6ueMcMHHUbRLYjPL",
  endpoint: "https://sb-openapi.zalopay.vn/v2/create"
};

router.post('/zalopay/create_order', async (req, res) => {
  try {
    const { amount, bookingId } = req.body;

    const embed_data = {
      bookingId: bookingId,
      redirecturl: "http://localhost:5173/my-bookings" // FE URL redirect sau khi thanh toán
    };
    const items = [{}];
    const transID = Math.floor(Math.random() * 1000000);
    const app_trans_id = `${moment().format('YYMMDD')}_${transID}`;
    const app_time = Date.now();

    const order = {
      app_id: config.app_id,
      app_trans_id,
      app_user: "user_demo",
      app_time,
      item: JSON.stringify(items),
      embed_data: JSON.stringify(embed_data),
      amount,
      description: `Thanh toán đơn hàng #${transID}`,
      bank_code: "zalopayapp",
      callback_url: "https://710f-118-70-127-160.ngrok-free.app/api/payment/zalopay_callback"

    };

    const dataToSign = [
      config.app_id,
      order.app_trans_id,
      order.app_user,
      order.amount,
      order.app_time,
      order.embed_data,
      order.item
    ].join("|");

    order.mac = CryptoJS.HmacSHA256(dataToSign, config.key1).toString();

    const zalopayRes = await axios.post(config.endpoint, null, { params: order });

    res.json({ order_url: zalopayRes.data.order_url });
  } catch (error) {
    console.error("ZaloPay Error:", error.response?.data || error.message);
    res.status(500).json({ message: "ZaloPay Error", error: error.message });
  }
});

router.post('/zalopay_callback', async (req, res) => {

  

  try {
    const callbackData = req.body;
    const data = callbackData.data;
    const reqMac = callbackData.mac;
    const key2 = "kLtgPl8HHhfvMuDHPwKfgfsY4Ydm9eIz"; // thay bằng key2 thực tế

    const mac = CryptoJS.HmacSHA256(data, key2).toString();

    if (mac !== reqMac) {
      return res.status(400).json({ return_code: 1, return_message: "Invalid MAC" });
    }

    const parsed = JSON.parse(data);
    const embedData = JSON.parse(parsed.embed_data);
    const bookingId = embedData.bookingId;

    console.log("Booking ID:", bookingId);

    await Booking.findByIdAndUpdate(bookingId, { isPaid: true });

    return res.json({ return_code: 1, return_message: "OK" });
  } catch (err) {
    console.error("Callback Error:", err);
    return res.status(500).json({ return_code: 1, return_message: "Server error" });
  }
});





export default router;