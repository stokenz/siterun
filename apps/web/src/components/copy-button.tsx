import {
  CopyButton as MCopyButton,
  Tooltip,
  ActionIcon,
  rem,
  Group,
  Text,
} from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";

interface Props {
  value: string | null;
}

/**
 * Renders the provided value and a button that copies the value to the clipboard.
 * @param { value }
 * @returns
 */
export default function CopyButton({ value }: Props) {
  return (
    <Group gap={5}>
      <Text size="sm">{value}</Text>
      <MCopyButton value={value ?? ""} timeout={2000}>
        {({ copied, copy }) => (
          <Tooltip
            label={copied ? "Copied" : "Copy"}
            withArrow
            position="right"
          >
            <ActionIcon
              color={copied ? "teal" : "gray"}
              variant="subtle"
              onClick={copy}
            >
              {copied ? (
                <IconCheck style={{ width: rem(16) }} />
              ) : (
                <IconCopy style={{ width: rem(16) }} />
              )}
            </ActionIcon>
          </Tooltip>
        )}
      </MCopyButton>
    </Group>
  );
}
