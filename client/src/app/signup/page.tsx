"use client";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="bg-black p-8 border border-gray-300 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="email"
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label
              htmlFor="firstName"
              className="block mb-1 text-sm font-medium"
            >
              First name:
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Tomás"
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="surname" className="block mb-1 text-sm font-medium">
              Surname:
            </label>
            <input
              id="surname"
              type="text"
              placeholder="Póil"
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-1 text-sm font-medium"
            >
              Confirm your password:
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-teal-950 hover:bg-teal-800 rounded py-2 transition-colors duration-200"
          >
            Sign up
          </button>
        </form>
      </div>
    </main>
  );
}
