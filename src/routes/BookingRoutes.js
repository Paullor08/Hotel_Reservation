import { createBooking } from '../controller/BookingController.js'
import express from 'express';

const router = express.Router();
const BookingRouter = router

router.post('/booking' ,createBooking);

export default BookingRouter;