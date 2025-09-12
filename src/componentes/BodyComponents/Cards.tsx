import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library} from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
export const Cards = () => {

    const Card_content = [
        {Title:"Travel Guide",Description:"Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore", icon:"fa-solid fa-route"},
        {Title:"Ticket Booking",Description:"Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore",icon:"fa-solid fa-ticket"},
        {Title:"Hotel Booking",Description:"Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore",icon:"fa-solid fa-hotel"}
    ]
  return (
    <>
      <section className='flex flex-wrap w-full justify-center'>
        {
          Card_content.map((obj, index) => {
            return (
              <>
                <div className='flex flex-col flex-wrap w-70 h-70 p-5 m-3 justify-center items-center text-center bg-white'>
                  <FontAwesomeIcon icon={obj.icon} className='border border-primary p-4 text-3xl mb-5 text-primary'/>
                  <p className='mb-1'><strong>{obj.Title}</strong></p>
                  <p className='text-body-text'>{obj.Description}</p>
                </div>
              </>
            )
          })
        }
      </section>
    </>
  )
}