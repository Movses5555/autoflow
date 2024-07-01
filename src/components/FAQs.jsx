import { SectionTitle } from './SectionTitle';
import MinusIcon from '../assets/minusIcon.png'
import AddIcon from '../assets/addIcon.png'

export const FAQs = () => {

  return (
    <div className="max-w-1248 mx-auto w-full h-full mt-180 flex justify-between">
      <div className='w-315 mr-139'>
        <div className=''>
          <SectionTitle text="// FAQS" />
          <p className='mt-32 text-6xl leading-51 -tracking-3'>
            Frequently asked questions
          </p>
        </div>
      </div>
      <div className='mt-45'>
        <div className='flex w-full mb-35' >
          <div className='w-593 mr-143'>
            <p className='text-2xl text-white leading-17'>
              What are the benefits of working with us?
            </p>
            <p className='mt-8 text-base text-gray-110 leading-19 -tracking-0.3'>
              Lorem ipsum dolor sit amet consectetur. Quam mi rhoncus ac odio tempor. Proin quam vitae tellus sagittis fusce nulla ut. Risus odio at cursus turpis tortor. Bibendum ultricies at tristique volutpat aliquet faucibus sodales. Vel accumsan sit.
            </p>
          </div>
          <button className='bg-green-200 rounded-full w-58 h-36 flex items-center justify-center'>
            <img
              src={MinusIcon}
              className='w-6 h-6'
            />
          </button>
        </div>
        <div className='w-full h-px bg-gradient-to-r from-white to-white-0 '></div>
        <div className='flex w-full mt-45 mb-35' >
          <div className='w-593 mr-143'>
            <p className='text-2xl text-white leading-17'>
              How does the process look like?
            </p>
          </div>
          <button className='rounded-full w-58 h-36 flex items-center justify-center border border-white'>
            <img
              src={AddIcon}
              className='w-6 h-6'
            />
          </button>
        </div>
        <div className='w-full h-px bg-gradient-to-r from-white to-white-0 '></div>
        <div className='flex w-full mt-45 mb-35' >
          <div className='w-593 mr-143'>
            <p className='text-2xl text-white leading-17'>
              Lorem ipsum dolor sit amet?
            </p>
          </div>
          <button className='rounded-full w-58 h-36 flex items-center justify-center border border-white'>
            <img
              src={AddIcon}
              className='w-6 h-6'
            />
          </button>
        </div>
        <div className='w-full h-px bg-gradient-to-r from-white to-white-0 '></div>
        <div className='flex w-full mt-45 mb-35' >
          <div className='w-593 mr-143'>
            <p className='text-2xl text-white leading-17'>
              Lorem ipsum dolor sit amet consectetur?
            </p>
          </div>
          <button className='rounded-full w-58 h-36 flex items-center justify-center border border-white'>
            <img
              src={AddIcon}
              className='w-6 h-6'
            />
          </button>
        </div>
        <div className='w-full h-px bg-gradient-to-r from-white to-white-0 '></div>
        <div className='flex w-full mt-45 mb-35' >
          <div className='w-593 mr-143'>
            <p className='text-2xl text-white leading-17'>
              Lorem ipsum dolor sit amet consectetur?
            </p>
          </div>
          <button className='rounded-full w-58 h-36 flex items-center justify-center border border-white'>
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
