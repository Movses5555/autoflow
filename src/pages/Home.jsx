import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Banner } from '@/components/Banner';
import { Features } from '@/components/Features';
import { TripTracking } from '@/components/TripTracking';
import { ChooseAutoflow } from '@/components/ChooseAutoflow';
import { EverythingOnePlace } from '@/components/EverythingOnePlace';
import { Pricing } from '@/components/Pricing';
import { FAQs } from '@/components/FAQs';
import { Spinner } from "@/components/Spinner";
import { fetchInitDataAsync } from "@/redux/clientReducer";


export const Home = () => {
  const { initData } = useSelector((state) => state.client);

  return (
    <div>
      <Banner />  
      <Features /> 
      <TripTracking /> 
      <ChooseAutoflow /> 
      <EverythingOnePlace />
      <Pricing />
      <FAQs />
    </div>
  )
};

