import { Text, Input } from "@mantine/core";
import dayjs from "dayjs";
import { FieldPath, useWatch, FieldValues } from "react-hook-form";

export function getDurationText(start: string, end: string): string {
  const startDate = dayjs(start);
  const endDate = dayjs(end);

  const isValid =
    startDate.isValid() && endDate.isValid() && endDate.isAfter(startDate);

  if (!isValid) {
    return "Invalid";
  }

  const days = endDate.diff(startDate, "days");
  const hours = endDate.diff(startDate, "hours") % 24;
  const minutes = endDate.diff(startDate, "minutes") % 60;

  return `${days > 1 ? `${days} days ` : ""}${
    days === 1 ? `${days} day ` : ""
  }${hours > 1 ? `${hours} hours ` : ""}${
    hours === 1 ? `${hours} hour ` : ""
  }${minutes > 1 ? `${minutes} minutes` : ""}${
    minutes === 1 ? `${minutes} minute` : ""
  }`;
}

export default function Duration<T extends FieldValues>({
  startName,
  endName,
}: {
  startName: FieldPath<T>;
  endName: FieldPath<T>;
}) {
  const start = useWatch({ name: startName });
  const end = useWatch({ name: endName });

  const duration = getDurationText(start, end);

  if (duration === "Invalid") {
    return (
      <Input.Wrapper label="Duration">
        <Text size="sm" fw="bold" my={8}>
          Invalid
        </Text>
      </Input.Wrapper>
    );
  }

  return (
    <Input.Wrapper label="Duration">
      <Text size="sm" fw="bold" my={8}>
        {duration}
      </Text>
    </Input.Wrapper>
  );
}
