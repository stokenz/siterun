import {
  Group,
  TextInput,
  Grid,
  Title,
  Stack,
  MultiSelect,
  Divider,
  Button,
} from "@mantine/core";
import { siteInputSchema } from "@siterun/schema";
import Form, { FormProps } from "./form";
import { z } from "zod";
import { useTagsServiceFindManyTags } from "~/api/queries";
import { Fragment } from "react";
import { IconPlugConnected, IconPlus } from "@tabler/icons-react";

type FormSchema = z.infer<typeof siteInputSchema>;

export default function SiteForm<TData extends { id: string }, TVars>(
  props: FormProps<FormSchema, TData, TVars>,
) {
  const tagOptions = useTagsServiceFindManyTags({
    page: 1,
    recordsPerPage: 9999,
  }).data?.records.map((tag) => ({
    value: tag.id,
    label: tag.name,
  }));

  return (
    <Form {...props} schema={siteInputSchema}>
      {({ register, watch, setValue }) => (
        <Fragment>
          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Title>Site</Title>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8 }}>
              <Stack>
                <Group grow>
                  <TextInput label="Code" {...register("code")} />

                  <TextInput label="Name" {...register("name")} />
                </Group>

                <Group grow>
                  <TextInput label="Longitude" {...register("longitude")} />

                  <TextInput label="Latitude" {...register("latitude")} />
                </Group>

                <MultiSelect
                  label="Tags"
                  {...register("tags")}
                  data={tagOptions ?? []}
                  value={watch("tags")}
                  onChange={(val) => setValue("tags", val)}
                  searchable
                  clearable
                />
              </Stack>
            </Grid.Col>
          </Grid>

          <Divider my="md" />

          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Title>Notes</Title>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8 }}>
              <Stack>
                <Group grow>Display note list here</Group>
              </Stack>
            </Grid.Col>
          </Grid>

          <Divider my="md" />

          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Title>Devices</Title>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8 }}>
              <Stack>
                <Group grow>
                  <Button leftSection={<IconPlus size={14} />}>
                    Create New Device
                  </Button>

                  <Button
                    variant="light"
                    leftSection={<IconPlugConnected size={14} />}
                  >
                    Link Existing Device
                  </Button>
                </Group>

                <Group grow>Display device list here</Group>
              </Stack>
            </Grid.Col>
          </Grid>
        </Fragment>
      )}
    </Form>
  );
}
