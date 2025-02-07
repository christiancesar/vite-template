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
      <label>{label}</label>
      <input
        defaultValue={props.value}
        type="text"
        placeholder={placeholder}
        className="rounded-md border-2 border-emerald-600 p-2"
        {...props}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
}
