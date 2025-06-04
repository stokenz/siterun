import { Tooltip, rem, Text } from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";
import { Link, LinkProps } from "@tanstack/react-router";
import classes from "./navbar-link.module.css";

type NavbarLinkProps = {
  icon: typeof IconHome2;
  label: string;
  activeExact?: boolean;
} & Pick<LinkProps, "to" | "params">;

export default function NavbarLink({
  icon: Icon,
  label,
  activeExact,
  to,
  params,
}: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <Link
        aria-label={label}
        className={classes.link}
        activeOptions={{ exact: activeExact, includeSearch: false }}
        to={to}
        params={params}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        <Text hiddenFrom="sm">{label}</Text>
      </Link>
    </Tooltip>
  );
}
