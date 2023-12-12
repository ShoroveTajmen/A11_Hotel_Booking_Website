const PrivacyPolicy = () => {
  return (
    <div>
      <div className="flex justify-center items-center  gap-10 h-[500px] bg-[#F0DBAF]">
        <h1 className="font-bold text-[50px]">See Our Privacy Policy</h1>
        <div>
          <div className="w-[500px] h-[300px] border-2 border-blue-400 bg-blue-700 text-white p-4">
            <h1 className="text-[20px] mb-5">Privacy Info</h1>
            <p className="text-sm">
              Our Privacy Policy assures you that your personal information is
              treated with the utmost care. We collect only essential data for
              reservations and services, maintaining strict confidentiality.
              Your details are securely stored, and we do not share them without
              your explicit consent. Feel confident in your privacy while
              experiencing our hospitality.
            </p>
            <div className="mt-4">
                <a className="underline" href="https://www.theiveyshotel.com/privacy-policy">Learn more about our policy...</a>
                <button className="btn btn-sm bg-blue-500 border-none rounded-none text-white ml-[10px]">Cancel</button>
                <button className="btn btn-sm border-none rounded-none ml-[10px]">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
