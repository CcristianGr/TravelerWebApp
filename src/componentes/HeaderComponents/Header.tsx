type HeaderProps = {
  label: string;
};

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex flex-col w-full">

      <div className="flex justify-center pt-5">
        <div className="w-1/5 *:text-body-text text-body-text flex">
          <span className="material-symbols-outlined">mail</span>
          info@example.com |
          <span className="material-symbols-outlined">call</span>
          +012 345 6789
        </div>
        <div className="w-1/3 text-end">F T Lin Ins You </div>
      </div>

      <div className="flex m-5 absolute top-11 z-1 bg-white left-1/2 -translate-x-1/2 w-1/2 h-20  items-center">
        <nav className="h-16 flex w-full justify-between items-center pl-10">
          <div className="pl-5 text-3xl font-[1000]">
            TRAVEL<span className="text-primary">ERS</span>
          </div>
          <div className="">
            <div className="pl-5 flex gap-5 text-2xl pr-10">
              <a href="#" className="text-primary">
                Home
              </a>
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
          <div className="flex flex-col w-400">
            <p className="text-2xl font-[600] mb-1">TOURS & TRAVEL</p>
            <p className="text-9xl font-[1000] mb-5">{label}</p>
            <div className="mt-3">
              <button className="bg-primary w-40 h-16">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[56rem] bg-white h-30 flex items-center justify-center left-1/2 -translate-x-1/2 relative bottom-15">
        <div className="*:border *:border-gray-300 flex flex-row gap-8 justify-center *:text-xl *:w-35 *:h-12">
          <select name="" id="">
            <option value="">Destination</option>
            <option value="">Destination1</option>
            <option value="">Destination1</option>
            <option value="">Destination1</option>
          </select>
          <input type="date" placeholder="Depart Date" />
          <input type="date" placeholder="Return Date" />
          <select name="" id="">
            <option value="">Duration</option>
            <option value="">Duration1</option>
            <option value="">Duration1</option>
            <option value="">Duration1</option>
          </select>
          <button className="bg-primary text-white font-[600]">Submit</button>
        </div>
      </div>

    </div>
  );
};
