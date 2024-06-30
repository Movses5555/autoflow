
import { SectionTitle } from './SectionTitle';
import CheckSmall from '../assets/check_small.png'
import CalendarIcon from '../assets/calendar_icon.png'
import BoatIcon from '../assets/Boat.png'
import Graphics from '../assets/graphics.png'
import Car from '../assets/car.png'
import Beenhere from '../assets/beenhere.png'
import CarIcon from '../assets/CarIcon.png'
import AirplaneIcon from '../assets/AirplaneIcon.png'

export const Banner = () => {
  return (
    <div className="w-full h-full flex justify-center gap-[34px]">
      <div className='w-[629px] pt-[80px] pr-[62px]'>
        <SectionTitle text="// welcome to autoflow" />
        <div className='w-full mt-8'>
          <p className='font-medium text-8xl leading-[82px] tracking-[-5px]'>
            Cruise control for your fleet.
          </p>
        </div>
        <div className='w-full flex gap-[10px] mt-14'>
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
            view features
          </button>
        </div>
        <div className='w-full flex gap-6 mt-[154px]'>
          <div className='flex items-center gap-[10px]'>
            <div className='w-7 h-7 rounded-full flex items-center justify-center bg-[#CDFF05]'>
              <img src={CheckSmall} className='w-7 h-7'/>
            </div>
            <span className='font-medium text-20 leading-3.5 tracking-[-1.5px]'>Take Payments</span>
          </div>
          <div className='flex items-center gap-[10px]'>
            <div className='w-7 h-7 rounded-full flex items-center justify-center bg-[#CDFF05]'>
              <img src={CheckSmall} className='w-7 h-7'/>
            </div>
            <span className='font-medium text-20 leading-3.5 tracking-[-1.5px]'>E-Signatures</span>
          </div>
          <div className='flex items-center gap-[10px]'>
            <div className='w-7 h-7 rounded-full flex items-center justify-center bg-[#CDFF05]'>
              <img src={CheckSmall} className='w-7 h-7'/>
            </div>
            <span className='font-medium text-20 leading-3.5 tracking-[-1.5px]'>Fleet Management</span>
          </div>
        </div>
      </div>
      <div className='relative w-[629px] h-[567px]'>
        <div className='absolute top-0 right-[45px] bg-[#CDFF05] rounded-[10px] w-[316px] h-[404px]'>
          <div className='relative pt-[22px] pl-[30px] pr-[22px] pb-[31px]'>
            <div className='flex justify-between items-center '>
              <div className='flex items-center gap-[7px]'>
                <img src={CalendarIcon} className="w-4 h-4" />
                <span className='text-black text-xs'>Total sales</span>
              </div>
              <select
                value='june_2024'
                name="date"
                defaultValue="june_2024"
                className='border bg-[#CDFF05] text-black text-xs pl-[15px]  border-black rounded-[17px] w-[95px] h-[22px]'
              >
                <option value="june_2024">June 2024</option>
              </select>
            </div>
            <div className='mt-3'>
              <p className='text-black text-[40px] leading-[28px]'>1,289</p>
            </div>
            <div className='absolute top-[68px] right-[-45px] bg-white w-[172px] h-12 p-1 flex items-center rounded-[6px] gap-[10px]'>
              <div className='w-10 h-10 bg-[#CDFF05] rounded-[4px] flex justify-center items-center'>
                <img src={BoatIcon} alt='boat' className='w-5 h-5'/>
              </div>
              <p className='text-[18px] leading-[13px] text-black font-medium'>Watercraft</p>
            </div>
            <div className='mt-[43px]'>
              <img 
                src={Graphics}
              />
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className='absolute top-[216px] right-[263px] bg-[#1E1E1E] border rounded-xl w-[325px] h-[351px] p-4'>
          <div className='relative'>
            <div>
              <img
                src={Car}
                alt='car'
                className='w-full h-[148px]'
              />
            </div>
            <div className='flex justify-between items-center mt-[29px] px-2'>
              <p className='text-2xl font-medium leading-[17px]'>AVIS XL Car</p>
              <img
                src={Beenhere}
                alt='Beenhere'
                className='w-6 h-6'
              />
            </div>
            <div className='flex items-center justify-between mt-4 pl-2'>
              <div className='w-1/3 py-[6px]'>
                <p className='text-xs leading-[8px] text-[#828597] mb-[14px]'>Top Speed</p>
                <p className='text-base leading-[11px] text-white'>140Km/h</p>
              </div>
              <div className='w-1/3 border-l border-[#828597] pl-[14px] py-[6px]'>
                <p className='text-xs leading-[8px] text-[#828597] mb-[14px]'>Power</p>
                <p className='text-base leading-[11px] text-white'>1200CC</p>
              </div>
              <div className='w-1/3 border-l border-[#828597] pl-[14px] py-[6px]'>
                <p className='text-xs leading-[8px] text-[#828597] mb-[14px]'>Cylinders</p>
                <p className='text-base leading-[11px] text-white'>4</p>
              </div>
            </div>
            <div className='w-full mt-[25px]'>
              <button
                className='w-full h-8 bg-[#CDFF05] rounded-full flex items-center justify-center'
              >
                <p className='capitalize text-black text-xs leading-[8px]'>book now</p>
              </button>
            </div>
            <div className='absolute top-[68px] left-[-58px] bg-white w-[142px] h-12 p-1 flex items-center rounded-[6px] gap-[10px]'>
              <div className='w-10 h-10 bg-[#CDFF05] rounded-[4px] flex justify-center items-center'>
                <img src={CarIcon} alt='CarIcon' className='w-5 h-5'/>
              </div>
              <p className='text-[18px] leading-[13px] text-black font-medium'>Cars</p>
            </div>
            <div className='absolute top-[217px] right-[-104px] bg-white w-[142px] h-12 p-1 flex items-center rounded-[6px] gap-[10px]'>
              <div className='w-10 h-10 bg-[#CDFF05] rounded-[4px] flex justify-center items-center'>
                <img src={AirplaneIcon} alt='AirplaneIcon' className='w-5 h-5'/>
              </div>
              <p className='text-[18px] leading-[13px] text-black font-medium'>Jets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
