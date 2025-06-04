import { Button } from "@mantine/core";
import {
  useClearRefinements,
  UseClearRefinementsProps,
} from "react-instantsearch";

export default function ClearRefinements(props: UseClearRefinementsProps) {
  const { refine, canRefine } = useClearRefinements(props);

  return (
    <Button disabled={!canRefine} onClick={refine}>
      Clear filters
    </Button>
  );
}
