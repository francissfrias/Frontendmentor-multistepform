import React from 'react';

interface IPlanButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  value: number;
  billingOption: 'monthly' | 'yearly';
}

const PlanButton = ({ label, value, billingOption, ...props }: IPlanButton) => {
  return (
    <>
      <button className='' {...props}>
        <>
          <h1>{label}</h1>
          <p>{`$${value}/${billingOption === 'monthly' ? 'mo' : 'yr'}`}</p>
        </>
      </button>
    </>
  );
};

export default PlanButton;
