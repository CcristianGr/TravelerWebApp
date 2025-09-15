import { Link } from "react-router-dom";

type HeaderParams = {
  labelS?: string;
  labelB: string;
  labelM?: string;
  button: number;
};

type HeaderProps = {
  params: HeaderParams;
};

type ParamsPintar ={
  isHome: number;
  text: string;
}

function pintarBoton(params:ParamsPintar) {
  console.log(params)
  switch (params.isHome) {
    case 0:
      return (
        <div>{params.text}</div>
      )
    case 1:
      return (
        <div className="mt-3">
          <button className="bg-primary w-40 h-16">Book Now</button>
        </div>
      )

    default:
      return null
  }
}

export const Header = ({ params }: HeaderProps) => {
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

      <div className="flex absolute top-20 z-1 bg-white left-1/2 -translate-x-1/2 w-1/2 h-20  items-center">
        <nav className="h-16 flex w-full justify-between items-center pl-10">
          <div className="pl-5 text-3xl font-[1000]">
            TRAVEL<span className="text-primary">ERS</span>
          </div>
          <div className="">
            <div className="pl-5 flex gap-5 text-xl pr-10">
              <Link to="/" className="text-primary">Home</Link>
              <Link to="/about">About</Link>
              <a href="#">Services</a>
              <a href="#">Tour Packages</a>
              <a href="#">Pages</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </nav>
      </div>

      <div className="relative flex justify-center w-full h-125 mt-20 bg-[url('/src/assets/HeaderAssets/carousel-2.jpg')] bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50"></div>
        <div className="relative flex w-full h-full text-center items-center text-white justify-center">
          <div className="flex flex-col w-300">
            <p className="text-2xl font-[600] mb-1">{params.labelS}</p>
            <p className="text-8xl font-[1000] mb-5">{params.labelB}</p>
            {pintarBoton({ isHome: params.button, text: params.labelM ?? "" })}
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
