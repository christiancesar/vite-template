import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { InputText } from './components/input-text';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const customerRegisterSchema = yup
  .object({
    name: yup
      .string()
      .min(10, {
        message: 'Nome deve ter no mínimo 10 caracteres',
      })
      .required(),
  })
  .required();

type CustomerRegister = yup.InferType<typeof customerRegisterSchema>;

export default function App() {
  const [listNames, setListNames] = useState<string[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(customerRegisterSchema),
    defaultValues: {
      name: '',
    },
  });

  function handleSubmitCustomer(data: CustomerRegister) {
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
            <span className="text-red-500">
              {JSON.stringify(errors.name?.message)}
            </span>
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
