type IStepItems = {
  title: string;
  description: string;
  formTitle: string;
  formDescription: string;
};

export const stepsItems: IStepItems[] = [
  {
    title: 'Step 1',
    description: 'YOUR INFO',
    formTitle: 'Personal info',
    formDescription: `Please provide your name, email
      address, and phone number.`,
  },
  {
    title: 'Step 2',
    description: 'SELECT PLAN',
    formTitle: 'Select your plan',
    formDescription: `You have the option of monthly or
    yearly billing.`,
  },
  {
    title: 'Step 3',
    description: 'ADD-ONS',
    formTitle: 'Pick add-ons',
    formDescription: `Add-ons help enhance your gaming
    experience.`,
  },
  {
    title: 'Step 4',
    description: 'SUMMARY',
    formTitle: 'Finishing up',
    formDescription: `Double-check everthing looks OK before confirming.`,
  },
];
