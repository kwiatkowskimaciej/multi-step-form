import { useFormState } from '@/providers/FormContext';
import { StepsNavigation } from '../StepsNavigation';
import { AddOneCard } from '../add-ons/AddOneCard';

const addOns = [
  {
    name: 'Online service',
    description: 'Access to multiplayer games',
    monthly: '+$1/mo',
    yearly: '+$10/yr',
  },
  {
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monthly: '+$2/mo',
    yearly: '+$20/yr',
  },
  {
    name: 'Customizable Profile',
    description: 'Custom theme on your profile',
    monthly: '+$2/mo',
    yearly: '+$20/yr',
  },
];

export function AddOns() {
  const { formData, setFormData, handleNext, handleBack } = useFormState();
  const handleSubmit = () => {
    handleNext();
  };
  return (
    <>
      <h1 className="font-bold text-2xl text-marine-blue">Pick add-ons</h1>
      <p className="text-cool-gray mt-2 mb-5">
        Add-ons help enhance your gaming experience.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          {addOns.map((addOne, index) => {
            return <AddOneCard {...addOne} />;
          })}
        </div>
        <StepsNavigation />
      </form>
    </>
  );
}
