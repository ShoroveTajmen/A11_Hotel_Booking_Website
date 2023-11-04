import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {
  return (
    <div>
      <div>
        <h2 className="text-5xl my-10 text-center font-bold mt-[50px]">
          Please Login
        </h2>
        <div className="md:w-[500px] w-[400px] mx-auto h-[400px] border border-black mb-9 p-8">
          <form >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-black p-3"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border border-black p-3"
                required
              />
            </div>
            {/* {regError && <p className="text-red-700">{regError}</p>} */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="bg-black p-3 uppercase text-xl text-white  font-bold"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
            Do not have an account?{" "}
            <Link className="text-[#c97d4a] font-bold" to="/register">
              Register
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
