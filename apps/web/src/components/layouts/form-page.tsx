import {
  Container,
  Stack,
  Breadcrumbs,
  Divider,
  Anchor,
  Flex,
  Group,
  Tabs,
} from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";
import { Link, LinkProps, useNavigate } from "@tanstack/react-router";

type Props = {
  title: string;
  breadcrumbs?: {
    label: string;
    to: LinkProps["to"];
    params?: LinkProps["params"];
  }[];
  tabs?: {
    label: string;
    to: LinkProps["to"];
    params?: LinkProps["params"];
  }[];
  fullWidthChildren?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  actions?: React.ReactNode;
};

export default function FormPage({
  breadcrumbs,
  tabs,
  children,
  fullWidthChildren,
  fullWidth,
  actions,
}: Props) {
  const navigate = useNavigate();

  return (
    <>
      <Container
        mt="xl"
        mb={fullWidthChildren ? "sm" : "xl"}
        size={fullWidth ? "fluid" : "xl"}
      >
        <Stack>
          <Group justify="space-between">
            <Breadcrumbs
              separatorMargin={2}
              separator={
                <Flex align="center">
                  <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    shapeRendering="geometricPrecision"
                    style={{ color: "lightgray" }}
                  >
                    <path d="M16.88 3.549L7.12 20.451" />
                  </svg>
                </Flex>
              }
            >
              {breadcrumbs?.map(({ label, to, params }) => (
                <Anchor fz="md" component={Link} to={to} params={params}>
                  {label}
                </Anchor>
              ))}
            </Breadcrumbs>

            <Group>{actions}</Group>
          </Group>

          {tabs && (
            <Tabs>
              <Tabs.List>
                {tabs.map(({ label, to, params }) => (
                  <Tabs.Tab
                    value={to ?? ""}
                    leftSection={<IconPhoto size={12} />}
                    onClick={() => {
                      navigate({ to, params });
                    }}
                  >
                    {label}
                  </Tabs.Tab>
                ))}
              </Tabs.List>
            </Tabs>
          )}

          {!fullWidthChildren && !tabs && <Divider />}

          {!fullWidthChildren && children}
        </Stack>
      </Container>

      {fullWidthChildren && children}
    </>
  );
}
