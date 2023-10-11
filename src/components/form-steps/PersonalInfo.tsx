import { useFormState } from '@/providers/FormContext';
import { StepsNavigation } from '../StepsNavigation';
import Heading from '../Heading';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { twMerge } from 'tailwind-merge';

const heading = {
  title: 'Personal info',
  subtitle: 'Please provide your name, email address, and phone number.',
};

export function PersonalInfo() {
  const { formData, setFormData, handleNext } = useFormState();
  const phoneRegExp =
    /^(\+\d{1,4}[ \-]*)?(\(\d{2,3}\)[ \-]*)?(\d{2,4}[ \-]*)*?\d{3,4}[ \-]*\d{3,4}$/;

  const formik = useFormik({
    initialValues: {
      name: formData?.name,
      email: formData?.email,
      phone: formData?.phone,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('This field is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('This field is required'),
      phone: Yup.string()
        .matches(phoneRegExp, 'Invalid phone number')
        .required('This field is required'),
    }),
    onSubmit: (values) => {
      setFormData({
        ...formData,
        name: values.name,
        email: values.email,
        phone: values.phone,
      });
      handleNext();
    },
  });

  return (
    <>
      <Heading {...heading} />
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col">
          <div className="flex justify-between text-sm">
            <label className="text-marine-blue" htmlFor="name">
              Name
            </label>
            {formik.touched.name && formik.errors.name ? (
              <div className="text-strawberry-red font-semibold">
                {formik.errors.name as string}
              </div>
            ) : null}
          </div>
          <input
            className={twMerge(
              'h-10 border border-light-gray rounded-md pl-4 mb-4 focus:outline-purplish-blue focus:outline-1',
              formik.errors.name ? 'border-strawberry-red' : null
            )}
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <div className="flex justify-between text-sm">
            <label className="text-sm text-marine-blue" htmlFor="email">
              Email Address
            </label>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-strawberry-red font-semibold">
                {formik.errors.email as string}
              </div>
            ) : null}
          </div>
          <input
            className={twMerge(
              'h-10 border border-light-gray rounded-md pl-4 mb-4 focus:outline-purplish-blue focus:outline-1',
              formik.errors.email ? 'border-strawberry-red' : null
            )}
            type="email"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <div className="flex justify-between text-sm">
            <label className="text-sm text-marine-blue" htmlFor="phone">
              Phone Number
            </label>
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-strawberry-red font-semibold">
                {formik.errors.phone as string}
              </div>
            ) : null}
          </div>
          <input
            className={twMerge(
              'h-10 border border-light-gray rounded-md pl-4 mb-4 focus:outline-purplish-blue focus:outline-1',
              formik.errors.email ? 'border-strawberry-red' : null
            )}
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
        </div>
        <StepsNavigation />
      </form>
    </>
  );
}
