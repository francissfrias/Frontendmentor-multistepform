import clsx from 'clsx';
import React from 'react';

interface ITextfield extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

const Textfield = ({ className, label, ...props }: ITextfield) => {
  return (
    <div className={(clsx(className), 'mb-4')}>
      <h1 className='mb-1 text-sm text-primaryMarineBlue font-medium'>
        {label}
      </h1>
      <input
        className='text-sm font-medium ring-1 ring-neutralLightGray rounded-md pt-2 pb-3 px-4  w-full caret-primaryPurplishBlue focus:outline-none focus:ring-1 focus:ring-primaryPurplishBlue'
        {...props}
      />
    </div>
  );
};

export default Textfield;
