
import { SectionTitle } from './SectionTitle';
import CheckSmall from '../assets/check_small.png'

export const Pricing = () => {
  return (
    <div className="max-w-1248 mx-auto w-full h-full pt-166 flex flex-col items-center justify-center">
      <div className='w-678 text-center'>
        <SectionTitle text="// pricing" />
        <p className='mt-6 text-white text-6xl font-medium leading-50 -tracking-3'>
          Choose a plan that best suits your needs
        </p>
      </div>
      <div className='w-full mt-65 flex justify-center gap-48'>
        <div className='w-337 pl-9 pr-22 py-42'>
          <div className='mb-8 bg-green-200 rounded-full w-77 h-30 flex items-center justify-center'>
            <span className='text-black text-sm leading-10'>
              Tier 2
            </span>
          </div>
          <div className='flex items-end mb-6'>
            <p className='mr-3 text-white text-6xl leading-42 font-medium'>$200</p>
            <p className='text-white text-base leading-11 font-normal'>//  Per Month</p>
          </div>
          <p className='text-gray-180 text-base leading-11'>
            Basic platform usage
          </p>
          <div className='mt-8 mb-78'>
            <div className='flex items-center gap-10 mb-30'>
              <div className='w-18 h-18 rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-full h-full'/>
              </div>
              <p className='text-gray-180 text-base leading-11 -tracking-0.3'>
                Basic vehicle tracking & monitoring
              </p>
            </div>
            <div className='flex items-center gap-10 mb-30'>
              <div className='w-18 h-18 rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-full h-full'/>
              </div>
              <p className='text-gray-180 text-base leading-11 -tracking-0.3'>
                Standard reporting and analytics
              </p>
            </div>
            <div className='flex items-center gap-10'>
              <div className='w-18 h-18 rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-full h-full'/>
              </div>
              <p className='text-gray-180 text-base leading-11 -tracking-0.3'>
                Email support
              </p>
            </div>
          </div>
          <div className='pr-14'>
            <button
              type="button"
              className="w-full uppercase box-border text-white border-2 text-xs font-semibold rounded-full leading-8 px-4 py-10 text-center"
            >
              book a call
            </button>
          </div>
        </div>
        <div className='w-337 pl-9 pr-22 py-42 rounded-12 border border-white-100'>
          <div className='mb-8 bg-green-200 rounded-full w-77 h-30 flex items-center justify-center'>
            <span className='text-black text-sm leading-10'>
              Tier 1
            </span>
          </div>
          <div className='flex items-end mb-6'>
            <p className='mr-3 text-white text-6xl leading-42 font-medium'>$300</p>
            <p className='text-white text-base leading-11 font-normal'>//  Per Month</p>
          </div>
          <p className='text-gray-180 text-base leading-11'>
            Enhanced integration
          </p>
          <div className='mt-8 mb-78'>
            <div className='flex items-center gap-10 mb-30'>
              <div className='w-18 h-18 rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-full h-full'/>
              </div>
              <p className='text-base leading-11 -tracking-0.3'>
                Comprehensive features
              </p>
            </div>
            <div className='flex items-center gap-10 mb-30'>
              <div className='w-18 h-18 rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-full h-full'/>
              </div>
              <p className='text-base leading-11 -tracking-0.3'>
                Predictive analytics
              </p>
            </div>
            <div className='flex items-center gap-10'>
              <div className='w-18 h-18 rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-full h-full'/>
              </div>
              <p className='text-base leading-11 -tracking-0.3'>
                Dedicated account manager
              </p>
            </div>
          </div>
          <div className='pr-14'>
            <button
              type="button" 
              className="w-full uppercase text-black-200 bg-green-200 text-xs font-semibold rounded-full leading-8 px-4 py-3 text-center"
            >
              book a call
            </button>
          </div>
        </div>
        <div className='w-337 pl-9 pr-22 py-42'>
          <div className='mb-8 bg-green-200 rounded-full w-77 h-30 flex items-center justify-center'>
            <span className='text-black text-sm leading-10'>
              Tier 3
            </span>
          </div>
          <div className='flex items-end mb-6'>
            <p className='mr-3 text-white text-6xl leading-42 font-medium'>$400</p>
            <p className='text-white text-base leading-11 font-normal'>//  Per Month</p>
          </div>
          <p className='text-gray-180 text-base leading-11'>
            AI Tools & integrations
          </p>
          <div className='mt-8 mb-78'>
            <div className='flex items-center gap-10 mb-30'>
              <div className='w-18 h-18 rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-full h-full'/>
              </div>
              <p className='text-gray-180 text-base leading-11 -tracking-0.3'>
                Fully customizable features
              </p>
            </div>
            <div className='flex items-center gap-10 mb-30'>
              <div className='w-18 h-18 rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-full h-full'/>
              </div>
              <p className='text-gray-180 text-base leading-11 -tracking-0.3'>
                24/7 support with priority response
              </p>
            </div>
            <div className='flex items-center gap-10'>
              <div className='w-18 h-18 rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-full h-full'/>
              </div>
              <p className='text-gray-180 text-base leading-11 -tracking-0.3'>
                Dedicated account manager
              </p>
            </div>
          </div>
          <div className='pr-14'>
            <button
              type="button"
              className="w-full uppercase box-border text-white border-2 text-xs font-semibold rounded-full leading-8 px-4 py-10 text-center"
            >
              book a call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
