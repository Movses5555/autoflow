import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { Features } from './components/Features'
import Mask1 from './assets/Mask_1.png'
import { TripTracking } from './components/TripTracking'


function App() {

  return (
    <div className='relative w-full h-full'>
      <img
        src={Mask1}
        className='absolute w-full h-auto z-0 max-w-full max-h-[1860px] object-cover object-center'
      />
      <div className='absolute w-full h-auto z-1'>
        <Header />
        <div className={`max-w-[1248px] mx-auto pt-[155px] relative w-full h-auto `}>
          <Banner />  
          <Features /> 
          <TripTracking /> 
        </div>
      </div>
    </div>
  )
}

export default App
