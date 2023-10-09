'use client';

import { useFormState } from '@/providers/FormContext';
import { twMerge } from 'tailwind-merge';

const steps = ['Personal info', 'Select plan', 'AddOns', 'Summary'];

export function Sidebar() {
  const { step } = useFormState();
  return (
    <div className="my-8 w-full flex justify-center gap-4">
      {steps.map((stepName, index) => {
        return (
          <div
            key={stepName}
            className={twMerge(
              'w-8 h-8 border border-white rounded-full flex justify-center items-center text-white',
              step === index + 1
                ? 'bg-light-blue text-purplish-blue border-light-blue'
                : null
            )}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
}
