import { AppShell, Center, ScrollArea, Flex, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import LogoIcon from "~/assets/logo-icon.svg";
import LogoIconDark from "~/assets/logo-icon-dark.svg";
import classes from "~/components/layout.module.css";
import { Link } from "@tanstack/react-router";

const NAVBAR_WIDTH = 85;

interface Props {
  topLinks: React.ReactNode;
  bottomLinks: React.ReactNode;
  children: React.ReactNode;
}

export default function MainLayout({ topLinks, bottomLinks, children }: Props) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();

  return (
    <AppShell
      navbar={{
        width: NAVBAR_WIDTH,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened },
      }}
      padding="md"
    >
      <AppShell.Navbar
        p="md"
        style={{
          zIndex: 250,
          boxShadow:
            "0 1px 2px rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15)",
        }}
      >
        <AppShell.Section>
          <Center>
            <Link to="/maps/default">
              <img
                className={classes.light}
                src={LogoIcon}
                width={35}
                height={32}
                loading="lazy"
                alt="SiteRun logo"
              />
              <img
                className={classes.dark}
                src={LogoIconDark}
                width={35}
                height={32}
                loading="lazy"
                alt="SiteRun logo"
              />
            </Link>
          </Center>
        </AppShell.Section>

        <AppShell.Section grow my="md" component={ScrollArea}>
          {topLinks}
        </AppShell.Section>

        <AppShell.Section>{bottomLinks}</AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main
        p={0}
        className={classes.shell}
        style={{ paddingInlineStart: 0 }}
      >
        <Flex pl={{ base: 0, xs: 0, sm: NAVBAR_WIDTH }}>
          <Burger
            style={{ position: "absolute", top: 15, right: 15, zIndex: 1000 }}
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="md"
          />

          <div style={{ width: "100%" }}>{children}</div>
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
}
