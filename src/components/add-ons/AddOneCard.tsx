interface Props {
  name: string;
  description: string;
  monthly: string;
  yearly: string;
}

export function AddOneCard({ name, description, monthly, yearly }: Props) {
  return (
    <div>
      <label className="flex p-4 border border-light-gray rounded-lg gap-4">
        <input type="checkbox" />
        <div className="w-full flex items-center justify-between">
          <div>
            <div className="font-medium text-marine-blue">{name}</div>
            <div className="text-xs text-cool-gray">{description}</div>
          </div>
          <div className="text-sm text-purplish-blue">{monthly}</div>
        </div>
      </label>
    </div>
  );
}
