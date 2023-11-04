const SocialLogin = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        {/* <h1 className="mr-3">Or Continue With </h1> */}
        <button
          className="btn mt-3 capitalize text-sm font-semibold mr-3"
        >
          Or Continue With Google
          <img
            className="w-[30px] h-[30px] rounded-full"
            src="https://i.ibb.co/zhxYysk/google.webp"
            alt="google"
          />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
