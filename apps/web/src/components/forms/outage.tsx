import {
  Textarea,
  Group,
  TextInput,
  Title,
  Badge,
  Grid,
  Stack,
} from "@mantine/core";
import { outageInputSchema, outageOutputSchema } from "@siterun/schema";
import Form, { FormProps } from "./form";
import { z } from "zod";
import DateTimeInput from "../datetime-input";
import Duration from "../duration";
import LocationSearch from "../location-search";

type FormSchema = z.infer<typeof outageInputSchema>;
type DefaultValueSchema = z.infer<typeof outageOutputSchema>;

export default function OutageForm<TData extends { id: string }, TVars>(
  props: FormProps<FormSchema, TData, TVars, DefaultValueSchema> & {
    title?: string;
    hasGrid?: boolean;
  },
) {
  return (
    <Form {...props} schema={outageInputSchema}>
      {({ register, control, formState, setValue, watch }) => {
        const status = watch("status");

        return (
          <Grid>
            <Grid.Col
              span={props.hasGrid ? { base: 12, md: 4 } : 0}
              hidden={!props.hasGrid}
            >
              <Title>Outage</Title>
            </Grid.Col>

            <Grid.Col span={props.hasGrid ? { base: 12, md: 8 } : 12}>
              <Stack>
                {props.title && (
                  <Group>
                    <Title order={3}>{props.title}</Title>

                    <Badge>{status}</Badge>
                  </Group>
                )}

                <Group>
                  <LocationSearch
                    label="Site"
                    includeSites
                    includeAddresses={false}
                    defaultQuery={props.defaultValues.site?.code ?? ""}
                    onSelect={(option) => setValue("siteId", option.siteId)}
                    onRemove={() => setValue("siteId", null)}
                    canRemove
                    error={formState.errors.siteId?.message}
                  />

                  <TextInput label="ICP" {...register("icp")} />
                </Group>

                <Group>
                  <DateTimeInput
                    label="Planned Start"
                    control={control}
                    name="plannedStart"
                  />

                  <DateTimeInput
                    label="Planned End"
                    control={control}
                    name="plannedEnd"
                  />

                  <Duration startName="plannedStart" endName="plannedEnd" />
                </Group>

                <Textarea label="Reason" {...register("reason")} rows={2} />
              </Stack>
            </Grid.Col>
          </Grid>
        );
      }}
    </Form>
  );
}
