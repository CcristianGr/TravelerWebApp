import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHotel, faRoute, fas, faTicket } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
export const Cards = () => {

  const Card_content = [
    { idcard: 1, Title: "Travel Guide", Description: "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore", icon: faRoute },
    { idcard: 2, Title: "Ticket Booking", Description: "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore", icon: faTicket },
    { idcard: 3, Title: "Hotel Booking", Description: "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore", icon: faHotel }
  ]
  return (
    <div className='flex flex-col justify-center items-center  '>
      <p className='text-primary mt-10 text-xl tracking-[4px]'>SERVICES</p>
      <p className='text-4xl font-[800]'>Tours & Travel Services</p>
      <section className='flex flex-wrap justify-center mt-4 w-6xl lg:max-w-4xl md:max-w-3xl xl:max-w-5xl'>
        {
          Card_content.map((obj, index) => {
            return (
              <div key={obj.idcard} className='group flex flex-col flex-wrap w-70 h-70 p-5 mx-auto justify-center items-center text-center bg-white transition delay-75 duration-150 hover:shadow-2xl'>
                <FontAwesomeIcon icon={obj.icon} className='border border-primary p-4 text-3xl mb-5 text-primary group-hover:bg-primary group-hover:text-white transition delay-75 duration-150' />
                <p className='mb-1'><strong>{obj.Title}</strong></p>
                <p className='text-body-text'>{obj.Description}</p>
              </div>
            )
          })
        }
      </section>
    </div>

  )
}