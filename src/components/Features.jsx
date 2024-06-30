
import { SectionTitle } from './SectionTitle';
import Subscription from '../assets/subscription.png'
import Avatar from '../assets/avatar.png'

export const Features = () => {
  return (
    <div className="w-full h-full pt-[166px] flex flex-col items-center justify-center">
      <div className='w-[678px] text-center'>
        <SectionTitle text="// features" />
        <p className='mt-6 text-white text-[60px] font-medium leading-[50px] tracking-[-3px]'>
          Boost revenue for any product with our expertise
        </p>
      </div>
      <div className='w-full mt-[65px] flex justify-center gap-[27px]'>
        <div className='w-[612px] h-[560px] rounded-[12px] border border-[#F5F5F5]'>
          <div className='flex justify-end mt-[34px]'>
            <img src={Subscription} 
              className='w-[376px] h-[231px]'
            />
          </div>
          <div className='px-[60px]'>
            <SectionTitle text="// flexible payment plans" />
            <p className='mt-[45px] text-5xl leading-[43px] tracking-[-3px]'>
              Affordable subscription plans for all businesses
            </p>
            <p className='mt-[37px] w-[401px] text-base leading-[19px]'>
              Want to change a small detail that all of your listings share? Create listing templates, FAQ's and guidelines to update multiple listings at once.
            </p>
          </div>
        </div>
        <div className='w-[612px] rounded-lg border border-[#F5F5F5]'>
          <div className='w-full px-[60px] pt-11 mb-[30px]'>
            <div className='flex'>
              <img 
                src={Avatar} 
                className='w-[36px] h-[36px]'
              />
              <div className='p-5 ml-[10px] w-[239px] h-[94px] bg-[#111111] rounded-bl-[12px] rounded-r-[12px]'>
                <p className='text-[#7F8289] text-[14px] leading-[10px]'>Client</p>
                <p className='mt-3 text-white text-base leading-[16px]'>There looks to be some problem with my booking?</p>
              </div>
            </div>
            <div className='flex justify-end mt-6'>
              <div className='p-5 ml-[10px] w-[239px] h-[73px] bg-[#CDFF05] rounded-l-[12px] rounded-br-[12px]'>
                <p className='text-black text-[14px] font-bold leading-[10px] '>autoflow</p>
                <p className='mt-3 text-black text-base leading-[11px]'>On it! Should be fixed asap!</p>
              </div>
              <div className='w-9 h-9 ml-[10px] bg-black flex items-center justify-center rounded-full'>
                <span className='text-[#CDFF05] text-base font-black leading-[15px] italic'>F</span>
              </div>
            </div>
          </div>
          <div className='px-[60px]'>
            <SectionTitle text="// support dashboard" />
            <p className='mt-[45px] text-5xl leading-[43px] tracking-[-3px]'>
              Providing seamless assistance to clients
            </p>
            <p className='mt-[37px] w-[401px] text-base leading-[19px]'>
              Managers will have the capability to make real time edits, ensuring flexibility and responsiveness to evolving needs
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
