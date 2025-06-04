import { DateTimePicker } from "@mantine/dates";
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";

export default function DateTimeInput<T extends FieldValues>({
  label,
  control,
  name,
}: {
  label: string;
  control: Control<T>;
  name: FieldPath<T>;
}) {
  const { field, fieldState } = useController<T>({
    name,
    control,
  });

  const value = typeof field.value === "string" ? new Date(field.value) : null;

  return (
    <DateTimePicker
      label={label}
      value={value}
      onChange={(value) => field.onChange(value?.toISOString())}
      error={fieldState.error?.message}
    />
  );
}
