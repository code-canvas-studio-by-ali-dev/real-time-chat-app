import mongoose, { Document } from 'mongoose'

declare global {

    interface MessageTypes extends Document {
        _id?: mongoose.Schema.Types.ObjectId
        senderId: mongoose.Schema.Types.ObjectId
        receiverId: mongoose.Schema.Types.ObjectId
        conversationId: mongoose.Schema.Types.ObjectId
        message: string
        createdAt?: Date;
        updatedAt?: Date;
    }

    interface UserTypes extends Document {
        _id?: mongoose.Schema.Types.ObjectId
        fullname: string
        email: string
        password: string
        role: 'Admin' | 'User' | 'Employee' | 'Tester'
        refreshToken: string | undefined
        createdAt?: Date;
        updatedAt?: Date;
    }

    interface ConversationTypes extends Document {
        _id?: mongoose.Schema.Types.ObjectId
        senderId: mongoose.Schema.Types.ObjectId
        receiverId: mongoose.Schema.Types.ObjectId
        createdAt?: Date;
        updatedAt?: Date;
    }

    interface token {
        accessToken: string
        refreshToken: string
    }

    interface User {
        _id: mongoose.Schema.Types.ObjectId
        fullname: string
        email: string
        role: 'Admin' | 'User' | 'Employee' | 'Tester'
        createdAt?: Date;
        updatedAt?: Date;
    }

    interface ApiTypes<T = Record<string, string>> {
        success: boolean
        message?: string
        error?: T
        data?: User
        token?: token
    }

    interface UserFrontend {
        fullname: string
        email: string
        password: string
    }
}