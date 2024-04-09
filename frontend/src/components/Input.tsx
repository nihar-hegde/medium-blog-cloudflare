import { ChangeEvent } from "react";

interface Props {
  lable: string;
  placeholder: string;
  type: string;
  custClassName?: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({
  lable,
  placeholder,
  onchange,
  type,
  custClassName,
}: Props) => {
  return (
    <div className={`${custClassName}`}>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {lable}
      </label>
      <input
        type={type}
        id="first_name"
        onChange={onchange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
};
