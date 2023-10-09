import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  name: string;
  description: string;
  price: number;
  monthly: boolean;
}

export function AddOneCard({ name, description, price, monthly }: Props) {
  let [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <label
        className={twMerge(
          'flex items-center p-4 border border-light-gray rounded-lg gap-4 add-on-label',
          checked ? 'border-purplish-blue bg-alabaster' : null
        )}
      >
        <input
          type="checkbox"
          className="relative appearance-none w-5 h-5 border border-light-gray border-blue-500 rounded-sm bg-white
          mt-1 shrink-0 checked:bg-purplish-blue checked:border-0"
          onChange={handleChange}
        />
        <span className="text-white material-symbols-outlined absolute w-5 h-5 -ml-0.5">
          check_small
        </span>
        <div className="w-full flex items-center justify-between">
          <div>
            <div className="font-medium text-marine-blue">{name}</div>
            <div className="text-xs text-cool-gray">{description}</div>
          </div>
          <div className="text-sm text-purplish-blue">
            {monthly ? `+$${price}/mo` : `+$${price * 10}/yr`}
          </div>
        </div>
      </label>
    </div>
  );
}
