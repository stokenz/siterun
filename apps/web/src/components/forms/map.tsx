import { TextInput } from "@mantine/core";
import { mapInputSchema } from "@siterun/schema";
import Form, { FormProps } from "./form";
import { z } from "zod";

type FormSchema = z.infer<typeof mapInputSchema>;

export default function MapForm<TData extends { id: string }, TVars>(
  props: FormProps<FormSchema, TData, TVars>,
) {
  return (
    <Form {...props} schema={mapInputSchema}>
      {({ register }) => (
        <>
          <TextInput maw={300} label="Name" {...register("name")} />

          <TextInput label="Light Style" {...register("styleLight")} />

          <TextInput label="Dark Style" {...register("styleDark")} />
        </>
      )}
    </Form>
  );
}
