import { useFormState } from '@/providers/FormContext';

export function PersonalInfo() {
  const { formData, setFormData, handleNext, handleBack } = useFormState();

  const handleSubmit = () => {
    handleNext();
  };
  return (
    <>
      <h1 className="font-bold text-2xl text-marine-blue">Personal info</h1>
      <p className="text-cool-gray mb-4">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-sm text-marine-blue" htmlFor="name">
            Name
          </label>
          <input
            className="h-10 border border-light-gray rounded-md pl-4 mb-4"
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
          />
          <label className="text-sm text-marine-blue" htmlFor="email">
            Email Address
          </label>
          <input
            className="h-10 border border-light-gray rounded-md pl-4 mb-4"
            type="email"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
          />
          <label className="text-sm text-marine-blue" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="h-10 border border-light-gray rounded-md pl-4 mb-4"
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
        <div
          className="fixed bg-white bottom-0 left-0 w-full h-20 p-4 flex justify-end items-center
        "
        >
          <button className="h-10 bg-marine-blue text-white px-4 rounded-md">
            Next Step
          </button>
        </div>
      </form>
    </>
  );
}
