import { Controller, useFormContext } from 'react-hook-form';
import { InputText } from './input-text';
import { CustomerRegister } from '@/App';

export function Address() {
  const {
    control,
    formState: { errors },
  } = useFormContext<CustomerRegister>();
  return (
    <>
      <h2 className="mt-4 text-xl">Address</h2>

      <Controller
        control={control}
        name="address.street"
        render={({ field }) => (
          <InputText
            label={field.name}
            placeholder="Informe sua rua"
            error={errors.address?.street}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address.number"
        render={({ field }) => (
          <InputText
            label={field.name}
            placeholder="Informe o número"
            error={errors.address?.number}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address.city"
        render={({ field }) => (
          <InputText
            label={field.name}
            placeholder="Informe sua cidade"
            error={errors.address?.city}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address.state"
        render={({ field }) => (
          <InputText
            label={field.name}
            placeholder="Informe seu estado"
            error={errors.address?.state}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address.zipCode"
        render={({ field }) => (
          <InputText
            label={field.name}
            placeholder="Informe seu CEP"
            error={errors.address?.zipCode}
            {...field}
          />
        )}
      />
    </>
  );
}
