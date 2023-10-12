interface Props {
  title: String;
  subtitle: String;
}

export default function Heading({ title, subtitle }: Props) {
  return (
    <div className="lg:mt-8 lg:mb-12">
      <h1 className="font-bold text-2xl text-marine-blue lg:text-3xl ">
        {title}
      </h1>
      <p className="text-cool-gray mt-2 mb-5">{subtitle}</p>
    </div>
  );
}
