import {
  Checkbox,
  Flex,
  Grid,
  Stack,
  Title,
  Text,
  Group,
  Divider,
} from "@mantine/core";
import { deviceInputSchema } from "@siterun/schema";
import Form, { FormProps } from "./form";
import { z } from "zod";
import SearchBox from "../search/site-search";
import { IconCellSignal5 } from "@tabler/icons-react";
import { Fragment } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { Select, TextInput, PasswordInput } from "react-hook-form-mantine";

type FormSchema = z.infer<typeof deviceInputSchema>;

export default function DeviceForm<TData extends { id: string }, TVars>(
  props: FormProps<FormSchema, TData, TVars>,
) {
  return (
    <Form {...props} schema={deviceInputSchema}>
      {({ control, setValue, formState }) => (
        <Fragment>
          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Title>Identity</Title>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8 }}>
              <Stack>
                <Group grow>
                  <TextInput
                    label="Name"
                    required
                    control={control}
                    name="name"
                  />

                  <SearchBox
                    label="Site"
                    renderOptionLabel={({ code, name }) => (
                      <Flex gap="md" align="center">
                        <div>
                          <IconCellSignal5 />
                        </div>
                        <div>
                          <Text fz="sm" fw="bold">
                            {code}
                          </Text>
                          <Text fz="xs" opacity={0.6}>
                            {name}
                          </Text>
                        </div>
                      </Flex>
                    )}
                    onSelect={({ id }) => {
                      setValue("siteId", id);
                    }}
                    showSearchIcon={false}
                    error={formState.errors.siteId?.message}
                  />
                </Group>

                {/* <Group grow>
                  <Select
                    label="Device Type"
                    required
                    data={["Eaton SC300"]}
                    control={control}
                    name="deviceType"
                  />
                </Group> */}
              </Stack>
            </Grid.Col>
          </Grid>

          <Divider my="md" />

          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Title>Connectivity</Title>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8 }}>
              <DeviceConnectivityForm />
            </Grid.Col>
          </Grid>
        </Fragment>
      )}
    </Form>
  );
}

function DeviceConnectivityForm() {
  const { register, control } = useFormContext<FormSchema>();
  const { protocol } = useWatch<FormSchema>();

  return (
    <Stack>
      <Group grow>
        <Select
          label="Protocol"
          required
          data={["SNMP_V1", "SNMP_V2C", "SNMP_V3", "MQTT_V5"]}
          control={control}
          name="protocol"
        />
        <TextInput label="IP Address" {...register("ipAddress")} />
        <TextInput label="Port" {...register("port")} />
      </Group>

      {/* <Group grow>
        <Select label="Collector" required data={["FTC 1"]} />
      </Group> */}

      {(protocol === "SNMP_V1" ||
        protocol === "SNMP_V2C" ||
        protocol === "SNMP_V3") && (
        <Group grow>
          <TextInput
            label="SNMP Read Community"
            required
            control={control}
            name="username"
          />
          <PasswordInput
            label="SNMP Write Community"
            required
            control={control}
            name="password"
          />
        </Group>
      )}

      {protocol === "MQTT_V5" && (
        <Group grow>
          <TextInput
            label="MQTT Username"
            required
            control={control}
            name="username"
          />
          <PasswordInput
            label="MQTT Password"
            required
            control={control}
            name="password"
          />
        </Group>
      )}

      <Checkbox label="Active" {...register("active")}>
        Active
      </Checkbox>
    </Stack>
  );
}
