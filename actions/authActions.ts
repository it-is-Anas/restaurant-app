'use server';

import Session from '@/lib/models/Session';
import { cookies } from "next/headers";

export async function createAuthSession(userId: string): Promise<boolean> {
try {
    // Set expiration time (e.g., 7 days from now)
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    const session = await Session.create({
        user_id: userId,
        expires_at: expiresAt,
        created_at: new Date(),
    });

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set('auth', session._id.toString(), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        expires: expiresAt,
    });
        return true;
    } catch (error) {
        console.error('Session creation error:', error);
        return false;
    }
}

export async function verifyAuthSession(): Promise<{ isValid: boolean; userId?: string }> {
    try {
        const cookieStore = await cookies();
        const sessionId = cookieStore.get('auth')?.value;

        if (!sessionId) {
            return { isValid: false };
        }

        // Find the session in the database
        const session = await Session.findById(sessionId);

        if (!session) {
            // Clear invalid cookie
            cookieStore.delete('auth');
            return { isValid: false };
        }

        // Check if session has expired
        const now = new Date();
        if (session.expires_at < now) {
        // Delete expired session from database
        await Session.findByIdAndDelete(sessionId);
        // Clear expired cookie
            cookieStore.delete('auth');
            return { isValid: false };
        }

        // Session is valid - return user ID
        return {
            isValid: true,
            userId: session.user_id.toString()
        };

    } catch (error) {
        console.error('Session verification error:', error);
        // Clear cookie on error to be safe
        const cookieStore = await cookies();
        cookieStore.delete('auth');
        return { isValid: false };
    }
}

// Optional: Add a function to delete/destroy sessions
export async function destroyAuthSession(): Promise<boolean> {
    try {
        const cookieStore = await cookies();
        const sessionId = cookieStore.get('auth')?.value;

        if (sessionId) {
        // Delete session from database
            await Session.findByIdAndDelete(sessionId);
        }

        // Clear cookie regardless
        cookieStore.delete('auth');
        return true;
    } catch (error) {
        console.error('Session destruction error:', error);
        return false;
    }
}