'use client';

import { useFormState } from '@/providers/FormContext';
import { twMerge } from 'tailwind-merge';

const steps = ['Your info', 'Select plan', 'Add-Ons', 'Summary'];

export function Sidebar() {
  const { step } = useFormState();
  return (
    <div className="my-8 w-full flex justify-center gap-4 lg:flex-col lg:absolute lg:z-10 lg:my-14 lg:ml-14 lg:gap-8 lg:w-auto">
      {steps.map((stepName, index) => {
        return (
          <div className="lg:flex lg:gap-4 lg:items-center">
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
            <div>
              <div className="hidden lg:block uppercase text-cool-gray text-sm">
                Step {index + 1}
              </div>
              <div className="hidden lg:block uppercase text-white font-medium">
                {stepName}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
