import { useFormState } from '@/providers/FormContext';
import Heading from '../Heading';
import { StepsNavigation } from '../StepsNavigation';
import SummaryAddOn from '../SummaryAddOn';

const calculateTotalPrice = (formData: any) => {
  const selectedAddOns = Object.keys(formData.addOns)
    .filter((addOnName) => formData.addOns[addOnName].selected)
    .map((addOnName) => formData.addOns[addOnName].price);

  const totalPrice =
    selectedAddOns.reduce((acc, price) => acc + price, 0) + formData.plan.price;

  return totalPrice;
};

const heading = {
  title: 'Finishing up',
  subtitle: 'Double-check everything looks OK before confirming.',
};

export function Summary() {
  const { formData, setFormData, handleBack, monthly } = useFormState();

  // useEffect(() => {
  //   if (!monthly) {
  //     const updatedPlan = { ...formData.plan, price: formData.plan.price * 10 };

  //     setFormData({
  //       ...formData,
  //       plan: updatedPlan,
  //     });
  //   }
  // }, [monthly]);

  return (
    <>
      <Heading {...heading} />
      <div className="bg-alabaster rounded-xl p-4 ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-semibold text-marine-blue">
              {formData.plan.name} ({monthly ? 'monthly' : 'yearly'})
            </span>
            <span
              className="underline text-sm text-cool-gray hover:text-purplish-blue cursor-pointer"
              onClick={() => {
                handleBack();
                handleBack();
              }}
            >
              Change
            </span>
          </div>
          <div className="font-semibold text-marine-blue">
            ${monthly ? formData.plan.price : formData.plan.price * 10}/
            {monthly ? 'mo' : 'yr'}
          </div>
        </div>
        <hr className="h-[1px] my-4 bg-light-gray border-0" />
        {Object.keys(formData.addOns).map((addOnName, index) => {
          const addOn = formData.addOns[addOnName];
          return addOn.selected ? (
            <SummaryAddOn
              key={index}
              name={addOnName}
              price={monthly ? addOn.price : addOn.price * 10}
              monthly={monthly}
            />
          ) : null;
        })}
        {calculateTotalPrice(formData) - formData.plan.price === 0 && (
          <div className="text-sm text-strawberry-red font-semibold">
            No add-ons picked
          </div>
        )}
      </div>
      <div className="p-4 pt-8 flex justify-between">
        <div className="text-cool-gray">
          Total (per {monthly ? 'month' : 'year'})
        </div>
        <div className="text-purplish-blue font-bold lg:text-xl">
          $
          {monthly
            ? calculateTotalPrice(formData)
            : calculateTotalPrice(formData) * 10}
          /{monthly ? 'mo' : 'yr'}
        </div>
      </div>
      <StepsNavigation />
    </>
  );
}
