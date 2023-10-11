import { useFormState } from '@/providers/FormContext';
import { twMerge } from 'tailwind-merge';

export function StepsNavigation() {
  const { step, handleBack } = useFormState();
  return (
    <div
      className={twMerge(
        'fixed bg-white bottom-0 left-0 w-full h-20 p-4 flex items-center lg:absolute lg:rounded-xl',
        step > 1 ? 'justify-between' : 'justify-end'
      )}
    >
      {step != 1 && (
        <button
          className="h-10 text-cool-gray px-4 rounded-md hover:text-marine-blue"
          onClick={handleBack}
        >
          Go Back
        </button>
      )}
      <button
        type="submit"
        className={twMerge(
          'h-10 bg-marine-blue text-white px-4 rounded-md hover:bg-purplish-blue',
          step === 4 && 'bg-purplish-blue hover:bg-pastel-blue'
        )}
      >
        {step === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
}
