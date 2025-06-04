import {
  Container,
  Stack,
  Group,
  Title,
  Button,
  Alert,
  Text,
  Anchor,
  ActionIcon,
} from "@mantine/core";
import Table from "~/components/table";
import {
  IconPlus,
  IconFileExport,
  IconFileImport,
  IconInfoCircle,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { DataTableColumn, DataTableProps } from "mantine-datatable";
import ActionMenu from "./action-menu";
import { modals } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import {
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { downloadFile } from "~/lib/file";
import { useMemo } from "react";

type Props<
  T extends { records: TRow[]; totalRecords: number },
  TRow,
  TExportData,
  TExportVars,
  TDeleteData,
  TDeleteVars,
> = {
  title: string;
  description: string | React.ReactNode;
  afterDescription?: React.ReactNode;
  createUrl: string;
  editUrl: (record: TRow) => string;
  columns: DataTableColumn<TRow>[];
  page: number;
  recordsPerPage: number;
  onPageChange: (page: number) => void;
  headerComponents?: React.ReactNode | React.ReactNode[];
  paginationQueryFn: <
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[],
  >(
    {
      page,
      recordsPerPage,
    }: {
      page: number;
      recordsPerPage: number;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<T, TError>, "queryKey" | "queryFn">,
  ) => UseQueryResult<T, TError>;
  exportMutationFn: <TError = unknown, TContext = unknown>(
    options?: Omit<
      UseMutationOptions<TExportData, TError, TExportVars, TContext>,
      "mutationFn"
    >,
  ) => UseMutationResult<TExportData, TError, TExportVars, TContext>;
  getExportVars: () => TExportVars;
  exportSuccessMessage: string;
  exportErrorMessage?: string;
  deleteMutationFn: <TError = unknown, TContext = unknown>(
    options?: Omit<
      UseMutationOptions<TDeleteData, TError, TDeleteVars, TContext>,
      "mutationFn"
    >,
  ) => UseMutationResult<TDeleteData, TError, TDeleteVars, TContext>;
  getDeleteVars: (record: TRow) => TDeleteVars;
  deleteSuccessMessage: string;
  deleteErrorMessage?: string;
  rowExpansion?: DataTableProps<TRow>["rowExpansion"];
  height?: string | number;
};

export default function ResourceTablePage<
  T extends { records: TRow[]; totalRecords: number },
  TRow,
  TExportData,
  TExportVars,
  TDeleteData,
  TDeleteVars,
>({
  title,
  description,
  afterDescription,
  createUrl,
  editUrl,
  columns,
  page,
  recordsPerPage,
  onPageChange,
  headerComponents,
  paginationQueryFn,
  exportMutationFn,
  deleteMutationFn,
  getExportVars,
  getDeleteVars,
  exportSuccessMessage,
  exportErrorMessage = "Please try again later",
  deleteSuccessMessage,
  deleteErrorMessage = "Please try again later",
  rowExpansion,
  height,
}: Props<T, TRow, TExportData, TExportVars, TDeleteData, TDeleteVars>) {
  const titleLower = title.toLowerCase();
  const titleSingularLower = title.slice(0, title.length - 1).toLowerCase();

  const recordsPaginationQuery = paginationQueryFn({
    page,
    recordsPerPage,
  });

  const exportMutation = exportMutationFn({
    onSuccess: (data) => {
      showNotification({
        title: "Success",
        message: exportSuccessMessage,
        color: "blue",
      });
      downloadFile(data as Blob, `${titleLower}.csv`);
    },
    onError: (error) => {
      console.error(error);
      showNotification({
        title: "Something went wrong",
        message: exportErrorMessage,
        color: "red",
      });
    },
  });

  const deleteMutation = deleteMutationFn({
    onSuccess: () => {
      recordsPaginationQuery.refetch();
      showNotification({
        title: "Success",
        message: deleteSuccessMessage,
        color: "blue",
      });
    },
    onError: () => {
      showNotification({
        title: "Something went wrong",
        message: deleteErrorMessage,
        color: "red",
      });
    },
  });

  const onExport = () => exportMutation.mutate(getExportVars());

  const openDeleteConfirmModal = (record: TRow) =>
    modals.openConfirmModal({
      title: `Delete ${titleSingularLower}`,
      children: (
        <Text size="sm">
          Are you sure you want to delete this {titleSingularLower}? This action
          cannot be undone.
        </Text>
      ),
      labels: { confirm: `Delete ${titleSingularLower}`, cancel: "Cancel" },
      confirmProps: { color: "red" },
      onCancel: () => {},
      onConfirm: () => deleteMutation.mutateAsync(getDeleteVars(record)),
    });

  const renderActions: DataTableColumn<TRow>["render"] = (record) => (
    <Group gap={4} wrap="nowrap">
      {editUrl && (
        <ActionIcon variant="transparent" component={Link} to={editUrl(record)}>
          <IconEdit />
        </ActionIcon>
      )}

      <ActionIcon
        color="red"
        variant="transparent"
        onClick={(e) => {
          e.stopPropagation();

          openDeleteConfirmModal(record);
        }}
      >
        <IconTrash />
      </ActionIcon>
    </Group>
  );

  const memoColumns = useMemo<DataTableColumn<TRow>[]>(
    () => [
      {
        ...columns[0],
        render: (record, index) => (
          <Anchor component={Link} to={editUrl(record)} underline="always">
            {columns[0].render?.(record, index)}
          </Anchor>
        ),
      },
      ...columns.slice(1),
      { accessor: "actions", render: renderActions },
    ],
    [columns],
  );

  return (
    <Container my="xl" size="xl">
      <Stack>
        <Group justify="space-between">
          <Title order={1}>{title}</Title>

          <Group>
            {headerComponents}

            <ActionMenu
              isPending={exportMutation.isPending}
              actions={[
                {
                  sectionHeader: "Export",
                  label: "Export to CSV",
                  icon: <IconFileExport size={14} />,
                  onClick: onExport,
                },
                {
                  sectionHeader: "Import",
                  label: "Import from CSV",
                  icon: <IconFileImport size={14} />,
                  onClick: () => alert("Not implemented"),
                },
              ]}
            />

            <Button
              leftSection={<IconPlus size={14} />}
              component={Link}
              to={createUrl}
            >
              Create {titleSingularLower}
            </Button>
          </Group>
        </Group>

        <Alert color="blue" icon={<IconInfoCircle />}>
          {description}
        </Alert>

        {afterDescription}

        <Table
          data={recordsPaginationQuery.data?.records || []}
          page={page}
          recordsPerPage={recordsPerPage}
          onPageChange={onPageChange}
          totalRecords={recordsPaginationQuery.data?.totalRecords ?? 0}
          isFetching={recordsPaginationQuery.isFetching}
          columns={memoColumns}
          rowExpansion={rowExpansion}
          height={height}
        />
      </Stack>
    </Container>
  );
}
