interface Props {
  title: String;
  subtitle: String;
}

export default function Heading({ title, subtitle }: Props) {
  return (
    <>
      <h1 className="font-bold text-2xl text-marine-blue">{title}</h1>
      <p className="text-cool-gray mt-2 mb-5">{subtitle}</p>
    </>
  );
}
