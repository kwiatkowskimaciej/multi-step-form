'use client';

import { useFormState } from '@/providers/FormContext';
import { PersonalInfo } from './PersonalInfo';
import { SelectPlan } from './SelectPlan';
import { AddOns } from './AddOns';
import { Summary } from './Summary';

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
