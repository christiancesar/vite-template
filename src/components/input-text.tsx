import { formatPropertyName } from '@/utils/formatPropertyName';
import { FieldError } from 'react-hook-form';

type InputTextProps = {
  placeholder: string;
  label: string;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function InputText({
  placeholder,
  error,
  label,
  ...props
}: InputTextProps) {
  return (
    <div className="flex flex-col gap-2">
      <label>{formatPropertyName(label)}</label>
      <input
        defaultValue={props.value}
        type="text"
        placeholder={placeholder}
        className="rounded-md border-2 border-gray-300 p-2 focus:border-emerald-500 focus:outline-none"
        {...props}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
}
