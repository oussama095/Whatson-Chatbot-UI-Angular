export interface Message {
  data: string;
  date: string;
  sender: Sender;
}

export enum Sender {
  USER,
  CHATBOT
}
