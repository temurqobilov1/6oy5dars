import { NavLink } from "react-router-dom";

function SingleProducts() {
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
      <div className="mx-auto mb-3 flex items-center gap-5">
        <label className="text-xl  hover:cursor-pointer" id="male">
          <div className="flex items-center justify-around border w-[170px] px-3 rounded text-2xl h-10  hover:cursor-pointer">
            Male
            <input
              className=" hover:cursor-pointer "
              type="radio"
              id="male"
              name="typeone"
            />
          </div>
        </label>
        <label className="text-xl  hover:cursor-pointer" id="female">
          <div className="flex items-center justify-around border w-[170px] px-3 rounded text-2xl h-10  hover:cursor-pointer">
            Female
            <input
              className="hover:cursor-pointer "
              type="radio"
              id="female"
              name="typeone"
            />
          </div>
        </label>
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

export default SingleProducts;


