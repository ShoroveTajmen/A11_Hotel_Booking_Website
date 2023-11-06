const Map = () => {
  return (
    <div className="mt-8">
      <div className="w-[700px] h-[550px] mx-auto">
        <iframe
          src="https://maps.google.com/maps?q=dhaka&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          style={{ width: "700px", height: "500px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
