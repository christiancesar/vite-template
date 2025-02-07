import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { InputText } from './components/input-text';

export default function App() {
  // const [showName, setShowName] = useState('');
  const [listNames, setListNames] = useState<string[]>([]);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
    },
  });

  function handleSubmitCustomer(data: { name: string }) {
    const name = data.name;
    setListNames([...listNames, name]);
  }

  return (
    <div className="container mx-auto max-w-[900px] p-4">
      <h1 className="self-center text-center text-2xl">React Hook Form </h1>
      <div>
        <form onSubmit={handleSubmit(handleSubmitCustomer)}>
          <div className="flex flex-col gap-2">
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <InputText
                  placeholder="Informe seu nome completo "
                  {...field}
                />
              )}
            />

            <button
              type="submit"
              className="rounded-md bg-emerald-600 p-2 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div>
        <h2 className="mt-4 text-xl">Lista de nomes</h2>
        <table>
          <thead>
            <tr>
              <th className="text-start font-normal text-gray-500">Nomes</th>
            </tr>
          </thead>
          <tbody>
            {listNames.map((name, index) => (
              <tr key={index}>
                <td>{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
