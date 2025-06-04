// generated with @7nohe/openapi-react-query-codegen@1.4.1 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { AlarmsService, AssetsService, AuthService, DefaultService, MapsService, OutagesService, RoutesService, SitesService, TagsService, UsersService } from "../requests/services.gen";
import * as Common from "./common";
export const useDefaultServiceHealthControllerCheckSuspense = <TData = Common.DefaultServiceHealthControllerCheckDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDefaultServiceHealthControllerCheckKeyFn(queryKey), queryFn: () => DefaultService.healthControllerCheck() as TData, ...options });
export const useAuthServiceGoogleSuspense = <TData = Common.AuthServiceGoogleDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAuthServiceGoogleKeyFn(queryKey), queryFn: () => AuthService.google() as TData, ...options });
export const useAuthServiceAuthControllerGoogleCallbackSuspense = <TData = Common.AuthServiceAuthControllerGoogleCallbackDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ state }: {
  state: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAuthServiceAuthControllerGoogleCallbackKeyFn({ state }, queryKey), queryFn: () => AuthService.authControllerGoogleCallback({ state }) as TData, ...options });
export const useAuthServiceMicrosoftSuspense = <TData = Common.AuthServiceMicrosoftDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAuthServiceMicrosoftKeyFn(queryKey), queryFn: () => AuthService.microsoft() as TData, ...options });
export const useAuthServiceAuthControllerMicrosoftCallbackSuspense = <TData = Common.AuthServiceAuthControllerMicrosoftCallbackDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ state }: {
  state: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAuthServiceAuthControllerMicrosoftCallbackKeyFn({ state }, queryKey), queryFn: () => AuthService.authControllerMicrosoftCallback({ state }) as TData, ...options });
export const useUsersServiceFindManyUsersSuspense = <TData = Common.UsersServiceFindManyUsersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUsersServiceFindManyUsersKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => UsersService.findManyUsers({ page, recordsPerPage }) as TData, ...options });
export const useUsersServiceFindMeSuspense = <TData = Common.UsersServiceFindMeDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUsersServiceFindMeKeyFn(queryKey), queryFn: () => UsersService.findMe() as TData, ...options });
export const useUsersServiceFindOneUserSuspense = <TData = Common.UsersServiceFindOneUserDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ userId }: {
  userId: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUsersServiceFindOneUserKeyFn({ userId }, queryKey), queryFn: () => UsersService.findOneUser({ userId }) as TData, ...options });
export const useUsersServiceFindOneUserByEmailSuspense = <TData = Common.UsersServiceFindOneUserByEmailDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ email }: {
  email: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUsersServiceFindOneUserByEmailKeyFn({ email }, queryKey), queryFn: () => UsersService.findOneUserByEmail({ email }) as TData, ...options });
export const useSitesServiceFindManySitesSuspense = <TData = Common.SitesServiceFindManySitesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSitesServiceFindManySitesKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => SitesService.findManySites({ page, recordsPerPage }) as TData, ...options });
export const useSitesServiceSearchSitesSuspense = <TData = Common.SitesServiceSearchSitesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ code }: {
  code: unknown;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSitesServiceSearchSitesKeyFn({ code }, queryKey), queryFn: () => SitesService.searchSites({ code }) as TData, ...options });
export const useSitesServiceFindOneSiteSuspense = <TData = Common.SitesServiceFindOneSiteDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSitesServiceFindOneSiteKeyFn({ id }, queryKey), queryFn: () => SitesService.findOneSite({ id }) as TData, ...options });
export const useSitesServiceFindManyRoutesBySiteSuspense = <TData = Common.SitesServiceFindManyRoutesBySiteDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSitesServiceFindManyRoutesBySiteKeyFn({ id }, queryKey), queryFn: () => SitesService.findManyRoutesBySite({ id }) as TData, ...options });
export const useSitesServiceFindManyOutagesBySiteSuspense = <TData = Common.SitesServiceFindManyOutagesBySiteDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseSitesServiceFindManyOutagesBySiteKeyFn({ id }, queryKey), queryFn: () => SitesService.findManyOutagesBySite({ id }) as TData, ...options });
export const useOutagesServiceFindManyOutagesSuspense = <TData = Common.OutagesServiceFindManyOutagesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseOutagesServiceFindManyOutagesKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => OutagesService.findManyOutages({ page, recordsPerPage }) as TData, ...options });
export const useOutagesServiceFindManyPublicOutagesSuspense = <TData = Common.OutagesServiceFindManyPublicOutagesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseOutagesServiceFindManyPublicOutagesKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => OutagesService.findManyPublicOutages({ page, recordsPerPage }) as TData, ...options });
export const useOutagesServiceGetOutageSummarySuspense = <TData = Common.OutagesServiceGetOutageSummaryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseOutagesServiceGetOutageSummaryKeyFn(queryKey), queryFn: () => OutagesService.getOutageSummary() as TData, ...options });
export const useOutagesServiceFindOneOutageSuspense = <TData = Common.OutagesServiceFindOneOutageDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseOutagesServiceFindOneOutageKeyFn({ id }, queryKey), queryFn: () => OutagesService.findOneOutage({ id }) as TData, ...options });
export const useOutagesServiceFindOneOutageRenderEmailSuspense = <TData = Common.OutagesServiceFindOneOutageRenderEmailDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseOutagesServiceFindOneOutageRenderEmailKeyFn({ id }, queryKey), queryFn: () => OutagesService.findOneOutageRenderEmail({ id }) as TData, ...options });
export const useRoutesServiceFindManyRoutesSuspense = <TData = Common.RoutesServiceFindManyRoutesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseRoutesServiceFindManyRoutesKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => RoutesService.findManyRoutes({ page, recordsPerPage }) as TData, ...options });
export const useRoutesServiceFindOneRouteSuspense = <TData = Common.RoutesServiceFindOneRouteDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseRoutesServiceFindOneRouteKeyFn({ id }, queryKey), queryFn: () => RoutesService.findOneRoute({ id }) as TData, ...options });
export const useAssetsServiceFindManyAssetsSuspense = <TData = Common.AssetsServiceFindManyAssetsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAssetsServiceFindManyAssetsKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => AssetsService.findManyAssets({ page, recordsPerPage }) as TData, ...options });
export const useAssetsServiceSearchAssetsSuspense = <TData = Common.AssetsServiceSearchAssetsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ name }: {
  name: unknown;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAssetsServiceSearchAssetsKeyFn({ name }, queryKey), queryFn: () => AssetsService.searchAssets({ name }) as TData, ...options });
export const useAssetsServiceFindOneAssetSuspense = <TData = Common.AssetsServiceFindOneAssetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAssetsServiceFindOneAssetKeyFn({ id }, queryKey), queryFn: () => AssetsService.findOneAsset({ id }) as TData, ...options });
export const useMapsServiceFindManyMapsSuspense = <TData = Common.MapsServiceFindManyMapsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseMapsServiceFindManyMapsKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => MapsService.findManyMaps({ page, recordsPerPage }) as TData, ...options });
export const useMapsServiceFindDefaultMapSuspense = <TData = Common.MapsServiceFindDefaultMapDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseMapsServiceFindDefaultMapKeyFn(queryKey), queryFn: () => MapsService.findDefaultMap() as TData, ...options });
export const useMapsServiceFindOneMapSuspense = <TData = Common.MapsServiceFindOneMapDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseMapsServiceFindOneMapKeyFn({ id }, queryKey), queryFn: () => MapsService.findOneMap({ id }) as TData, ...options });
export const useAlarmsServiceFindManyAlarmsSuspense = <TData = Common.AlarmsServiceFindManyAlarmsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAlarmsServiceFindManyAlarmsKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => AlarmsService.findManyAlarms({ page, recordsPerPage }) as TData, ...options });
export const useAlarmsServiceFindOneAlarmSuspense = <TData = Common.AlarmsServiceFindOneAlarmDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseAlarmsServiceFindOneAlarmKeyFn({ id }, queryKey), queryFn: () => AlarmsService.findOneAlarm({ id }) as TData, ...options });
export const useTagsServiceFindManyTagsSuspense = <TData = Common.TagsServiceFindManyTagsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseTagsServiceFindManyTagsKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => TagsService.findManyTags({ page, recordsPerPage }) as TData, ...options });
export const useTagsServiceFindOneTagSuspense = <TData = Common.TagsServiceFindOneTagDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseTagsServiceFindOneTagKeyFn({ id }, queryKey), queryFn: () => TagsService.findOneTag({ id }) as TData, ...options });
