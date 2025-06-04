import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  rem,
  Tooltip,
  Text,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./theme-toggle.module.css";
import linkClasses from "./navbar-link.module.css";

export default function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Tooltip
      label="Toggle theme"
      position="right"
      transitionProps={{ duration: 0 }}
    >
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="subtle"
        aria-label="Toggle theme"
        className={linkClasses.link}
        w="100%"
      >
        <IconSun
          className={cx(classes.icon, classes.light)}
          stroke={1.5}
          style={{ width: rem(20), height: rem(20) }}
        />
        <IconMoon
          className={cx(classes.icon, classes.dark)}
          stroke={1.5}
          style={{ width: rem(20), height: rem(20) }}
        />
        <Text ml="xs" hiddenFrom="sm">
          Toggle theme
        </Text>
      </ActionIcon>
    </Tooltip>
  );
}
