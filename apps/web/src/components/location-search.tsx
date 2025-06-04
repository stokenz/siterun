import {
  ActionIcon,
  Combobox,
  Loader,
  TextInput,
  useCombobox,
  Text,
  Flex,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { IconCellSignal5, IconMapPin, IconX } from "@tabler/icons-react";
import { useSitesServiceSearchSites } from "~/api/queries";
import { MAPBOX_PUBLIC_KEY } from "../lib/constants";
import { useGeocodingCore } from "@mapbox/search-js-react";
import { useQuery } from "@tanstack/react-query";

type Props = {
  label?: string;
  description?: string;
  defaultQuery: string;
  onSelect: (value: {
    // Set if a site is selected
    siteId: string | null;
    // Site code or address
    label: string;
    latitude: number;
    longitude: number;
  }) => void;
  canRemove: boolean;
  onRemove: () => void;
  // Whether to include street address results in the search
  includeAddresses?: boolean;
  // Whether to include site results in the search
  includeSites?: boolean;
  disabled?: boolean;
  error?: string;
};

/**
 * Component to search for locations and sites.
 */
export default function LocationSearch({
  label,
  description,
  defaultQuery,
  canRemove,
  onRemove,
  onSelect,
  includeAddresses = true,
  includeSites = true,
  disabled,
  error,
}: Props) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [query, setQuery] = useState<string>(defaultQuery);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setQuery(defaultQuery);
  }, [defaultQuery]);

  const siteSearchResults = useSitesServiceSearchSites(
    { q: query },
    undefined,
    { enabled: active && includeSites },
  );

  const geocodingCore = useGeocodingCore({
    accessToken: MAPBOX_PUBLIC_KEY,
    country: "nz",
  });

  const addressSearchResults = useQuery({
    queryKey: ["addressSearch", query],
    queryFn: async () => {
      if (!query) return [];
      const results = await geocodingCore.forward(query, {
        limit: 5,
      });
      return results.features.map((feature) => ({
        id: feature.properties.mapbox_id,
        name: feature.properties.name_preferred,
        place: feature.properties.place_formatted,
        latitude: feature.geometry.coordinates[1],
        longitude: feature.geometry.coordinates[0],
      }));
    },
    enabled: active && includeAddresses,
  });

  const siteOptions = (siteSearchResults.data ?? []).map((item) => (
    <Combobox.Option value={item.id} key={item.id}>
      <Flex gap="xs" align="center">
        <div>
          <IconCellSignal5 />
        </div>
        <div>
          <Text fz="sm" fw={500}>
            {item.code}
          </Text>
          <Text fz="xs" opacity={0.6}>
            {item.name}
          </Text>
        </div>
      </Flex>
    </Combobox.Option>
  ));

  const addressOptions = (addressSearchResults.data ?? []).map((item) => (
    <Combobox.Option value={item.id} key={item.id}>
      <Flex gap="xs" align="center">
        <div>
          <IconMapPin />
        </div>
        <div>
          <Text fz="sm" fw={500}>
            {item.name}
          </Text>
          <Text fz="xs" opacity={0.6}>
            {item.place}
          </Text>
        </div>
      </Flex>
    </Combobox.Option>
  ));

  const isLoading =
    siteSearchResults.isLoading || addressSearchResults.isLoading;
  const showDropdown = siteOptions.length > 0 || addressOptions.length > 0;
  const noResults = siteOptions.length === 0 && addressOptions.length === 0;

  return (
    <Combobox
      disabled={disabled}
      onOptionSubmit={(optionValue) => {
        setActive(false);

        const selectedSiteOption = siteSearchResults.data?.find(
          (item) => item.id === optionValue,
        );

        if (selectedSiteOption) {
          const label = selectedSiteOption.code;
          onSelect({
            siteId: selectedSiteOption.id,
            label,
            latitude: selectedSiteOption.latitude,
            longitude: selectedSiteOption.longitude,
          });
          setQuery(label);
          combobox.closeDropdown();
        }

        const selectedAddressOption = addressSearchResults.data?.find(
          (item) => item.id === optionValue,
        );

        if (selectedAddressOption) {
          const label = selectedAddressOption.name;
          onSelect({
            siteId: null,
            label,
            latitude: selectedAddressOption.latitude,
            longitude: selectedAddressOption.longitude,
          });
          setQuery(label);
          combobox.closeDropdown();
        }
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          disabled={disabled}
          label={label}
          description={description}
          placeholder="Search..."
          value={query}
          error={error}
          onChange={(event) => {
            setActive(true);
            setQuery(event.currentTarget.value);
            combobox.resetSelectedOption();
            combobox.openDropdown();
          }}
          onClick={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
          rightSection={
            isLoading ? (
              <Loader size={18} />
            ) : (
              <ActionIcon
                disabled={disabled}
                onClick={() => {
                  if (canRemove) {
                    onRemove();
                  }
                  setQuery("");
                }}
                variant="subtle"
              >
                <IconX />
              </ActionIcon>
            )
          }
        />
      </Combobox.Target>

      <Combobox.Dropdown hidden={!showDropdown}>
        <Combobox.Options>
          {siteOptions}
          {addressOptions}
          {noResults && <Combobox.Empty>No results found</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
