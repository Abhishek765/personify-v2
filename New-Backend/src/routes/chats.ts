import express from 'express';
import { getAllChats, getChatDetails } from '../controllers/chats';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Personify 😎'
  });
});

router.get('/chats', getAllChats);
router.get('/chats/:id', getChatDetails);

export default router;
