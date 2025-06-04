import { Alert as AlertM } from "@mantine/core";
import {
  IconAlertHexagon,
  IconAlertTriangle,
  IconCheck,
  IconInfoCircle,
} from "@tabler/icons-react";

interface Props {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  children: React.ReactNode;
}

export default function Alert({ variant = "info", title, children }: Props) {
  switch (variant) {
    case "info":
      return (
        <AlertM
          color="blue"
          variant="light"
          icon={<IconInfoCircle />}
          title={title}
        >
          {children}
        </AlertM>
      );
    case "success":
      return (
        <AlertM
          color="green"
          variant="light"
          icon={<IconCheck />}
          title={title}
        >
          {children}
        </AlertM>
      );
    case "warning":
      return (
        <AlertM
          color="yellow"
          variant="light"
          icon={<IconAlertTriangle />}
          title={title}
        >
          {children}
        </AlertM>
      );
    case "error":
      return (
        <AlertM
          color="red"
          variant="light"
          icon={<IconAlertHexagon />}
          title={title}
        >
          {children}
        </AlertM>
      );
  }
}
