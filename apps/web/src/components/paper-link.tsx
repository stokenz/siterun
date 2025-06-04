import { Paper } from "@mantine/core";
import { Link, type LinkProps } from "@tanstack/react-router";
import styles from "./paper-link.module.css";

type Props = {
  to: LinkProps["to"];
  children: React.ReactNode;
};

export default function PaperLink({ to, children }: Props) {
  return (
    <Paper
      withBorder
      p="md"
      radius="md"
      component={Link}
      to={to}
      className={styles.paper}
    >
      <div className={styles.paperChild}>{children}</div>
    </Paper>
  );
}
