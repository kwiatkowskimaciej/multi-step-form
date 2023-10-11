import { useFormState } from '@/providers/FormContext';
import { StepsNavigation } from '../StepsNavigation';
import { AddOnCard } from '../add-ons/AddOnCard';
import Heading from '../Heading';

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
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 2,
  },
];

const heading = {
  title: 'Pick add-ons',
  subtitle: 'Add-ons help enhance your gaming experience.',
};

export function AddOns() {
  const { handleNext, monthly } = useFormState();

  const handleSubmit = () => {
    handleNext();
  };

  return (
    <>
      <Heading {...heading} />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          {addOns.map((addOne, index) => {
            return <AddOnCard key={index} {...addOne} monthly={monthly} />;
          })}
        </div>
        <StepsNavigation />
      </form>
    </>
  );
}
