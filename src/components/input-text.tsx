type InputTextProps = {
  placeholder: string;
} & React.HTMLAttributes<HTMLInputElement>;

export function InputText({ placeholder, ...props }: InputTextProps) {
  return (
    <div className="flex flex-col gap-2" {...props}>
      <label>Nome</label>
      <input
        type="text"
        placeholder={placeholder}
        className="rounded-md border-2 border-emerald-600 p-2"
      />
    </div>
  );
}
