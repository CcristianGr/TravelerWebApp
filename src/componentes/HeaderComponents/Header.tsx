import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

type HeaderProps = {
  label: string;
};

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex flex-col w-full justify-center items-center">

      <div className="w-[70%] flex flex-col">

        <div className="flex w-full justify-between -bottom-5 relative">

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

        <div className="flex relative top-10 z-1 bg-white left-1/2 -translate-x-1/2 w-full h-20 items-center">
          <nav className="h-16 flex w-full justify-between items-center pl-10">
            <div className="pl-5 text-5xl font-[1000]">
              TRAVEL<span className="text-primary">ERS</span>
            </div>
            <div className="">
              <div className="pl-5 flex gap-5 text-xl pr-10">
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
      </div>


      <div className="flex justify-center w-full items-center">
        <img
          src="src/assets/HeaderAssets/carousel-2.jpg"
          alt=""
          className="w-full h-full brightness-40"
        />
        <div className="flex w-full h-full text-center items-center text-white justify-center absolute">
          <div className="flex flex-col w-400">
            <p className="text-2xl font-[600] mb-1">TOURS & TRAVEL</p>
            <p className="text-9xl font-[1000] mb-5">{label}</p>
            <div className="mt-10">
              <button className="bg-primary w-40 h-16">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[70%] bg-white h-30 flex items-center justify-center relative bottom-15">
      
        <div className="*:border *:border-gray-300 flex flex-row gap-6 justify-center *:text-xl *:w-45 *:h-15 *:text-center">
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
