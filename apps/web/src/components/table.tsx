import { DataTable, DataTableColumn, DataTableProps } from "mantine-datatable";

type Props<T> = {
  data?: T[];
  totalRecords?: number;
  page: number;
  recordsPerPage: number;
  onPageChange: (page: number) => void;
  columns: DataTableColumn<T>[];
  isFetching: boolean;
  rowExpansion?: DataTableProps<T>["rowExpansion"];
  onRowClick?: DataTableProps<T>["onRowClick"];
  actions?: DataTableColumn<T>["render"];
  withTableBorder?: boolean;
  minHeight?: string | number;
  height?: string | number;
  maxHeight?: string | number;
};

export default function Table<T>({
  data,
  columns,
  isFetching,
  onRowClick,
  rowExpansion,
  withTableBorder = true,
  minHeight = 200,
  height = "calc(100vh - 200px)",
  maxHeight = 1000,
  page,
  recordsPerPage,
  onPageChange,
  totalRecords,
}: Props<T>) {
  return (
    <DataTable
      withTableBorder={withTableBorder}
      highlightOnHover
      verticalAlign="top"
      minHeight={minHeight}
      height={height}
      maxHeight={maxHeight}
      columns={columns}
      records={data}
      fetching={isFetching}
      onRowClick={onRowClick}
      page={page}
      recordsPerPage={recordsPerPage}
      onPageChange={onPageChange}
      totalRecords={totalRecords}
      rowExpansion={rowExpansion}
    />
  );
}
