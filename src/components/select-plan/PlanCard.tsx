import { Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  icon: string;
  selectedPlan: string;
  setSelectedPlan: Dispatch<SetStateAction<any>>;
  monthly: boolean;
}

export function PlanCard({
  name,
  monthlyPrice,
  yearlyPrice,
  icon,
  selectedPlan,
  setSelectedPlan,
  monthly,
}: Props) {
  const handleChange = () => {
    setSelectedPlan(name);
  };
  return (
    <label
      className={twMerge(
        'flex p-4 border border-light-gray rounded-lg gap-4',
        selectedPlan === name ? 'bg-alabaster border-purplish-blue' : null
      )}
    >
      <div>
        <div className="flex gap-4">
          <img src={icon} alt="Joystick" />
          <div>
            <span className="font-medium text-marine-blue">{name}</span>
            <p className="text-cool-gray text-sm">
              {monthly ? monthlyPrice : yearlyPrice}
            </p>
          </div>
        </div>
        {!monthly && (
          <p className="ml-14 text-sm text-marine-blue mt-0.5">2 months free</p>
        )}
      </div>
      <input
        className="sr-only"
        name="plan"
        type="radio"
        onChange={handleChange}
      />
    </label>
  );
}
