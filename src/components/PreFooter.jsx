import Logo2 from '../assets/logo_2.png'


export const PreFooter = () => {
  return (
    <div className="max-w-[1248px] mx-auto w-full h-full my-[96px] flex justify-between">
      <div className="w-[229px] h-[27px]">
        <img
          src={Logo2}
          alt="header_logo"
          className='w-full h-full'
        />
      </div>
      <div className='w-[497px] flex justify-between gap-[120px]'>
        <div className='w-[54px]'>
          <p className='mb-8 text-withe font-medium text-[14px] leading-[10px] tracking-[-0.5px]'>Home</p>
          <p className='mb-8 text-withe font-medium text-[14px] leading-[10px] tracking-[-0.5px]'>Problem</p>
          <p className='text-withe font-medium text-[14px] leading-[10px] tracking-[-0.5px]'>Solution</p>
        </div>
        <div className='w-[79px]'>
          <p className='mb-8 text-withe font-medium text-[14px] leading-[10px] tracking-[-0.5px]'>Features</p>
          <p className='mb-8 text-withe font-medium text-[14px] leading-[10px] tracking-[-0.5px]'>Pricing</p>
          <p className='text-withe font-medium text-[14px] leading-[10px] tracking-[-0.5px]'>Get in touch</p>
        </div>
        <div className='w-[124px]'>
          <p className='mb-8 text-withe font-medium text-[14px] leading-[10px] tracking-[-0.5px]'>Privacy Policy</p>
          <p className='mb-8 text-withe font-medium text-[14px] leading-[10px] tracking-[-0.5px]'>Terms & Conditions</p>
          <p className='text-withe font-medium text-[14px] leading-[10px] tracking-[-0.5px]'>Refund Policy</p>
        </div>
      </div>
    </div>
  )
}

