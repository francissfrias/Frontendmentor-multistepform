'use client';
import React, { useState } from 'react';
import bgMobile from '@/public/assets/images/bg-sidebar-mobile.svg';
import Image from 'next/image';
import { stepsItems } from '@/utils/utils';
import Textfield from '@/components/Textfield';
import Steps from '@/components/Steps';

const Home = () => {
  const [steps, setSteps] = useState<number>(0);
  return (
    <div className='h-screen relative flex flex-col justify-start items-center bg-neutralMagnolia'>
      <Image
        src={bgMobile}
        alt='mobile background'
        className='absolute z-0 top-0 w-full md:hidden'
      />
      <div className='z-10 md:hidden flex flex-row gap-4 my-8 mb-[1.85rem]'>
        {stepsItems.map((_, i) => {
          return (
            <>
              <Steps step={i + 1} active={i === steps} key={i} />
            </>
          );
        })}
        {/* <button onClick={() => setSteps((step) => step + 1)}>next step</button>
        <button onClick={() => setSteps((step) => step - 1)}>df
          previous step
        </button> */}
      </div>
      <div className='z-10 p-6  bg-white h-[60dvh] w-[90%] rounded-md shadow-md'>
        <h1 className='text-primaryMarineBlue font-bold text-2xl mb-2'>
          {stepsItems[steps].formTitle}
        </h1>
        <h3 className='text-neutralCoolGray mb-4'>
          {stepsItems[steps].formDescription}
        </h3>
        {steps === 0 && (
          <>
            <Textfield label='Name' placeholder='e.g. Stephen King' />
            <Textfield
              label='Email Address'
              placeholder='e.g. stephenking@lorem.com'
            />
            <Textfield label='Phone Number' placeholder='e.g. +1 234 567 890' />
          </>
        )}
        {steps === 1 && (
          <>
            <Textfield label='Name' placeholder='e.g. Stephen King' />
            <Textfield
              label='Email Address'
              placeholder='e.g. stephenking@lorem.com'
            />
            <Textfield label='Phone Number' placeholder='e.g. +1 234 567 890' />
          </>
        )}
      </div>
      <div className='absolute bottom-0 w-full bg-white p-4'>
        <button
          className='ml-auto block  bg-primaryMarineBlue text-white px-3 py-2 rounded-md shadow-md'
          onClick={() => setSteps((step) => step + 1)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Home;
