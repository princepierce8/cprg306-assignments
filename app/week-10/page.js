"use client";

import {useUserAuth} from './_utils/auth-context';
import Link from 'next/link';

export default function Page() {
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    const handleLogIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-8">
        <h1 className="text-4xl font-bold mb-8">Week 10 - Cloud Firestore</h1>

        {user ? (
            <div className="text-center">
                <p className="mb-4">Welcome, {user.displayName || user.email}!</p>
                <div>
                    <Link href="/week-10/shopping-list" className="bg-green-400 hover:bg-green-500 px-6 font-bold rounded-2xl">
                    Go to Shopping List
                    </Link>
                    <button onClick={handleLogOut} className="text-sm hover:text-amber-100 underline text-gray-500">
                    Log Out
                    </button>
                </div>
            </div>
        ) : (
            <button onClick={handleLogIn} className="bg-blue-600 hover:bg-blue-700 px-6 py-3 font-bold rounded-2xl">
            Log In with GitHub
            </button>
        )}
        </main>
    );
}