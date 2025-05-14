const TeslaCarCard = () => {
  return (
    <div className="relative bg-black text-white rounded-2xl p-4 max-w-sm mx-auto mt-24">
      {/* Top Left Label */}
      <div
        className="absolute top-4 left-4  bg-white text-black px-3 py-1 text-lg font-semibold  z-10"
        style={{ borderRadius: "0 0 10px 0", borderColor: "black", borderWidth: "0px 7px 7px 0px",borderStyle:"solid" }}
      >
        Tesla Roadster
      </div>

      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src="https://images.theconversation.com/files/561823/original/file-20231127-17-ptivyk.jpeg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip"
          alt="Tesla Roadster"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Bottom Right Label */}
      <div
        className="absolute bottom-4 right-4 bg-white text-black px-4 py-1 text-lg font-semibold z-10"
        style={{ borderRadius: "10px 0 0 0", borderColor: "black", borderWidth: "7px 0px 0px 7px",borderStyle:"solid" }}
      >
        $200,000
      </div>
    </div>
  );
};

export default TeslaCarCard;
