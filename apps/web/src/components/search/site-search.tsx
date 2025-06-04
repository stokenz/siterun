import { useEffect, useState } from "react";
import {
  CloseButton,
  Combobox,
  Flex,
  Group,
  InputBase,
  Loader,
  Text,
  useCombobox,
} from "@mantine/core";
import { IconMapPin, IconSearch } from "@tabler/icons-react";
import * as React from "react";
import { useGeocodingSearch } from "~/hooks/geocoding-search";
import { useSitesServiceSearchSites } from "~/api/queries";
import { SiteOutputDto } from "~/api/requests";

export type SearchResult = {
  id: string;
  label: string;
  latitude: number;
  longitude: number;
  type: "site" | "geocoder";
};

const defaultRenderOptionLabel = (site: SiteOutputDto) => {
  return `${site.code} ${site.name}`;
};

export type SearchBoxProps = {
  label?: string;
  onSelect: (item: SearchResult) => void;
  renderOptionLabel?: (site: SiteOutputDto) => React.ReactNode;
  defaultQuery?: string;
  actionFn?: () => void;
  actionFnLabel?: string | React.ReactNode;
  enableGeocoding?: boolean;
  baseProps?: React.ComponentProps<typeof InputBase>;
  onClear?: () => void;
  showSearchIcon?: boolean;
  error?: string;
};

/**
 * Search box for sites and addresses.
 */
export default function SearchBox({
  label,
  onSelect,
  renderOptionLabel,
  defaultQuery,
  actionFn,
  actionFnLabel,
  enableGeocoding = false,
  baseProps,
  onClear,
  showSearchIcon = true,
  error,
}: SearchBoxProps) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const [inputValue, setInputValue] = useState(defaultQuery ?? "");

  const siteResults = useSitesServiceSearchSites({
    q: inputValue,
  });
  const geocoderResults = useGeocodingSearch(inputValue, enableGeocoding, "nz");

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

        const siteOption = siteResults.data?.find((o) => o.id === optionId);
        if (siteOption) {
          onSelect({
            id: siteOption.id,
            label: defaultRenderOptionLabel(siteOption),
            latitude: siteOption.latitude,
            longitude: siteOption.longitude,
            type: "site",
          });
          setInputValue(defaultRenderOptionLabel(siteOption));
          combobox.closeDropdown();
          return;
        }

        const geocoderOption = geocoderResults.data?.find(
          (o) => o.id === optionId,
        );
        if (geocoderOption) {
          onSelect({
            id: geocoderOption.id,
            label: geocoderOption.name,
            latitude: geocoderOption.latitude,
            longitude: geocoderOption.longitude,
            type: "geocoder",
          });
          setInputValue(geocoderOption.name);
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
              {siteResults.status === "pending" ? (
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
          {siteResults.data?.map((option) => (
            <Combobox.Option value={option.id} key={option.id}>
              <Text size="sm" fw="bold" component="div">
                {renderOptionLabel
                  ? renderOptionLabel(option)
                  : defaultRenderOptionLabel(option)}
              </Text>
            </Combobox.Option>
          ))}

          {enableGeocoding &&
            geocoderResults.data?.map((option) => (
              <Combobox.Option value={option.id} key={option.id}>
                <Flex gap="md" align="center">
                  <div>
                    <IconMapPin />
                  </div>
                  <div>
                    <Text fz="sm" fw="bold">
                      {option.name}
                    </Text>
                    <Text fz="xs" opacity={0.6}>
                      {option.place}
                    </Text>
                  </div>
                </Flex>
              </Combobox.Option>
            ))}

          {actionFn && actionFnLabel && (
            <Combobox.Option value="$create" key="action">
              {actionFnLabel}
            </Combobox.Option>
          )}

          {siteResults?.data?.length === 0 &&
            (!enableGeocoding || geocoderResults.data?.length === 0) && (
              <Combobox.Empty>No results found</Combobox.Empty>
            )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
