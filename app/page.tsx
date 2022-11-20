import { NavImage } from 'shared/ui/navImage'
import { homePageItems } from './data'

const Home = () => (
  <section>
    <div className='container px-8'>
      <div className='grid grid-cols-2 gap-5'>
        {homePageItems.map((item, idx) => (
          <NavImage key={idx} label={item.title} link={item.path} imgSrc={item.image.src} imgAlt={item.image.alt} />
        ))}
      </div>
    </div>
  </section>
)

export default Home
