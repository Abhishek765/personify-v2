import { Request, Response } from 'express';
import { chats } from '../data/chats';

export const getAllChats = (req: Request, res: Response) => {
  res.status(200).send(chats);
};

export const getChatDetails = (req: Request, res: Response) => {
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  res.status(200).send(singleChat);
};
