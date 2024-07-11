export type User = {
    id: string;
    username: string;
    message: [Message];
    conversation: [Conversation];
}

export type Conversation = {
    id: string;
    Message: [Message];
    user1Id: string;
    user2Id: string;
    createdAt: Date;
    updatedAt: Date;
}

export type Message = {
    id: string;
    userId: string;
    receiverId: string;
    message: string;
    conversationId: string;
    createdAt: Date;
    updatedAt: Date;
}