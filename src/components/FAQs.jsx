import { SectionTitle } from './SectionTitle';
import MinusIcon from '../assets/minusIcon.png'
import AddIcon from '../assets/addIcon.png'

export const FAQs = () => {

  return (
    <div className="max-w-[1248px] mx-auto w-full h-full mt-[180px] flex justify-between">
      <div className='w-[315px] mr-[139px]'>
        <div className=''>
          <SectionTitle text="// FAQS" />
          <p className='mt-[32px] text-[60px] leading-[51px] tracking-[-3px]'>
            Frequently asked questions
          </p>
        </div>
      </div>
      <div className='mt-[45px]'>
        <div className='flex w-full mb-[35px]' >
          <div className='w-[593px] mr-[143px]'>
            <p className='text-[24px] text-white leading-[17px]'>
              What are the benefits of working with us?
            </p>
            <p className='mt-8 text-base text-[#a4a4a4] leading-[19px] tracking-[-0.3px]'>
              Lorem ipsum dolor sit amet consectetur. Quam mi rhoncus ac odio tempor. Proin quam vitae tellus sagittis fusce nulla ut. Risus odio at cursus turpis tortor. Bibendum ultricies at tristique volutpat aliquet faucibus sodales. Vel accumsan sit.
            </p>
          </div>
          <button className='bg-[#CDFF05] rounded-full w-[58px] h-[36px] flex items-center justify-center'>
            <img
              src={MinusIcon}
              className='w-6 h-6'
            />
          </button>
        </div>
        <div className='w-full h-px bg-gradient-to-r from-white to-white-0 '></div>
        <div className='flex w-full mt-[45px] mb-[35px]' >
          <div className='w-[593px] mr-[143px]'>
            <p className='text-[24px] text-white leading-[17px]'>
              How does the process look like?
            </p>
          </div>
          <button className='rounded-full w-[58px] h-[36px] flex items-center justify-center border border-white'>
            <img
              src={AddIcon}
              className='w-6 h-6'
            />
          </button>
        </div>
        <div className='w-full h-px bg-gradient-to-r from-white to-white-0 '></div>
        <div className='flex w-full mt-[45px] mb-[35px]' >
          <div className='w-[593px] mr-[143px]'>
            <p className='text-[24px] text-white leading-[17px]'>
              Lorem ipsum dolor sit amet?
            </p>
          </div>
          <button className='rounded-full w-[58px] h-[36px] flex items-center justify-center border border-white'>
            <img
              src={AddIcon}
              className='w-6 h-6'
            />
          </button>
        </div>
        <div className='w-full h-px bg-gradient-to-r from-white to-white-0 '></div>
        <div className='flex w-full mt-[45px] mb-[35px]' >
          <div className='w-[593px] mr-[143px]'>
            <p className='text-[24px] text-white leading-[17px]'>
              Lorem ipsum dolor sit amet consectetur?
            </p>
          </div>
          <button className='rounded-full w-[58px] h-[36px] flex items-center justify-center border border-white'>
            <img
              src={AddIcon}
              className='w-6 h-6'
            />
          </button>
        </div>
        <div className='w-full h-px bg-gradient-to-r from-white to-white-0 '></div>
        <div className='flex w-full mt-[45px] mb-[35px]' >
          <div className='w-[593px] mr-[143px]'>
            <p className='text-[24px] text-white leading-[17px]'>
              Lorem ipsum dolor sit amet consectetur?
            </p>
          </div>
          <button className='rounded-full w-[58px] h-[36px] flex items-center justify-center border border-white'>
            <img
              src={AddIcon}
              className='w-6 h-6'
            />
          </button>
        </div>
      </div>
    </div>
  )
}
