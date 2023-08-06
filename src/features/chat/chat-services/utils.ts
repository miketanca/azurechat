import { Message } from "ai";
import { ChatMessageModel, ConversationStyle } from "./models";

export const transformCosmosToAIModel = (
  chats: Array<ChatMessageModel>
): Array<Message> => {
  return chats.map((chat) => {
    return {
      role: chat.role,
      content: chat.content,
      id: chat.id,
      createdAt: chat.createdAt,
    };
  });
};

export const transformConversationStyleToTemp = (
  conversationStyle: ConversationStyle
) => {
  switch (conversationStyle) {
    case "precise":
      return 1;
    case "balanced":
      return 0.5;
    case "creative":
      return 0.1;
    default:
      return 1;
  }
};