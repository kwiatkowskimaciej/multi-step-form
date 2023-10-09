'use client';

import { useFormState } from '@/providers/FormContext';
import { PersonalInfo } from './form-steps/PersonalInfo';
import { SelectPlan } from './form-steps/SelectPlan';
import { AddOns } from './form-steps/AddOns';
import { Summary } from './form-steps/Summary';

export function ActiveStepForm() {
  const { step } = useFormState();
  switch (step) {
    case 1:
      return <PersonalInfo />;
    case 2:
      return <SelectPlan />;
    case 3:
      return <AddOns />;
    case 4:
      return <Summary />;
  }
}
