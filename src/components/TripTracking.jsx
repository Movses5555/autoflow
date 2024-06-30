import { SectionTitle } from './SectionTitle';
import Calendar from '../assets/calendar.png'

export const TripTracking = () => {
  return (
    <div className="max-w-[1248px] mx-auto w-full h-full mt-[35px] flex justify-between pt-[72px] rounded-[12px] border border-[#F5F5F5] ">
      <div className=''>
        <div className='pl-[110px] pr-[132px] mt-[61px]'>
          <SectionTitle text="// trip tracking" />
          <p className='mt-[32px] text-5xl leading-[46px] tracking-[-3px]'>
            Calendar Syncing for better management between platforms
          </p>
          <p className='mt-[48px] w-[330px] text-base leading-[20px] tracking-[-0.5px]'>
            When a trip is booked on one platform then all your other connected platforms will become blocked off instantly.
          </p>
        </div>
      </div>
      <div className='flex items-end justify-end'>
        <div className='w-[557px] h-[488px] rounded-tl-[12px] rounded-br-[12px] border border-[#898989] ' >
          <div className='w-full h-[122px] pt-9 pl-[42px] '>
            <p className='text-xs leading-[8px] text-white'>2024</p>
            <p className='mt-[14px] text-[36px] leading-[25px] text-white'>June</p>
          </div>
          <div className='w-full h-[365px]'>
            <img
              src={Calendar}
              className='w-full h-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
