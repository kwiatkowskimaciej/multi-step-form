'use client';

import { useFormState } from '@/providers/FormContext';
import { StepsNavigation } from '../StepsNavigation';
import { useState } from 'react';
import { PlanCard } from '../select-plan/PlanCard';
import { PeriodicitySwitch } from '../select-plan/PeriodicitySwitch';

const plans = [
  {
    name: 'Arcade',
    monthlyPrice: '$9/mo',
    yearlyPrice: '$90/yr',
    icon: 'plan-icons/icon-arcade.svg',
  },
  {
    name: 'Advanced',
    monthlyPrice: '$12/mo',
    yearlyPrice: '$120/yr',
    icon: 'plan-icons/icon-advanced.svg',
  },
  {
    name: 'Pro',
    monthlyPrice: '$15/mo',
    yearlyPrice: '$150/yr',
    icon: 'plan-icons/icon-pro.svg',
  },
];

export function SelectPlan() {
  const { formData, setFormData, handleNext, handleBack } = useFormState();
  const [selectedPlan, setSelectedPlan] = useState('Arcade');
  const [monthly, setMonthly] = useState(true);

  const handleSubmit = () => {
    handleNext();
  };
  return (
    <>
      <h1 className="font-bold text-2xl text-marine-blue">Select your plan</h1>
      <p className="text-cool-gray mt-2 mb-5">
        You have the option of monthly or yearly billing.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          {plans.map((plan, index) => {
            return (
              <PlanCard
                {...plan}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                monthly={monthly}
              />
            );
          })}
        </div>
        <PeriodicitySwitch toggle={monthly} setToggle={setMonthly} />
        <StepsNavigation />
      </form>
    </>
  );
}
