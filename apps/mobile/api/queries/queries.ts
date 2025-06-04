// generated with @7nohe/openapi-react-query-codegen@1.4.1 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { AlarmsService, AssetsService, AuthService, DefaultService, MapsService, OutagesService, RoutesService, SitesService, TagsService, UsersService } from "../requests/services.gen";
import { AlarmInputDto, AssetInputDto, CompletePasswordResetInputDto, CompleteUserOnboardingInputDto, CreateMapInputDto, CreateRouteInputDto, CreateUserInputDto, EmailWebhookInputDto, InititatePasswordResetInputDto, LinkOAuthAccountInputDto, LoginInputDto, NoteInputDto, OutageInputDto, SiteInputDto, TagInputDto, UpdateMapInputDto, UpdateRouteInputDto, UpdateUserInputDto } from "../requests/types.gen";
import * as Common from "./common";
export const useDefaultServiceHealthControllerCheck = <TData = Common.DefaultServiceHealthControllerCheckDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDefaultServiceHealthControllerCheckKeyFn(queryKey), queryFn: () => DefaultService.healthControllerCheck() as TData, ...options });
export const useAuthServiceGoogle = <TData = Common.AuthServiceGoogleDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAuthServiceGoogleKeyFn(queryKey), queryFn: () => AuthService.google() as TData, ...options });
export const useAuthServiceAuthControllerGoogleCallback = <TData = Common.AuthServiceAuthControllerGoogleCallbackDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ state }: {
  state: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAuthServiceAuthControllerGoogleCallbackKeyFn({ state }, queryKey), queryFn: () => AuthService.authControllerGoogleCallback({ state }) as TData, ...options });
export const useAuthServiceMicrosoft = <TData = Common.AuthServiceMicrosoftDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAuthServiceMicrosoftKeyFn(queryKey), queryFn: () => AuthService.microsoft() as TData, ...options });
export const useAuthServiceAuthControllerMicrosoftCallback = <TData = Common.AuthServiceAuthControllerMicrosoftCallbackDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ state }: {
  state: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAuthServiceAuthControllerMicrosoftCallbackKeyFn({ state }, queryKey), queryFn: () => AuthService.authControllerMicrosoftCallback({ state }) as TData, ...options });
export const useUsersServiceFindManyUsers = <TData = Common.UsersServiceFindManyUsersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUsersServiceFindManyUsersKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => UsersService.findManyUsers({ page, recordsPerPage }) as TData, ...options });
export const useUsersServiceFindMe = <TData = Common.UsersServiceFindMeDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUsersServiceFindMeKeyFn(queryKey), queryFn: () => UsersService.findMe() as TData, ...options });
export const useUsersServiceFindOneUser = <TData = Common.UsersServiceFindOneUserDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ userId }: {
  userId: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUsersServiceFindOneUserKeyFn({ userId }, queryKey), queryFn: () => UsersService.findOneUser({ userId }) as TData, ...options });
export const useUsersServiceFindOneUserByEmail = <TData = Common.UsersServiceFindOneUserByEmailDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ email }: {
  email: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUsersServiceFindOneUserByEmailKeyFn({ email }, queryKey), queryFn: () => UsersService.findOneUserByEmail({ email }) as TData, ...options });
export const useSitesServiceFindManySites = <TData = Common.SitesServiceFindManySitesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSitesServiceFindManySitesKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => SitesService.findManySites({ page, recordsPerPage }) as TData, ...options });
export const useSitesServiceSearchSites = <TData = Common.SitesServiceSearchSitesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ code }: {
  code: unknown;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSitesServiceSearchSitesKeyFn({ code }, queryKey), queryFn: () => SitesService.searchSites({ code }) as TData, ...options });
export const useSitesServiceFindOneSite = <TData = Common.SitesServiceFindOneSiteDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSitesServiceFindOneSiteKeyFn({ id }, queryKey), queryFn: () => SitesService.findOneSite({ id }) as TData, ...options });
export const useSitesServiceFindManyRoutesBySite = <TData = Common.SitesServiceFindManyRoutesBySiteDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSitesServiceFindManyRoutesBySiteKeyFn({ id }, queryKey), queryFn: () => SitesService.findManyRoutesBySite({ id }) as TData, ...options });
export const useSitesServiceFindManyOutagesBySite = <TData = Common.SitesServiceFindManyOutagesBySiteDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSitesServiceFindManyOutagesBySiteKeyFn({ id }, queryKey), queryFn: () => SitesService.findManyOutagesBySite({ id }) as TData, ...options });
export const useOutagesServiceFindManyOutages = <TData = Common.OutagesServiceFindManyOutagesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOutagesServiceFindManyOutagesKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => OutagesService.findManyOutages({ page, recordsPerPage }) as TData, ...options });
export const useOutagesServiceFindManyPublicOutages = <TData = Common.OutagesServiceFindManyPublicOutagesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOutagesServiceFindManyPublicOutagesKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => OutagesService.findManyPublicOutages({ page, recordsPerPage }) as TData, ...options });
export const useOutagesServiceGetOutageSummary = <TData = Common.OutagesServiceGetOutageSummaryDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOutagesServiceGetOutageSummaryKeyFn(queryKey), queryFn: () => OutagesService.getOutageSummary() as TData, ...options });
export const useOutagesServiceFindOneOutage = <TData = Common.OutagesServiceFindOneOutageDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOutagesServiceFindOneOutageKeyFn({ id }, queryKey), queryFn: () => OutagesService.findOneOutage({ id }) as TData, ...options });
export const useOutagesServiceFindOneOutageRenderEmail = <TData = Common.OutagesServiceFindOneOutageRenderEmailDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOutagesServiceFindOneOutageRenderEmailKeyFn({ id }, queryKey), queryFn: () => OutagesService.findOneOutageRenderEmail({ id }) as TData, ...options });
export const useRoutesServiceFindManyRoutes = <TData = Common.RoutesServiceFindManyRoutesDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseRoutesServiceFindManyRoutesKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => RoutesService.findManyRoutes({ page, recordsPerPage }) as TData, ...options });
export const useRoutesServiceFindOneRoute = <TData = Common.RoutesServiceFindOneRouteDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseRoutesServiceFindOneRouteKeyFn({ id }, queryKey), queryFn: () => RoutesService.findOneRoute({ id }) as TData, ...options });
export const useAssetsServiceFindManyAssets = <TData = Common.AssetsServiceFindManyAssetsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAssetsServiceFindManyAssetsKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => AssetsService.findManyAssets({ page, recordsPerPage }) as TData, ...options });
export const useAssetsServiceSearchAssets = <TData = Common.AssetsServiceSearchAssetsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ name }: {
  name: unknown;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAssetsServiceSearchAssetsKeyFn({ name }, queryKey), queryFn: () => AssetsService.searchAssets({ name }) as TData, ...options });
export const useAssetsServiceFindOneAsset = <TData = Common.AssetsServiceFindOneAssetDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAssetsServiceFindOneAssetKeyFn({ id }, queryKey), queryFn: () => AssetsService.findOneAsset({ id }) as TData, ...options });
export const useMapsServiceFindManyMaps = <TData = Common.MapsServiceFindManyMapsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMapsServiceFindManyMapsKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => MapsService.findManyMaps({ page, recordsPerPage }) as TData, ...options });
export const useMapsServiceFindDefaultMap = <TData = Common.MapsServiceFindDefaultMapDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMapsServiceFindDefaultMapKeyFn(queryKey), queryFn: () => MapsService.findDefaultMap() as TData, ...options });
export const useMapsServiceFindOneMap = <TData = Common.MapsServiceFindOneMapDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMapsServiceFindOneMapKeyFn({ id }, queryKey), queryFn: () => MapsService.findOneMap({ id }) as TData, ...options });
export const useAlarmsServiceFindManyAlarms = <TData = Common.AlarmsServiceFindManyAlarmsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAlarmsServiceFindManyAlarmsKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => AlarmsService.findManyAlarms({ page, recordsPerPage }) as TData, ...options });
export const useAlarmsServiceFindOneAlarm = <TData = Common.AlarmsServiceFindOneAlarmDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAlarmsServiceFindOneAlarmKeyFn({ id }, queryKey), queryFn: () => AlarmsService.findOneAlarm({ id }) as TData, ...options });
export const useTagsServiceFindManyTags = <TData = Common.TagsServiceFindManyTagsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTagsServiceFindManyTagsKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => TagsService.findManyTags({ page, recordsPerPage }) as TData, ...options });
export const useTagsServiceFindOneTag = <TData = Common.TagsServiceFindOneTagDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTagsServiceFindOneTagKeyFn({ id }, queryKey), queryFn: () => TagsService.findOneTag({ id }) as TData, ...options });
export const useAuthServiceLogin = <TData = Common.AuthServiceLoginMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: LoginInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: LoginInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => AuthService.login({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAuthServiceLogout = <TData = Common.AuthServiceLogoutMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AuthService.logout() as unknown as Promise<TData>, ...options });
export const useAuthServiceInitiatePasswordReset = <TData = Common.AuthServiceInitiatePasswordResetMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: InititatePasswordResetInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: InititatePasswordResetInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => AuthService.initiatePasswordReset({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAuthServiceCompletePasswordReset = <TData = Common.AuthServiceCompletePasswordResetMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CompletePasswordResetInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CompletePasswordResetInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => AuthService.completePasswordReset({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAuthServiceCompleteOnboarding = <TData = Common.AuthServiceCompleteOnboardingMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CompleteUserOnboardingInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CompleteUserOnboardingInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => AuthService.completeOnboarding({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAuthServiceLinkOauthAccount = <TData = Common.AuthServiceLinkOauthAccountMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: LinkOAuthAccountInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: LinkOAuthAccountInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => AuthService.linkOauthAccount({ requestBody }) as unknown as Promise<TData>, ...options });
export const useUsersServiceCreateUser = <TData = Common.UsersServiceCreateUserMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateUserInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateUserInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => UsersService.createUser({ requestBody }) as unknown as Promise<TData>, ...options });
export const useUsersServiceExportUsers = <TData = Common.UsersServiceExportUsersMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => UsersService.exportUsers() as unknown as Promise<TData>, ...options });
export const useSitesServiceCreateSite = <TData = Common.SitesServiceCreateSiteMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: SiteInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: SiteInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => SitesService.createSite({ requestBody }) as unknown as Promise<TData>, ...options });
export const useSitesServiceExportSites = <TData = Common.SitesServiceExportSitesMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => SitesService.exportSites() as unknown as Promise<TData>, ...options });
export const useOutagesServiceCreateOutage = <TData = Common.OutagesServiceCreateOutageMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: OutageInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: OutageInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => OutagesService.createOutage({ requestBody }) as unknown as Promise<TData>, ...options });
export const useOutagesServiceHandleInboundEmailWebhook = <TData = Common.OutagesServiceHandleInboundEmailWebhookMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: EmailWebhookInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: EmailWebhookInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => OutagesService.handleInboundEmailWebhook({ requestBody }) as unknown as Promise<TData>, ...options });
export const useOutagesServiceExportOutages = <TData = Common.OutagesServiceExportOutagesMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => OutagesService.exportOutages() as unknown as Promise<TData>, ...options });
export const useOutagesServiceCreateOutageNote = <TData = Common.OutagesServiceCreateOutageNoteMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: NoteInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: NoteInputDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => OutagesService.createOutageNote({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useRoutesServiceCreateRoute = <TData = Common.RoutesServiceCreateRouteMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateRouteInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateRouteInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => RoutesService.createRoute({ requestBody }) as unknown as Promise<TData>, ...options });
export const useRoutesServiceExportRoutes = <TData = Common.RoutesServiceExportRoutesMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => RoutesService.exportRoutes() as unknown as Promise<TData>, ...options });
export const useAssetsServiceCreateAsset = <TData = Common.AssetsServiceCreateAssetMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AssetInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AssetInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => AssetsService.createAsset({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAssetsServiceExportAssets = <TData = Common.AssetsServiceExportAssetsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AssetsService.exportAssets() as unknown as Promise<TData>, ...options });
export const useMapsServiceCreateMap = <TData = Common.MapsServiceCreateMapMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateMapInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateMapInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => MapsService.createMap({ requestBody }) as unknown as Promise<TData>, ...options });
export const useMapsServiceExportMaps = <TData = Common.MapsServiceExportMapsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => MapsService.exportMaps() as unknown as Promise<TData>, ...options });
export const useAlarmsServiceCreateAlarm = <TData = Common.AlarmsServiceCreateAlarmMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AlarmInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AlarmInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => AlarmsService.createAlarm({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAlarmsServiceExportAlarms = <TData = Common.AlarmsServiceExportAlarmsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AlarmsService.exportAlarms() as unknown as Promise<TData>, ...options });
export const useTagsServiceCreateTag = <TData = Common.TagsServiceCreateTagMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: TagInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: TagInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => TagsService.createTag({ requestBody }) as unknown as Promise<TData>, ...options });
export const useTagsServiceExportTags = <TData = Common.TagsServiceExportTagsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => TagsService.exportTags() as unknown as Promise<TData>, ...options });
export const useUsersServiceUpdateUser = <TData = Common.UsersServiceUpdateUserMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: UpdateUserInputDto;
  userId: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: UpdateUserInputDto;
  userId: string;
}, TContext>({ mutationFn: ({ requestBody, userId }) => UsersService.updateUser({ requestBody, userId }) as unknown as Promise<TData>, ...options });
export const useSitesServiceUpdateSite = <TData = Common.SitesServiceUpdateSiteMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: SiteInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: SiteInputDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => SitesService.updateSite({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useOutagesServiceUpdateOutage = <TData = Common.OutagesServiceUpdateOutageMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: OutageInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: OutageInputDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => OutagesService.updateOutage({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useOutagesServiceUpdateOutageNote = <TData = Common.OutagesServiceUpdateOutageNoteMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  noteId: string;
  requestBody: NoteInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  noteId: string;
  requestBody: NoteInputDto;
}, TContext>({ mutationFn: ({ id, noteId, requestBody }) => OutagesService.updateOutageNote({ id, noteId, requestBody }) as unknown as Promise<TData>, ...options });
export const useRoutesServiceUpdateRoute = <TData = Common.RoutesServiceUpdateRouteMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: UpdateRouteInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: UpdateRouteInputDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => RoutesService.updateRoute({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useAssetsServiceUpdateAsset = <TData = Common.AssetsServiceUpdateAssetMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: AssetInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: AssetInputDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => AssetsService.updateAsset({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useMapsServiceUpdateMap = <TData = Common.MapsServiceUpdateMapMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: UpdateMapInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: UpdateMapInputDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => MapsService.updateMap({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useAlarmsServiceUpdateAlarm = <TData = Common.AlarmsServiceUpdateAlarmMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: AlarmInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: AlarmInputDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => AlarmsService.updateAlarm({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useTagsServiceUpdateTag = <TData = Common.TagsServiceUpdateTagMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: TagInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: TagInputDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => TagsService.updateTag({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useUsersServiceDeleteUser = <TData = Common.UsersServiceDeleteUserMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  userId: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  userId: string;
}, TContext>({ mutationFn: ({ userId }) => UsersService.deleteUser({ userId }) as unknown as Promise<TData>, ...options });
export const useSitesServiceDeleteSite = <TData = Common.SitesServiceDeleteSiteMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => SitesService.deleteSite({ id }) as unknown as Promise<TData>, ...options });
export const useOutagesServiceDeleteOutage = <TData = Common.OutagesServiceDeleteOutageMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => OutagesService.deleteOutage({ id }) as unknown as Promise<TData>, ...options });
export const useRoutesServiceDeleteRoute = <TData = Common.RoutesServiceDeleteRouteMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => RoutesService.deleteRoute({ id }) as unknown as Promise<TData>, ...options });
export const useAssetsServiceDeleteAsset = <TData = Common.AssetsServiceDeleteAssetMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => AssetsService.deleteAsset({ id }) as unknown as Promise<TData>, ...options });
export const useMapsServiceDeleteMap = <TData = Common.MapsServiceDeleteMapMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => MapsService.deleteMap({ id }) as unknown as Promise<TData>, ...options });
export const useAlarmsServiceDeleteAlarm = <TData = Common.AlarmsServiceDeleteAlarmMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => AlarmsService.deleteAlarm({ id }) as unknown as Promise<TData>, ...options });
export const useTagsServiceDeleteTag = <TData = Common.TagsServiceDeleteTagMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => TagsService.deleteTag({ id }) as unknown as Promise<TData>, ...options });
