import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { InputText } from './components/input-text';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Address } from './components/address';

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório',
  },
  string: {
    min: 'Deve ter no mínimo ${min} caracteres',
    email: 'Deve ser um email válido',
  },
});

const customerRegisterSchema = yup
  .object({
    customer: yup
      .object({
        firstName: yup.string().min(3).required(),
        lastName: yup.string().min(3).required(),
        phone: yup.string().min(11).required(),
        email: yup.string().email().required(),
      })
      .required(),
    address: yup
      .object({
        street: yup.string().required(),
        number: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zipCode: yup.string().required(),
      })
      .required(),
  })
  .required();

export type CustomerRegister = yup.InferType<typeof customerRegisterSchema>;

// const user: CustomerRegister = {
//   customer: {
//     firstName: 'Christian Cesar',
//     lastName: 'Doe',
//     phone: '11999999999',
//     email: 'john.doe@example.com',
//   },
//   address: {
//     street: 'Rua das Flores',
//     number: '123',
//     city: 'Rondonopolis',
//     state: 'MT',
//     zipCode: '78735000',
//   },
// };

export default function App() {
  const [listNames, setListNames] = useState<string[]>([]);

  const methods = useForm({
    resolver: yupResolver(customerRegisterSchema),
    defaultValues: {
      customer: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      },
      address: {
        street: '',
        number: '',
        city: '',
        state: '',
        zipCode: '',
      },
    },
  });

  const {
    control,
    formState: { errors },
  } = methods;

  function handleSubmitCustomer(data: CustomerRegister) {
    console.log(data);
    const fullName = `${data.customer.firstName} ${data.customer.lastName}`;
    setListNames([...listNames, fullName]);
  }

  return (
    <div className="container mx-auto max-w-[900px] p-4">
      <h1 className="self-center text-center text-2xl">React Hook Form </h1>
      <div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmitCustomer)}>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl">Personal Information</h2>
              <Controller
                control={control}
                name="customer.firstName"
                render={({ field }) => (
                  <InputText
                    label={field.name}
                    placeholder="Informe seu primeiro nome"
                    error={errors.customer?.firstName}
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name="customer.lastName"
                render={({ field }) => (
                  <InputText
                    label={field.name}
                    placeholder="Informe seu sobrenome"
                    error={errors.customer?.lastName}
                    {...field}
                  />
                )}
              />

              <Controller
                control={control}
                name="customer.phone"
                render={({ field }) => (
                  <InputText
                    label={field.name}
                    placeholder="Informe seu telefone"
                    error={errors.customer?.phone}
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name="customer.email"
                render={({ field }) => (
                  <InputText
                    label={field.name}
                    placeholder="Informe seu email"
                    error={errors.customer?.email}
                    {...field}
                  />
                )}
              />

              <Address />
              <button
                type="submit"
                className="cursor-pointer rounded-md bg-emerald-600 p-2 text-white hover:bg-emerald-700"
              >
                Submit
              </button>
            </div>
          </form>
        </FormProvider>
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
