/* eslint-disable react/no-unescaped-entities */
export default function Header() {
    return (
        <header>
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold text-indigo-400 sm:text-3xl">Welcome!</h1>

                <p className="antialiased mt-1 text-sm text-gray-200">Let's write a new blog post! 🎉</p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                <button
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-300 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                type="button">
                <span className="text-sm font-medium"> Signup </span> 
                </button>

                <button
                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button">
                Signin
                </button>
            </div>
            </div>
        </div>
        </header>
    );
    }