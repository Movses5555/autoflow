import React, {useState, useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchInitDataAsync } from '@/redux/clientReducer';
import { Header } from '@/components/Header';
import { GetItDone } from '@/components/GetItDone';
import { PreFooter } from '@/components/PreFooter';
import { Footer } from '@/components/Footer';
import { Spinner } from '@/components/Spinner';
import Mask1 from '@/assets/Mask_1.png';
import Mask2 from '@/assets/Mask_2.png';
import Mask3 from '@/assets/Mask_3.png';

export const HomepageLayout = ({children}) => {

  const dispatch = useDispatch();
  const [height, setHeight] = useState(5151)
  const ref = useRef(null)

  const { loadingInitData } = useSelector((state) => state.client);

  useEffect(() => {
    dispatch(fetchInitDataAsync());
  }, [dispatch])

  useEffect(() => {
    if(ref?.current) {
      setHeight(ref.current?.clientHeight - 1229)
    }
  })


  if (loadingInitData) {
    return (
      <div className='w-full h-svh'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='relative w-full h-full font-hoves'>
      <Masks height={height}/>
      <div ref={ref} className='absolute w-full h-auto z-1'>
        <Header />
        <div className={`max-w-1292 mx-auto pt-155 relative w-full h-auto `}>
          {children}
          <GetItDone />
          <PreFooter />
        </div>
        <Footer />
      </div>
    </div>
  )
};

const Masks = ({
  height
}) => {
  const location = useLocation()
  const path = location.pathname

  if(path == '/faq') {
    return (
      <>
        <img
          src={Mask1}
          alt="mask_1"
          className='absolute top-[100px] right-[-200px] w-full h-auto z-0 max-w-full max-h-1860 object-cover object-center'
        />
        <div 
          style={{top: height + "px"}}
          className={`absolute left-0 w-full h-auto z-0 max-w-full max-h-1860 object-cover object-center overflow-hidden`}
        >
          <img
            src={Mask3}
            alt="mask_3"
          />
        </div>
      </>
    )
  }

  return (
    <>
      <img
        src={Mask1}
        alt="mask_1"
        className='absolute top-0 left-0 w-full h-auto z-0 max-w-full max-h-1860 object-cover object-center'
      />
      <img
        src={Mask2}
        alt="mask_2"
        className='absolute top-2350 left-0 w-full h-auto z-0 max-w-full max-h-1860 object-cover object-center'
      />
      <div 
        style={{top: height + "px"}}
        className={`absolute left-0 w-full h-auto z-0 max-w-full max-h-1860 object-cover object-center overflow-hidden`}
      >
        <img
          src={Mask3}
          alt="mask_3"
        />
      </div>
    </>
  )
};

