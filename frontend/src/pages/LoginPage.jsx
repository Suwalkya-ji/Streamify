import { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6"
      data-theme="forest"
    >
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-base-100 shadow-xl border border-primary/20 flex flex-col lg:flex-row">
        {/* ================= LEFT: FORM ================= */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          {/* Logo */}
          <div className="mb-6 flex items-center gap-3">
            <ShipWheelIcon className="size-10 text-primary" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              Streamify
            </span>
          </div>

          {/* Error */}
          {error && (
            <div className="alert alert-error mb-5">
              <span>{error.response?.data?.message}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">Welcome Back 👋</h2>
              <p className="mt-1 text-sm opacity-70">
                Sign in to continue your language journey
              </p>
            </div>

            {/* Email */}
            <div className="form-control space-y-2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="input input-bordered w-full"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                required
              />
            </div>

            {/* Password */}
            <div className="form-control space-y-2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-xs mr-2" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Signup link */}
            <p className="text-center text-sm">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-primary font-medium hover:underline">
                Create one
              </Link>
            </p>
          </form>
        </div>

        {/* ================= RIGHT: ILLUSTRATION ================= */}
        <div className="hidden lg:flex w-1/2 items-center justify-center bg-primary/10 p-10">
          <div className="max-w-md text-center space-y-6">
            <img
              src="/i.png"
              alt="Language connection illustration"
              className="mx-auto max-h-72 object-contain"
            />

            <div>
              <h3 className="text-xl font-semibold">
                Connect with learners worldwide 🌍
              </h3>
              <p className="mt-2 text-sm opacity-70">
                Practice conversations, make friends, and grow your language
                skills together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
