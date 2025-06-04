import {
  Grid,
  Stack,
  TextInput,
  Title,
  ColorInput,
  Textarea,
} from "@mantine/core";
import { tagInputSchema } from "@siterun/schema";
import Form, { FormProps } from "./form";
import { z } from "zod";

type FormSchema = z.infer<typeof tagInputSchema>;

export default function TagForm<TData extends { id: string }, TVars>(
  props: FormProps<FormSchema, TData, TVars>,
) {
  return (
    <Form {...props} schema={tagInputSchema}>
      {({ register, setValue, watch }) => {
        return (
          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Title>Tag</Title>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8 }}>
              <Stack>
                <TextInput label="Name" required {...register("name")} />

                <Textarea
                  label="Description"
                  {...register("description")}
                  rows={3}
                />

                <ColorInput
                  required
                  label="Color"
                  format="hex"
                  swatches={[
                    "#2e2e2e",
                    "#868e96",
                    "#fa5252",
                    "#e64980",
                    "#be4bdb",
                    "#7950f2",
                    "#4c6ef5",
                    "#228be6",
                    "#15aabf",
                    "#12b886",
                    "#40c057",
                    "#82c91e",
                    "#fab005",
                    "#fd7e14",
                  ]}
                  {...register("color")}
                  value={watch("color")}
                  onChange={(value) => setValue("color", value)}
                />
              </Stack>
            </Grid.Col>
          </Grid>
        );
      }}
    </Form>
  );
}
