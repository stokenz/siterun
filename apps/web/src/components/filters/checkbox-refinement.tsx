import {
  Button,
  Divider,
  Text,
  Stack,
  TextInput,
  Checkbox,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useRefinementList, UseRefinementListProps } from "react-instantsearch";
import Alert from "../alert";

interface Props {
  label: string;
  noDataLabel: string;
}

export default function CheckboxRefinementList(
  props: Props & UseRefinementListProps,
) {
  const {
    items,
    refine,
    searchForItems,
    canToggleShowMore,
    isShowingMore,
    toggleShowMore,
  } = useRefinementList(props);

  return (
    <Stack>
      <Divider
        label={<Text fw="bold">{props.label}</Text>}
        labelPosition="left"
      />

      {canToggleShowMore && (
        <TextInput
          leftSection={<IconSearch />}
          placeholder="Search..."
          type="search"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          maxLength={512}
          onChange={(event) => searchForItems(event.currentTarget.value)}
        />
      )}

      <Stack gap="xs">
        {items.map((item) => (
          <Checkbox
            key={item.label}
            checked={item.isRefined}
            onChange={() => refine(item.value)}
            label={`${item.label} (${item.count})`}
          />
        ))}

        {items.length === 0 && <Alert>{props.noDataLabel}</Alert>}
      </Stack>

      {canToggleShowMore && (
        <Button variant="subtle" onClick={toggleShowMore}>
          {isShowingMore ? "Show less" : "Show more"}
        </Button>
      )}
    </Stack>
  );
}
