import { NavLink } from "react-router-dom";

function Login() {
  return (
    <form
      action=""
      className="w-[460px]  mt-20 mx-auto bg-[#f2f4f7]  flex flex-col gap-4 py-6  rounded-xl shadow-2xl"
    >
      <div className="mx-auto mb-4">
        <h1 className="text-5xl font-bold text-[#166fe5]">Login</h1>
      </div>
      <div className="mx-auto mb-3">
        <input
          className="border text-black px-3 rounded text-xl w-[360px] h-13"
          type="email"
          placeholder="Email address or phone number"
        />
      </div>
      <div className="mx-auto mb-3">
        <input
          className="border text-black px-3 rounded text-xl w-[360px] h-13"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="mx-auto mb-3">
        <button
          type="submit"
          className="border text-white rounded text-2xl w-[360px] h-13 bg-[#166fe5] hover:cursor-pointer"
        >
          Login
        </button>
      </div>
      <div className="mx-auto mb-3">
        <h2 className="text-[#166fe5] italic">Forgot your account?</h2>
      </div>
      <div className="mx-auto mb-3">
        <hr className="w-[300px] text-center text-[#868686]" />
      </div>
      <div className="mx-auto mb-3">
        <NavLink to="/register">
          <button className="border text-[#fff] rounded text-2xl w-[200px] h-13 bg-[#36a420] hover:cursor-pointer">
            Sign up
          </button>
        </NavLink>
      </div>
    </form>
  );
}

export default Login;
