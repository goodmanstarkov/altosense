import { NavImage } from 'shared/ui/navImage'
import { salonsPage } from './data'

const Salons = () => (
  <section>
    <h1 className='mt-7 mb-5 text-center'>{salonsPage.title}</h1>

    <div className='container px-8'>
      <div className='grid grid-cols-3 gap-5'>
        {salonsPage.items.map((item, idx) => (
          <NavImage key={idx} label={item.title} link={item.path} imgSrc={item.image.src} imgAlt={item.image.alt} />
        ))}
      </div>
    </div>
  </section>
)

export default Salons
