
export const GetItDone = () => {
  return (
    <div className="max-w-[1248px] h-[303px] bg-[#CDFF05] mx-auto w-full h-full mt-[146px] flex items-center justify-between rounded-[12px] ">
      <div className='w-full flex flex-col items-center justify-center'>
        <div>
          <span className='uppercase text-xs text-[#090909] font-semibold leading-2'>
            // get it done
          </span>
        </div>
        <p className='mt-[29px] text-black text-6xl leading-[42px] font-medium'>Ready to get started?</p>

        <div className='flex gap-[10px] mt-16'>
          <button
            type="button" 
            className="uppercase bg-[#090909] text-[#CDFF05] text-xs font-semibold rounded-full leading-2 px-4 py-3 text-center"
          >
            14 days free trial
          </button>
          <button
            type="button"
            className="uppercase box-border text-[#090909] border border-[#090909] text-xs font-semibold rounded-full leading-2 px-4 py-[10px] text-center"
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  )
}

