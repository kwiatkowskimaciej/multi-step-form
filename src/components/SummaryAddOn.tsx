interface Props {
  name: string;
  price: number;
  monthly: boolean;
}

export default function SummaryAddOn({ name, price, monthly }: Props) {
  return (
    <div className="flex justify-between lg:my-2">
      <div className="text-cool-gray">{name}</div>
      <div className="text-marine-blue">
        +${monthly ? `${price}/mo` : `${price}/yr`}
      </div>
    </div>
  );
}
