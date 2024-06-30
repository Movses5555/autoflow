
import { SectionTitle } from './SectionTitle';
import CheckSmall from '../assets/check_small.png'

export const Pricing = () => {
  return (
    <div className="max-w-[1248px] mx-auto w-full h-full pt-[166px] flex flex-col items-center justify-center">
      <div className='w-[678px] text-center'>
        <SectionTitle text="// pricing" />
        <p className='mt-6 text-white text-[60px] font-medium leading-[50px] tracking-[-3px]'>
          Choose a plan that best suits your needs
        </p>
      </div>
      <div className='w-full mt-[65px] flex justify-center gap-[48px]'>
        <div className='w-[337px] pl-9 pr-[22px] py-[42px]'>
          <div className='mb-8 bg-[#CDFF05] rounded-full w-[77px] h-[30px] flex items-center justify-center'>
            <span className='text-black text-[14px] leading-[10px]'>
              Tier 2
            </span>
          </div>
          <div className='flex items-end mb-6'>
            <p className='mr-3 text-white text-[60px] leading-[42px] font-medium'>$200</p>
            <p className='text-white text-base leading-[11px] font-normal'>//  Per Month</p>
          </div>
          <p className='text-[#a5a5a5] text-base leading-[11px]'>
            Basic platform usage
          </p>
          <div className='mt-8 mb-[78px]'>
            <div className='flex items-center gap-[10px] mb-[30px]'>
              <div className='w-[18px] h-[18px] rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-[18px] h-[18px]'/>
              </div>
              <p className='text-[#a5a5a5] text-base leading-[11px] tracking-[-0.3px]'>
                Basic vehicle tracking & monitoring
              </p>
            </div>
            <div className='flex items-center gap-[10px] mb-[30px]'>
              <div className='w-[18px] h-[18px] rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-[18px] h-[18px]'/>
              </div>
              <p className='text-[#a5a5a5] text-base leading-[11px] tracking-[-0.3px]'>
                Standard reporting and analytics
              </p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <div className='w-[18px] h-[18px] rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-[18px] h-[18px]'/>
              </div>
              <p className='text-[#a5a5a5] text-base leading-[11px] tracking-[-0.3px]'>
                Email support
              </p>
            </div>
          </div>
          <div className='pr-[14px]'>
            <button
              type="button"
              className="w-full uppercase box-border text-white border-2 text-xs font-semibold rounded-full leading-2 px-4 py-[10px] text-center"
            >
              book a call
            </button>
          </div>
        </div>
        <div className='w-[337px] pl-9 pr-[22px] py-[42px] rounded-[12px] border border-[#F5F5F5]'>
          <div className='mb-8 bg-[#CDFF05] rounded-full w-[77px] h-[30px] flex items-center justify-center'>
            <span className='text-black text-[14px] leading-[10px]'>
              Tier 1
            </span>
          </div>
          <div className='flex items-end mb-6'>
            <p className='mr-3 text-white text-[60px] leading-[42px] font-medium'>$300</p>
            <p className='text-white text-base leading-[11px] font-normal'>//  Per Month</p>
          </div>
          <p className='text-[#a5a5a5] text-base leading-[11px]'>
            Enhanced integration
          </p>
          <div className='mt-8 mb-[78px]'>
            <div className='flex items-center gap-[10px] mb-[30px]'>
              <div className='w-[18px] h-[18px] rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-[18px] h-[18px]'/>
              </div>
              <p className='text-base leading-[11px] tracking-[-0.3px]'>
                Comprehensive features
              </p>
            </div>
            <div className='flex items-center gap-[10px] mb-[30px]'>
              <div className='w-[18px] h-[18px] rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-[18px] h-[18px]'/>
              </div>
              <p className='text-base leading-[11px] tracking-[-0.3px]'>
                Predictive analytics
              </p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <div className='w-[18px] h-[18px] rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-[18px] h-[18px]'/>
              </div>
              <p className='text-base leading-[11px] tracking-[-0.3px]'>
                Dedicated account manager
              </p>
            </div>
          </div>
          <div className='pr-[14px]'>
            <button
              type="button" 
              className="w-full uppercase text-[#090909] bg-[#CDFF05] text-xs font-semibold rounded-full leading-2 px-4 py-3 text-center"
            >
              book a call
            </button>
          </div>
        </div>
        <div className='w-[337px] pl-9 pr-[22px] py-[42px]'>
          <div className='mb-8 bg-[#CDFF05] rounded-full w-[77px] h-[30px] flex items-center justify-center'>
            <span className='text-black text-[14px] leading-[10px]'>
              Tier 3
            </span>
          </div>
          <div className='flex items-end mb-6'>
            <p className='mr-3 text-white text-[60px] leading-[42px] font-medium'>$400</p>
            <p className='text-white text-base leading-[11px] font-normal'>//  Per Month</p>
          </div>
          <p className='text-[#a5a5a5] text-base leading-[11px]'>
            AI Tools & integrations
          </p>
          <div className='mt-8 mb-[78px]'>
            <div className='flex items-center gap-[10px] mb-[30px]'>
              <div className='w-[18px] h-[18px] rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-[18px] h-[18px]'/>
              </div>
              <p className='text-[#a5a5a5] text-base leading-[11px] tracking-[-0.3px]'>
                Fully customizable features
              </p>
            </div>
            <div className='flex items-center gap-[10px] mb-[30px]'>
              <div className='w-[18px] h-[18px] rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-[18px] h-[18px]'/>
              </div>
              <p className='text-[#a5a5a5] text-base leading-[11px] tracking-[-0.3px]'>
                24/7 support with priority response
              </p>
            </div>
            <div className='flex items-center gap-[10px]'>
              <div className='w-[18px] h-[18px] rounded-full flex items-center justify-center bg-white'>
                <img src={CheckSmall} className='w-[18px] h-[18px]'/>
              </div>
              <p className='text-[#a5a5a5] text-base leading-[11px] tracking-[-0.3px]'>
                Dedicated account manager
              </p>
            </div>
          </div>
          <div className='pr-[14px]'>
            <button
              type="button"
              className="w-full uppercase box-border text-white border-2 text-xs font-semibold rounded-full leading-2 px-4 py-[10px] text-center"
            >
              book a call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
