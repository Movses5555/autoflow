import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import Payment from '../assets/payment.png'
import BabyIcon from '../assets/babyIcon.png'
import RoadIcon from '../assets/roadIcon.png'

export const ChooseAutoflow = () => {
  const [isOn1, setIsOn1] = useState(true);
  const [isOn2, setIsOn2] = useState(false);

  return (
    <div className="max-w-[1248px] mx-auto w-full h-full mt-[35px] flex justify-between pt-[72px]">
      <div className='max-w-[438px]'>
        <div className=' mt-[61px]'>
          <div className='w-[367px]'>
            <SectionTitle text="// why choose autoflow" />
            <p className='mt-[32px] text-[60px] leading-[51px] tracking-[-3px]'>
              Setup, sit back and relax
            </p>
          </div>
          <div className='mt-[77px]'>
            <div className='mb-[42px]'>
              <div className='flex items-center'>
                <div className='mr-6 bg-[#CDFF05] rounded-full w-[40px] h-[30px] flex items-center justify-center'>
                  <span className='text-black text-[14px] leading-[10px]'>01</span>
                </div>
                <p className='text-[24px] leading-[17px] text-white'>
                  Integrated e-commerce
                </p>
              </div>
              <div className='mt-6'>
                <p className='text-[#a4a4a4] leading-[19px]'>
                  Your customers can easily checkout & pay for their rental vehicle and add convenient trip extras such as additional miles or child safety seat.
                </p>
              </div>
            </div>
            <div className='w-full h-px bg-gradient-to-r from-white to-white-0 '></div>
            <div className='my-[42px]'>
              <div className='flex items-center'>
                <div className='mr-6 bg-[#CDFF05] rounded-full w-[40px] h-[30px] flex items-center justify-center'>
                  <span className='text-black text-[14px] leading-[10px]'>02</span>
                </div>
                <p className='text-[24px] leading-[17px] text-white'>
                  Integrate Stripe to take payments
                </p>
              </div>
            </div>
            <div className='w-full h-px bg-gradient-to-r from-white to-white-0 '></div>
            <div className='my-[42px]'>
              <div className='flex items-center'>
                <div className='mr-6 bg-[#CDFF05] rounded-full w-[40px] h-[30px] flex items-center justify-center'>
                  <span className='text-black text-[14px] leading-[10px]'>03</span>
                </div>
                <p className='text-[24px] leading-[17px] text-white'>
                  E-Sign Agreements
                </p>
              </div>
            </div>
            <div className='w-full h-px bg-gradient-to-r from-white to-white-0 '></div>
            <div className='mt-[42px]'>
              <div className='flex items-center'>
                <div className='mr-6 bg-[#CDFF05] rounded-full w-[40px] h-[30px] flex items-center justify-center'>
                  <span className='text-black text-[14px] leading-[10px]'>04</span>
                </div>
                <p className='text-[24px] leading-[17px] text-white'>
                  Car, Watercraft & more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-end justify-end pr-[52px]'>
        <div className='w-[557px] h-auto bg-[#2b2b2b] rounded-[12px] border border-[#898989] ' >
          <div className='w-full px-[60px] py-[69px]'>
            <img
              src={Payment}
              className='w-full h-full'
            />
          </div>
          <div className='px-8'>
            <p className=''>Extras</p>
            <div className='mt-8 mb-5 flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='w-12 h-12 rounded-full bg-[#3E3E3E] flex items-center justify-center'>
                  <img
                    src={BabyIcon}
                    alt="Baby Icon"
                    className='w-[25px] h-[25px]'
                  />
                </div>
                <div className='ml-[14px]'>
                  <p className='mb-3 text-white text-[18px] leading-[13px]'>Child safety seat</p>
                  <p className='text-[#808080] text-[12px] leading-[8px]'>Activate on arrival</p>
                </div>
              </div>
              <div>
              <div
                className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                  isOn1 ? 'bg-[#CDFF05]' : 'bg-[#595959]'
                }`}
                onClick={() => setIsOn1(!isOn1)}
              >
                <div
                  className={`w-4 h-4 rounded-full shadow-md transform transition-transform ${
                   isOn1 ? 'bg-black translate-x-5' : 'bg-white translate-x-0'
                  }`}
                />
              </div>
              </div>
            </div>
            <div className='w-full h-px bg-[#636363]'></div>
            <div className='mt-8 mb-5 flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='w-12 h-12 rounded-full bg-[#3E3E3E] flex items-center justify-center'>
                  <img
                    src={RoadIcon}
                    alt="Road Icon"
                    className='w-[25px] h-[25px]'
                  />
                </div>
                <div className='ml-[14px]'>
                  <p className='mb-3 text-white text-[18px] leading-[13px]'>Additional miles</p>
                  <p className='text-[#808080] text-[12px] leading-[8px]'>Calculate on arrival</p>
                </div>
              </div>
              <div>
              <div
                className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                  isOn2 ? 'bg-[#CDFF05]' : 'bg-[#595959]'
                }`}
                onClick={() => setIsOn2(!isOn2)}
              >
                <div
                  className={`w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    isOn2 ? 'bg-black translate-x-5' : 'bg-white translate-x-0'
                  }`}
                />
              </div>
              </div>
            </div>
          </div>
          <div className='w-full mt-[66px] px-5 pb-5'>
            <button
              className='w-full h-[51px] bg-[#CDFF05] rounded-full flex items-center justify-center'
            >
              <p className='capitalize text-black text-xs leading-[8px]'>I HAVE READ THE AGREEMENT</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
