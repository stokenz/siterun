import { useEffect, useState } from "react";
import {
  CloseButton,
  Combobox,
  Group,
  InputBase,
  Loader,
  Text,
  useCombobox,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import * as React from "react";
import { useUsersServiceSearchUsers } from "~/api/queries";
import { UserOutputDto } from "~/api/requests";

const defaultRenderOptionLabel = (user: UserOutputDto) => {
  return `${user.firstName} ${user.lastName}`;
};

export type SearchBoxProps = {
  label?: string;
  onSelect: (item: UserOutputDto) => void;
  renderOptionLabel?: (user: UserOutputDto) => React.ReactNode;
  defaultQuery?: string;
  actionFn?: () => void;
  actionFnLabel?: string | React.ReactNode;
  baseProps?: React.ComponentProps<typeof InputBase>;
  onClear?: () => void;
  showSearchIcon?: boolean;
  error?: string;
};

/**
 * Search box for users.
 */
export default function UserSearchBox({
  label,
  onSelect,
  renderOptionLabel,
  defaultQuery,
  actionFn,
  actionFnLabel,
  baseProps,
  onClear,
  showSearchIcon = true,
  error,
}: SearchBoxProps) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const [inputValue, setInputValue] = useState(defaultQuery ?? "");

  const userResults = useUsersServiceSearchUsers({
    q: inputValue,
  });

  useEffect(() => {
    if (defaultQuery) {
      setInputValue(defaultQuery);
    }
  }, [defaultQuery]);

  return (
    <Combobox
      onOptionSubmit={(optionId) => {
        console.log("optionId", optionId);
        if (optionId === "$create" && actionFn) {
          combobox.closeDropdown();
          actionFn();
          return;
        }

        const userOption = userResults.data?.find((o) => o.id === optionId);
        if (userOption) {
          onSelect(userOption);
          setInputValue(defaultRenderOptionLabel(userOption));
          combobox.closeDropdown();
          return;
        }
      }}
      withinPortal={false}
      store={combobox}
    >
      <Combobox.Target>
        <InputBase
          {...baseProps}
          label={label}
          rightSectionWidth={showSearchIcon ? 100 : 50}
          // rightSectionPointerEvents="none"
          rightSection={
            <Group>
              {showSearchIcon && <IconSearch size={22} />}
              {userResults.status === "pending" ? (
                <Loader size={24} />
              ) : (
                <CloseButton
                  size="lg"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    setInputValue("");
                    combobox.closeDropdown();
                    onClear?.();
                  }}
                  aria-label="Clear value"
                />
              )}
            </Group>
          }
          placeholder="Search..."
          value={inputValue}
          onChange={(event) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setInputValue(event.currentTarget.value);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
          }}
          error={error}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {userResults.data?.map((option) => (
            <Combobox.Option value={option.id} key={option.id}>
              <Text size="sm" fw="bold" component="div">
                {renderOptionLabel
                  ? renderOptionLabel(option)
                  : defaultRenderOptionLabel(option)}
              </Text>
            </Combobox.Option>
          ))}

          {actionFn && actionFnLabel && (
            <Combobox.Option value="$create" key="action">
              {actionFnLabel}
            </Combobox.Option>
          )}

          {userResults?.data?.length === 0 && (
            <Combobox.Empty>No results found</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
