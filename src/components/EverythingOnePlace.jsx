
import { SectionTitle } from './SectionTitle';
import EverythingInOnePlace from '../assets/everythingInOnePlace.png'

export const EverythingOnePlace = () => {
  return (
    <div className="max-w-[1248px] mx-auto w-full h-full mt-[156px] flex items-center justify-between pt-[98px] pb-[88px] rounded-[12px] border border-[#F5F5F5] ">
      <div className=''>
        <div className='pr-[132px]'>
          <img
            src={EverythingInOnePlace}
            className='w-[453px] h-[342px]'
          />
        </div>
      </div>
      <div className='flex items-center'>
        <div className='w-[619px] mr-[45px]' >
          <SectionTitle text="// everything in one place" />
          <div className='w-full mt-8'>
            <p className='font-medium text-6xl leading-[54px] tracking-[-3px]'>
              Developing exceptional software for simplicity & user-friendliness 
            </p>
          </div>
          <div className='w-full flex gap-[10px] mt-16'>
            <button
              type="button" 
              className="uppercase text-[#090909] bg-[#CDFF05] text-xs font-semibold rounded-full leading-2 px-4 py-3 text-center"
            >
              14 days free trial
            </button>
            <button
              type="button"
              style={{boxSizing: 'border-box'}}
              className="uppercase box-border text-white border-2 text-xs font-semibold rounded-full leading-2 px-4 py-[10px] text-center"
            >
              Still got questions?
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
