import { NavLinkActive } from "../Hook/HeaderHook";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faXTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { pintarBoton } from "../Hook/HooksGenerals";
import { HeaderProps } from "../Hook/TypeAtributos/types";

export const Header = ({ params }: HeaderProps) => {
  return (
    <div className="flex flex-col w-full justify-center items-center">

      <div className="flex flex-col mt-5 relative w-6xl lg:max-w-4xl md:max-w-3xl xl:max-w-5xl group">

        <div className="flex w-full justify-between">
          <div className="w-full *:text-body-text text-body-text flex">
            <span className="material-symbols-outlined">mail</span> info@example.com | <span className="material-symbols-outlined">call</span> +012 345 6789
          </div>
          <div className='flex gap-5 *:cursor-pointer *:text-primary *:hover:text-green-700'>
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>

        <div className="flex z-1 w-full h-10 items-center relative mt-4">
          <nav className="h-20 flex w-full justify-between items-center pl-10 bg-white absolute top-0 md:text-sm">
            <div className="text-3xl font-[1000]">
              TRAVEL<span className="text-primary">ERS</span>
            </div>
            <div className="">
              <div className="pl-5 flex gap-5 text-xl pr-10 -xl:text-sm">
                <NavLinkActive to="/">Home</NavLinkActive>
                <NavLinkActive to="/about">About</NavLinkActive>
                <NavLinkActive to="/NoService">Services</NavLinkActive>
                <NavLinkActive to="/NoService">Tour Packages</NavLinkActive>
                <NavLinkActive to="/BlogGrid">Blog</NavLinkActive>
                <NavLinkActive to="/contact">Contact</NavLinkActive>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="relative flex justify-center w-full h-250 bg-[url('/src/assets/HeaderAssets/carousel-2.jpg')] bg-cover" style={{ height: params.rem }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50"></div>
        <div className="relative flex w-full h-full text-center items-center text-white justify-center">
          <div className="flex flex-col w-250">
            <p className="text-2xl font-[600] mb-1">{params.labelS}</p>
            <p className="text-7xl font-[600] mb-5">{params.labelB}</p>
            {pintarBoton({ isHome: params.button, text: params.labelM ?? "" })}
          </div>
        </div>
      </div>

      <div className="bg-white h-24 relative bottom-12 w-6xl lg:max-w-4xl md:max-w-3xl xl:max-w-5xl flex items-center justify-center">
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
