// app/sustainability/[...slug]/loading.tsx
import React from 'react';

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 p-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 animate-pulse">Generating Content...</h2>
                <p className="text-lg">Please wait while we fetch real-time insights on sustainability.</p>
                <div className="flex justify-center mt-6">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-500"></div>
                </div>
            </div>
        </div>
    );
}