import backgroundimg from "../../assets/HeaderAssets/carousel-2.jpg";
export const Header = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center">
        <div className="w-1/3">
          <span class="material-symbols-outlined">mail</span>
          info@example.com |<span class="material-symbols-outlined">call</span>
          +012 345 6789
        </div>
        <div className="w-1/3 text-end">F T Lin Ins You </div>
      </div>

      <div className="flex justify-center m-5 absolute top-10 z-1 bg-white left-1/2 -translate-x-1/2">
        <nav className="h-16 flex">
          <div className="pl-5 text-3xl">
            <span>TRAVEL</span>ERS
          </div>
          <div>
            <div className="pl-5 flex gap-5">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Tour Packages</a>
              <a href="#">Pages</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex justify-center w-full mt-20 ">
        <img
          src="src/assets/HeaderAssets/carousel-2.jpg"
          alt=""
          className="w-full h-full brightness-40"
        />
        <div className="flex w-full h-full text-center items-center text-white justify-center absolute">
          <div className="flex flex-col w-1/3">
            <p className="text-2xl font-[600] mb-5">TOURS & TRAVEL</p>
            <p className="text-6xl font-[1000] mb-5">
              Discover Amazing Places With Us
            </p>
            <div className="mt-3">
              <button className="bg-green-400 text-black w-35 h-12">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
