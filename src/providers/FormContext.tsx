'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface IFormContext {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
  handleNext: () => void;
  handleBack: () => void;
  step: number;
  monthly: boolean;
  setMonthly: Dispatch<SetStateAction<any>>;
}

const FormContext = createContext<IFormContext>({
  formData: {},
  setFormData: () => {},
  handleNext: () => {},
  handleBack: () => {},
  step: 0,
  monthly: true,
  setMonthly: () => {},
});

export function FormProvider({ children }: { children: ReactNode }) {
  let [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: {
      name: '',
      price: null,
    },
    addOns: {
      'Online service': {
        selected: false,
        price: 1,
      },
      'Larger storage': {
        selected: false,
        price: 2,
      },
      'Customizable profile': {
        selected: false,
        price: 2,
      },
    },
  });
  let [step, setStep] = useState(1);
  let [monthly, setMonthly] = useState(true);

  function handleNext() {
    setStep((current) => current + 1);
  }

  function handleBack() {
    setStep((current) => current - 1);
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        step,
        handleNext,
        handleBack,
        monthly,
        setMonthly,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
