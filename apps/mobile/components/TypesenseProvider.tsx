import { useMemo } from "react";
import { InstantSearch } from "react-instantsearch";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import * as React from "react";
import { useAuth } from "@/hooks/useAuth";

export type TypesenseProviderProps = {
  indexName: "sites" | "users";
  queryBy?: string;
  infix?: "always";
  children: React.ReactNode;
  geoLocationField?: string;
  exhaustiveSearch?: boolean;
  perPage?: number;
  // Skip setting the search parameters in the URL for pagination
  disablePaginationSearchParams?: boolean;
};

export default function TypesenseProvider({
  indexName,
  queryBy,
  infix,
  children,
  geoLocationField,
  exhaustiveSearch,
  perPage,
  disablePaginationSearchParams,
}: TypesenseProviderProps) {
  const { searchApiKey, searchApiUrl } = useAuth();

  const { searchClient } = useMemo(
    () =>
      new TypesenseInstantSearchAdapter({
        server: {
          apiKey: searchApiKey, // Be sure to use an API key that only allows search operations
          nodes: [
            {
              url: searchApiUrl,
            },
          ],
          cacheSearchResultsForSeconds: 0,
        },
        // The following parameters are directly passed to Typesense's search API endpoint.
        //  So you can pass any parameters supported by the search endpoint below.
        //  query_by is required.
        additionalSearchParameters: {
          query_by: queryBy,
          infix,
          exhaustive_search: exhaustiveSearch,
          per_page: perPage,
        },
        geoLocationField,
      }),
    [searchApiKey]
  );

  // const routing = useMemo(() => {
  //   let writeTimer: NodeJS.Timeout | null = null;

  //   return {
  //     // integrate with tanstack router
  //     router: {
  //       read() {
  //         return {
  //           [indexName]: {
  //             ...routerState.location.search.is,
  //           },
  //         };
  //       },
  //       write(uiState) {
  //         if (writeTimer) {
  //           clearTimeout(writeTimer);
  //         }

  //         writeTimer = setTimeout(() => {
  //           router.navigate({
  //             // @ts-expect-error - uiState merging is untyped
  //             search: (prev) => ({
  //               ...prev,
  //               is: {
  //                 ...uiState[indexName],
  //                 ...(disablePaginationSearchParams ? { page: undefined } : {}),
  //               },
  //             }),
  //           });

  //           writeTimer = null;
  //         }, 400);
  //       },
  //       // Not used as we are integrating with tanstack router
  //       createURL() {
  //         return "";
  //       },
  //       onUpdate() {},
  //       dispose() {
  //         if (writeTimer) {
  //           clearTimeout(writeTimer);
  //           writeTimer = null;
  //         }
  //       },
  //       $$type: "tanstack-router",
  //     } satisfies Router,
  //   };
  // }, [router]);

  return (
    <InstantSearch indexName={indexName} searchClient={searchClient}>
      {children}
    </InstantSearch>
  );
}
