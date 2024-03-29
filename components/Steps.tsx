import React from 'react';
import clsx from 'clsx';

interface ISteps {
  active: boolean;
  step: number;
  className?: string;
  isDesktopSize?: boolean;
  title?: string;
  description?: string;
}

const Steps = ({
  active,
  step,
  className,
  isDesktopSize,
  description,
  title,
}: ISteps) => {
  return (
    <div
      className={clsx(
        'm-0 p-1 rounded-full  h-9 w-9 flex justify-center font-bold text-md ',
        className,
        active && 'bg-primaryPastelBlue text-primaryMarineBlue ',
        !active && 'bg-transparent  text-white ring-1 ring-white'
      )}
    >
      {step}
      {isDesktopSize && (
        <>
          <h1>{title}</h1>
          <p>{description}</p>
        </>
      )}
    </div>
  );
};

export default Steps;
