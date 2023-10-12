import { Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<any>>;
}

export function PeriodicitySwitch({ toggle, setToggle }: Props) {
  const toggleClass = 'transform translate-x-5';
  return (
    <div className="flex justify-center items-center h-12 w-full bg-alabaster rounded-md gap-4 mt-6 font-medium">
      <span className={toggle ? 'text-marine-blue' : 'text-cool-gray'}>
        Monthly
      </span>
      <div
        className="w-10 h-5 flex items-center bg-marine-blue rounded-full p-1 cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div
          className={twMerge(
            'bg-white h-3 w-3 rounded-full shadow-md transform duration-300 ease-in-out',
            toggle ? null : toggleClass
          )}
        ></div>
      </div>
      <span className={!toggle ? 'text-marine-blue' : 'text-cool-gray'}>
        Yearly
      </span>
    </div>
  );
}
