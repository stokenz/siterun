import { Checkbox, Group, TextInput } from "@mantine/core";
import LocationSearch from "~/components/location-search";
import { userInputSchema } from "@siterun/schema";
import Form, { FormProps } from "./form";
import { z } from "zod";

type FormSchema = z.infer<typeof userInputSchema>;

export default function UserForm<TData extends { id: string }, TVars>(
  props: FormProps<FormSchema, TData, TVars>,
) {
  return (
    <Form {...props} schema={userInputSchema}>
      {({ register, formState, setValue, watch }) => (
        <>
          <Group grow>
            <TextInput
              maw={200}
              label="First Name"
              {...register("firstName")}
            />

            <TextInput maw={200} label="Last Name" {...register("lastName")} />
          </Group>

          <TextInput maw={300} label="Email" {...register("email")} />

          <TextInput maw={300} label="Phone" {...register("phone")} />

          <LocationSearch
            label="Address"
            includeSites={false}
            onSelect={(addressResult) => {
              setValue("address", addressResult.label);
              setValue("addressLat", addressResult.latitude);
              setValue("addressLng", addressResult.longitude);
            }}
            defaultQuery={watch("address")}
            onRemove={() => {
              setValue("address", "");
              setValue("addressLat", 0);
              setValue("addressLng", 0);
            }}
            canRemove
            error={formState.errors.address?.message}
          />

          <Checkbox label="Active" {...register("active")}>
            Active
          </Checkbox>
        </>
      )}
    </Form>
  );
}
