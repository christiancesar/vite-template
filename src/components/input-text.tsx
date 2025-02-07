type InputTextProps = {
  placeholder: string;
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function InputText({
  placeholder,
  error,
  label,
  ...props
}: InputTextProps) {
  return (
    <div className="flex flex-col gap-2" {...props}>
      <label>{label}</label>
      <input
        defaultValue={props.value}
        type="text"
        placeholder={placeholder}
        className="rounded-md border-2 border-emerald-600 p-2"
      />
      <span className="text-red-500">
        {/* Não sei porque mas simplmente chamar o erro que vem de
        `erros.name?.message` não funciona, acusa como um Objeto, passei o
        `message` como uma propriedade `error` do componente InputText e chamei
        esse `Object.entries` que estava na documentação do React Hook Form. */}
        {error &&
          Object.entries(error).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))}
      </span>
    </div>
  );
}
