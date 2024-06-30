import HeartIcon from '../assets/HeartIcon.png'
import InstagramIcon from '../assets/instagramIcon.png'
import FacebookIcon from '../assets/facebookIcon.png'
import TwitterIcon from '../assets/twitterIcon.png'
import LinkedinIcon from '../assets/linkedinIcon.png'


export const Footer = () => {
  return (
    <div className='w-full h-16 bg-[#2B2B2B]'>
      <div className="max-w-[1248px] mx-auto w-full h-full my-[96px] flex items-center justify-between">
        <div>
          <p className='text-[14px] leading-[10px] text-[#808080] font-medium'>© 2024 AutoFlow. All rights reserved.</p>
        </div>
        <div className='flex gap-[14px]'>
          <div className='w-8 h-8 flex items-center justify-center rounded-full bg-[#555555]'>
            <img
              src={InstagramIcon}
              alt="Heart Icon"
              className='w-[14px] h-[14px]'
            />
          </div>
          <div className='w-8 h-8 flex items-center justify-center rounded-full bg-[#555555]'>
            <img
              src={FacebookIcon}
              alt="Heart Icon"
              className='w-[14px] h-[14px]'
            />
          </div>
          <div className='w-8 h-8 flex items-center justify-center rounded-full bg-[#555555]'>
            <img
              src={TwitterIcon}
              alt="Heart Icon"
              className='w-[14px] h-[14px]'
            />
          </div>
          <div className='w-8 h-8 flex items-center justify-center rounded-full bg-[#555555]'>
            <img
              src={LinkedinIcon}
              alt="Heart Icon"
              className='w-[14px] h-[14px]'
            />
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <span>Designed with</span>
          <img
            src={HeartIcon}
            alt="Heart Icon"
            className='w-[18px] h-[18px]'
          />
          <span>in Germany</span>
        </div>
      </div>
    </div>
  )
}

