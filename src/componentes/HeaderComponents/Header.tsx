import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

type HeaderParams = {
  labelS?: string;
  labelB: string;
  labelM?: string;
  button: number;
  rem: string;
};

type HeaderProps = {
  params: HeaderParams;
};

type ParamsPintar = {
  isHome: number;
  text: string;
}

function pintarBoton(params: ParamsPintar) {
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
    <div className="flex flex-col w-full justify-center items-center">

      <div className="flex flex-col mt-5 relative w-6xl lg:max-w-4xl md:max-w-3xl ">
        
        <div className="flex w-full justify-between absolute">
          <div className="w-full *:text-body-text text-body-text flex">
            <span className="material-symbols-outlined">mail</span>
            info@example.com |
            <span className="material-symbols-outlined">call</span>
            +012 345 6789
          </div>
          <div className='flex gap-5'>
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
          </div>
        </div>

        <div className="flex z-1 w-full h-20 items-center relative">
          <nav className="h-20 flex w-full justify-between items-center pl-10 bg-white absolute top-10 md:text-sm">
            <div className="text-3xl font-[1000]">
              TRAVEL<span className="text-primary">ERS</span>
            </div>
            <div className="">
              <div className="pl-5 flex gap-5 text-xl pr-10 -xl:text-sm">
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
      </div>

      <div className="relative flex justify-center w-full h-250 bg-[url('/src/assets/HeaderAssets/carousel-2.jpg')] bg-cover" style={{ height: params.rem }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50"></div>
        <div className="relative flex w-full h-full text-center items-center text-white justify-center">
          <div className="flex flex-col w-300">
            <p className="text-2xl font-[600] mb-1">{params.labelS}</p>
            <p className="text-8xl font-[600] mb-5">{params.labelB}</p>
            {pintarBoton({ isHome: params.button, text: params.labelM ?? "" })}
          </div>
        </div>
      </div>

      <div className="bg-white h-24 relative bottom-12 w-7xl lg:max-w-4xl md:max-w-3xl flex items-center justify-center">
        <div className="*:border *:border-gray-300 *:m-2 *:w-[18%] w-[90%] *:h-10">
          <select name="" id="" className="">
            <option value="" >Destination</option>
            <option value="" >Destination1</option>
            <option value="" >Destination1</option>
            <option value="" >Destination1</option>
          </select>
          <input type="date" placeholder="Depart Date" />
          <input type="date" placeholder="Return Date" />
          <select name="" id="">
            <option value="">Duration</option>
            <option value="">Duration1</option>
            <option value="">Duration1</option>
            <option value="">Duration1</option>
          </select>
          <button className="bg-primary text-white font-[600] hover:bg-hover-p cursor-pointer">Submit</button>
        </div>
      </div>

    </div>
  );
};
