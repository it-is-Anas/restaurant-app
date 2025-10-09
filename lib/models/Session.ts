import { Schema, model, models, Document } from 'mongoose';

export interface ISession extends Document {
    user_id: string;
    expires_at: string;
    createdAt: Date;
}

const SessionSchema = new Schema<ISession>({
    user_id: { type: String, required: true, unique: true },
    expires_at: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default models.Session || model<ISession>('Session', SessionSchema);