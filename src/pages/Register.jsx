import { NavLink } from "react-router";

function Register() {
  return (
    <form
      action=""
      className="w-[460px]  mt-10 mx-auto bg-[#f2f4f7]  flex flex-col gap-4 py-3 px-6  rounded-xl shadow-2xl"
    >
      <div className="mx-auto mb-4">
        <h1 className="text-5xl font-bold text-[#166fe5]">Sign up</h1>
      </div>
      <div className="mx-auto mb-3">
        <input
          className="border text-black px-3 rounded text-xl w-[360px] h-10"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="mx-auto mb-3">
        <input
          className="border text-black px-3 rounded text-xl w-[360px] h-10"
          type="text"
          placeholder="Surname"
        />
      </div>
      <div className="mx-auto mb-3">
        <input
          className="border text-black px-3 rounded text-xl w-[360px] h-10 hover:cursor-pointer"
          type="date"
        />
      </div>
      <div className="mx-auto mb-3">
        <input
          className="border text-black px-3 rounded text-xl w-[360px] h-10"
          type="email"
          placeholder="Phone number or email address"
        />
      </div>
      <div className="mx-auto mb-3">
        <input
          className="border text-black px-3 rounded text-xl w-[360px] h-10"
          type="password"
          placeholder="New password"
        />
      </div>
      <div className="mx-auto mb-3">
        <button
          type="submit"
          className="border text-white rounded text-2xl w-[360px] h-13 bg-[#166fe5] hover:cursor-pointer"
        >
          Sign up
        </button>
      </div>
      <div className="mx-auto mb-3">
        <NavLink to="/login">
          <p className="italic text-[#166fe5] hover:underline">
            Do you already have an account?
          </p>
        </NavLink>
      </div>
    </form>
  );
}

export default Register;
