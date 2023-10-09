import { useFormState } from '@/providers/FormContext';
import { StepsNavigation } from '../StepsNavigation';
import { AddOneCard } from '../add-ons/AddOnCard';

const addOns = [
  {
    name: 'Online service',
    description: 'Access to multiplayer games',
    price: 1,
  },
  {
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: 2,
  },
  {
    name: 'Customizable Profile',
    description: 'Custom theme on your profile',
    price: 2,
  },
];

export function AddOns() {
  const { formData, setFormData, handleNext, handleBack, monthly } =
    useFormState();
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
            return <AddOneCard {...addOne} monthly={monthly} />;
          })}
        </div>
        <StepsNavigation />
      </form>
    </>
  );
}
