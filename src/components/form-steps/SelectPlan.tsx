'use client';

import { useFormState } from '@/providers/FormContext';
import { StepsNavigation } from '../StepsNavigation';
import { useEffect, useState } from 'react';
import { PlanCard } from '../select-plan/PlanCard';
import { PeriodicitySwitch } from '../select-plan/PeriodicitySwitch';
import Heading from '../Heading';

const plans = [
  {
    name: 'Arcade',
    price: 9,
    icon: 'plan-icons/icon-arcade.svg',
  },
  {
    name: 'Advanced',
    price: 12,
    icon: 'plan-icons/icon-advanced.svg',
  },
  {
    name: 'Pro',
    price: 15,
    icon: 'plan-icons/icon-pro.svg',
  },
];

const heading = {
  title: 'Select your plan',
  subtitle: 'You have the option of monthly or yearly billing.',
};

export function SelectPlan() {
  const { formData, setFormData, handleNext, monthly, setMonthly } =
    useFormState();
  const [selectedPlan, setSelectedPlan] = useState({
    name: 'Arcade',
    price: 9,
  });

  const handleSubmit = () => {
    setFormData({ ...formData, plan: selectedPlan });
    handleNext();
  };
  return (
    <>
      <Heading {...heading} />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          {plans.map((plan, index) => {
            return (
              <PlanCard
                key={index}
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
