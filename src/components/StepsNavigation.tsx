import { useFormState } from '@/providers/FormContext';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export function StepsNavigation() {
  const { step, handleBack } = useFormState();
  const router = useRouter();
  return (
    <div
      className={twMerge(
        'fixed bg-white bottom-0 left-0 w-full h-20 p-4 flex items-center lg:absolute lg:rounded-xl lg:p-0',
        step > 1 ? 'justify-between' : 'justify-end'
      )}
    >
      {step != 1 && (
        <button
          className="h-10 text-cool-gray px-4 rounded-md hover:text-marine-blue lg:px-0"
          onClick={handleBack}
        >
          Go Back
        </button>
      )}
      <button
        type="submit"
        className={twMerge(
          'h-10 bg-marine-blue text-white px-4 rounded-md hover:bg-purplish-blue lg:h-12 lg:px-8',
          step === 4 && 'bg-purplish-blue hover:bg-pastel-blue'
        )}
        onClick={() => {
          if (step === 4) {
            router.push('thank-you');
          }
        }}
      >
        {step === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
}
