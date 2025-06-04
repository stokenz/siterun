// generated with @7nohe/openapi-react-query-codegen@1.4.1 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { AlarmsService, AuthService, DefaultService, DevicesService, MapsService, MetricsService, OutagesService, RoutesService, SitesService, TagsService, UsersService } from "../requests/services.gen";
import { AlarmInputDto, CompletePasswordResetInputDto, CompleteUserOnboardingInputDto, CreateRouteInputDto, DeviceInputDto, EmailWebhookInputDto, ErrorDto, InititatePasswordResetInputDto, LinkOAuthAccountInputDto, LoginInputDto, MapInputDto, NoteInputDto, OutageInputDto, SiteInputDto, TagInputDto, UpdateRouteInputDto, UserInputDto } from "../requests/types.gen";
import * as Common from "./common";
export const useDefaultServiceHealthControllerCheck = <TData = Common.DefaultServiceHealthControllerCheckDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDefaultServiceHealthControllerCheckKeyFn(queryKey), queryFn: () => DefaultService.healthControllerCheck() as TData, ...options });
export const useAuthServiceGoogle = <TData = Common.AuthServiceGoogleDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAuthServiceGoogleKeyFn(queryKey), queryFn: () => AuthService.google() as TData, ...options });
export const useAuthServiceAuthControllerGoogleCallback = <TData = Common.AuthServiceAuthControllerGoogleCallbackDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ state }: {
  state: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAuthServiceAuthControllerGoogleCallbackKeyFn({ state }, queryKey), queryFn: () => AuthService.authControllerGoogleCallback({ state }) as TData, ...options });
export const useAuthServiceMicrosoft = <TData = Common.AuthServiceMicrosoftDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAuthServiceMicrosoftKeyFn(queryKey), queryFn: () => AuthService.microsoft() as TData, ...options });
export const useAuthServiceAuthControllerMicrosoftCallback = <TData = Common.AuthServiceAuthControllerMicrosoftCallbackDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ state }: {
  state: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAuthServiceAuthControllerMicrosoftCallbackKeyFn({ state }, queryKey), queryFn: () => AuthService.authControllerMicrosoftCallback({ state }) as TData, ...options });
export const useUsersServiceFindManyUsers = <TData = Common.UsersServiceFindManyUsersDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUsersServiceFindManyUsersKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => UsersService.findManyUsers({ page, recordsPerPage }) as TData, ...options });
export const useUsersServiceSearchUsers = <TData = Common.UsersServiceSearchUsersDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ q }: {
  q: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUsersServiceSearchUsersKeyFn({ q }, queryKey), queryFn: () => UsersService.searchUsers({ q }) as TData, ...options });
export const useUsersServiceFindMe = <TData = Common.UsersServiceFindMeDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUsersServiceFindMeKeyFn(queryKey), queryFn: () => UsersService.findMe() as TData, ...options });
export const useUsersServiceFindOneUser = <TData = Common.UsersServiceFindOneUserDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ userId }: {
  userId: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUsersServiceFindOneUserKeyFn({ userId }, queryKey), queryFn: () => UsersService.findOneUser({ userId }) as TData, ...options });
export const useUsersServiceFindOneUserByEmail = <TData = Common.UsersServiceFindOneUserByEmailDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ email }: {
  email: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUsersServiceFindOneUserByEmailKeyFn({ email }, queryKey), queryFn: () => UsersService.findOneUserByEmail({ email }) as TData, ...options });
export const useSitesServiceFindManySites = <TData = Common.SitesServiceFindManySitesDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSitesServiceFindManySitesKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => SitesService.findManySites({ page, recordsPerPage }) as TData, ...options });
export const useSitesServiceFindManySitesGeoJson = <TData = Common.SitesServiceFindManySitesGeoJsonDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSitesServiceFindManySitesGeoJsonKeyFn(queryKey), queryFn: () => SitesService.findManySitesGeoJson() as TData, ...options });
export const useSitesServiceSearchSites = <TData = Common.SitesServiceSearchSitesDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ q }: {
  q: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSitesServiceSearchSitesKeyFn({ q }, queryKey), queryFn: () => SitesService.searchSites({ q }) as TData, ...options });
export const useSitesServiceFindOneSite = <TData = Common.SitesServiceFindOneSiteDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSitesServiceFindOneSiteKeyFn({ id }, queryKey), queryFn: () => SitesService.findOneSite({ id }) as TData, ...options });
export const useSitesServiceFindManyRoutesBySite = <TData = Common.SitesServiceFindManyRoutesBySiteDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSitesServiceFindManyRoutesBySiteKeyFn({ id }, queryKey), queryFn: () => SitesService.findManyRoutesBySite({ id }) as TData, ...options });
export const useSitesServiceFindManyOutagesBySite = <TData = Common.SitesServiceFindManyOutagesBySiteDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSitesServiceFindManyOutagesBySiteKeyFn({ id }, queryKey), queryFn: () => SitesService.findManyOutagesBySite({ id }) as TData, ...options });
export const useOutagesServiceFindManyOutages = <TData = Common.OutagesServiceFindManyOutagesDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOutagesServiceFindManyOutagesKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => OutagesService.findManyOutages({ page, recordsPerPage }) as TData, ...options });
export const useOutagesServiceFindManyPublicOutages = <TData = Common.OutagesServiceFindManyPublicOutagesDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOutagesServiceFindManyPublicOutagesKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => OutagesService.findManyPublicOutages({ page, recordsPerPage }) as TData, ...options });
export const useOutagesServiceGetOutageSummary = <TData = Common.OutagesServiceGetOutageSummaryDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOutagesServiceGetOutageSummaryKeyFn(queryKey), queryFn: () => OutagesService.getOutageSummary() as TData, ...options });
export const useOutagesServiceFindOneOutage = <TData = Common.OutagesServiceFindOneOutageDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOutagesServiceFindOneOutageKeyFn({ id }, queryKey), queryFn: () => OutagesService.findOneOutage({ id }) as TData, ...options });
export const useOutagesServiceFindOneOutageRenderEmail = <TData = Common.OutagesServiceFindOneOutageRenderEmailDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseOutagesServiceFindOneOutageRenderEmailKeyFn({ id }, queryKey), queryFn: () => OutagesService.findOneOutageRenderEmail({ id }) as TData, ...options });
export const useRoutesServiceFindManyRoutes = <TData = Common.RoutesServiceFindManyRoutesDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseRoutesServiceFindManyRoutesKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => RoutesService.findManyRoutes({ page, recordsPerPage }) as TData, ...options });
export const useRoutesServiceFindOneRoute = <TData = Common.RoutesServiceFindOneRouteDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseRoutesServiceFindOneRouteKeyFn({ id }, queryKey), queryFn: () => RoutesService.findOneRoute({ id }) as TData, ...options });
export const useDevicesServiceFindManyDevicesForCollector = <TData = Common.DevicesServiceFindManyDevicesForCollectorDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDevicesServiceFindManyDevicesForCollectorKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => DevicesService.findManyDevicesForCollector({ page, recordsPerPage }) as TData, ...options });
export const useDevicesServiceSearchDevices = <TData = Common.DevicesServiceSearchDevicesDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ name }: {
  name: unknown;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDevicesServiceSearchDevicesKeyFn({ name }, queryKey), queryFn: () => DevicesService.searchDevices({ name }) as TData, ...options });
export const useDevicesServiceFindOneDevice = <TData = Common.DevicesServiceFindOneDeviceDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDevicesServiceFindOneDeviceKeyFn({ id }, queryKey), queryFn: () => DevicesService.findOneDevice({ id }) as TData, ...options });
export const useMapsServiceFindManyMaps = <TData = Common.MapsServiceFindManyMapsDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMapsServiceFindManyMapsKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => MapsService.findManyMaps({ page, recordsPerPage }) as TData, ...options });
export const useMapsServiceFindDefaultMap = <TData = Common.MapsServiceFindDefaultMapDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMapsServiceFindDefaultMapKeyFn(queryKey), queryFn: () => MapsService.findDefaultMap() as TData, ...options });
export const useMapsServiceFindOneMap = <TData = Common.MapsServiceFindOneMapDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMapsServiceFindOneMapKeyFn({ id }, queryKey), queryFn: () => MapsService.findOneMap({ id }) as TData, ...options });
export const useAlarmsServiceFindManyAlarms = <TData = Common.AlarmsServiceFindManyAlarmsDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAlarmsServiceFindManyAlarmsKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => AlarmsService.findManyAlarms({ page, recordsPerPage }) as TData, ...options });
export const useAlarmsServiceFindOneAlarm = <TData = Common.AlarmsServiceFindOneAlarmDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseAlarmsServiceFindOneAlarmKeyFn({ id }, queryKey), queryFn: () => AlarmsService.findOneAlarm({ id }) as TData, ...options });
export const useTagsServiceFindManyTags = <TData = Common.TagsServiceFindManyTagsDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTagsServiceFindManyTagsKeyFn({ page, recordsPerPage }, queryKey), queryFn: () => TagsService.findManyTags({ page, recordsPerPage }) as TData, ...options });
export const useTagsServiceFindOneTag = <TData = Common.TagsServiceFindOneTagDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTagsServiceFindOneTagKeyFn({ id }, queryKey), queryFn: () => TagsService.findOneTag({ id }) as TData, ...options });
export const useMetricsServiceFindManyMetrics = <TData = Common.MetricsServiceFindManyMetricsDefaultResponse, TError = ErrorDto, TQueryKey extends Array<unknown> = unknown[]>({ deviceId, endTime, interval, startTime }: {
  deviceId: string;
  endTime: string;
  interval: string;
  startTime: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseMetricsServiceFindManyMetricsKeyFn({ deviceId, endTime, interval, startTime }, queryKey), queryFn: () => MetricsService.findManyMetrics({ deviceId, endTime, interval, startTime }) as TData, ...options });
export const useAuthServiceLogin = <TData = Common.AuthServiceLoginMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: LoginInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: LoginInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => AuthService.login({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAuthServiceLogout = <TData = Common.AuthServiceLogoutMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AuthService.logout() as unknown as Promise<TData>, ...options });
export const useAuthServiceInitiatePasswordReset = <TData = Common.AuthServiceInitiatePasswordResetMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: InititatePasswordResetInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: InititatePasswordResetInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => AuthService.initiatePasswordReset({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAuthServiceCompletePasswordReset = <TData = Common.AuthServiceCompletePasswordResetMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CompletePasswordResetInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CompletePasswordResetInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => AuthService.completePasswordReset({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAuthServiceCompleteOnboarding = <TData = Common.AuthServiceCompleteOnboardingMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CompleteUserOnboardingInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CompleteUserOnboardingInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => AuthService.completeOnboarding({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAuthServiceLinkOauthAccount = <TData = Common.AuthServiceLinkOauthAccountMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: LinkOAuthAccountInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: LinkOAuthAccountInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => AuthService.linkOauthAccount({ requestBody }) as unknown as Promise<TData>, ...options });
export const useUsersServiceCreateUser = <TData = Common.UsersServiceCreateUserMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: UserInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: UserInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => UsersService.createUser({ requestBody }) as unknown as Promise<TData>, ...options });
export const useUsersServiceExportUsers = <TData = Common.UsersServiceExportUsersMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => UsersService.exportUsers() as unknown as Promise<TData>, ...options });
export const useSitesServiceCreateSite = <TData = Common.SitesServiceCreateSiteMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: SiteInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: SiteInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => SitesService.createSite({ requestBody }) as unknown as Promise<TData>, ...options });
export const useSitesServiceExportSites = <TData = Common.SitesServiceExportSitesMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => SitesService.exportSites() as unknown as Promise<TData>, ...options });
export const useOutagesServiceCreateOutage = <TData = Common.OutagesServiceCreateOutageMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: OutageInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: OutageInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => OutagesService.createOutage({ requestBody }) as unknown as Promise<TData>, ...options });
export const useOutagesServiceHandleInboundEmailWebhook = <TData = Common.OutagesServiceHandleInboundEmailWebhookMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: EmailWebhookInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: EmailWebhookInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => OutagesService.handleInboundEmailWebhook({ requestBody }) as unknown as Promise<TData>, ...options });
export const useOutagesServiceExportOutages = <TData = Common.OutagesServiceExportOutagesMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => OutagesService.exportOutages() as unknown as Promise<TData>, ...options });
export const useOutagesServiceCreateOutageNote = <TData = Common.OutagesServiceCreateOutageNoteMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: NoteInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: NoteInputDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => OutagesService.createOutageNote({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useRoutesServiceCreateRoute = <TData = Common.RoutesServiceCreateRouteMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: CreateRouteInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: CreateRouteInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => RoutesService.createRoute({ requestBody }) as unknown as Promise<TData>, ...options });
export const useRoutesServiceExportRoutes = <TData = Common.RoutesServiceExportRoutesMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => RoutesService.exportRoutes() as unknown as Promise<TData>, ...options });
export const useDevicesServiceCreateDevice = <TData = Common.DevicesServiceCreateDeviceMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: DeviceInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: DeviceInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => DevicesService.createDevice({ requestBody }) as unknown as Promise<TData>, ...options });
export const useDevicesServiceExportDevices = <TData = Common.DevicesServiceExportDevicesMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => DevicesService.exportDevices() as unknown as Promise<TData>, ...options });
export const useMapsServiceCreateMap = <TData = Common.MapsServiceCreateMapMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: MapInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: MapInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => MapsService.createMap({ requestBody }) as unknown as Promise<TData>, ...options });
export const useMapsServiceExportMaps = <TData = Common.MapsServiceExportMapsMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => MapsService.exportMaps() as unknown as Promise<TData>, ...options });
export const useAlarmsServiceCreateAlarm = <TData = Common.AlarmsServiceCreateAlarmMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: AlarmInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: AlarmInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => AlarmsService.createAlarm({ requestBody }) as unknown as Promise<TData>, ...options });
export const useAlarmsServiceExportAlarms = <TData = Common.AlarmsServiceExportAlarmsMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AlarmsService.exportAlarms() as unknown as Promise<TData>, ...options });
export const useTagsServiceCreateTag = <TData = Common.TagsServiceCreateTagMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: TagInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: TagInputDto;
}, TContext>({ mutationFn: ({ requestBody }) => TagsService.createTag({ requestBody }) as unknown as Promise<TData>, ...options });
export const useTagsServiceExportTags = <TData = Common.TagsServiceExportTagsMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => TagsService.exportTags() as unknown as Promise<TData>, ...options });
export const useUsersServiceUpdateUser = <TData = Common.UsersServiceUpdateUserMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  requestBody: UserInputDto;
  userId: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  requestBody: UserInputDto;
  userId: string;
}, TContext>({ mutationFn: ({ requestBody, userId }) => UsersService.updateUser({ requestBody, userId }) as unknown as Promise<TData>, ...options });
export const useSitesServiceUpdateSite = <TData = Common.SitesServiceUpdateSiteMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: SiteInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: SiteInputDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => SitesService.updateSite({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useOutagesServiceUpdateOutage = <TData = Common.OutagesServiceUpdateOutageMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: OutageInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: OutageInputDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => OutagesService.updateOutage({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useOutagesServiceUpdateOutageNote = <TData = Common.OutagesServiceUpdateOutageNoteMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  noteId: string;
  requestBody: NoteInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  noteId: string;
  requestBody: NoteInputDto;
}, TContext>({ mutationFn: ({ id, noteId, requestBody }) => OutagesService.updateOutageNote({ id, noteId, requestBody }) as unknown as Promise<TData>, ...options });
export const useRoutesServiceUpdateRoute = <TData = Common.RoutesServiceUpdateRouteMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: UpdateRouteInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: UpdateRouteInputDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => RoutesService.updateRoute({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useDevicesServiceUpdateDevice = <TData = Common.DevicesServiceUpdateDeviceMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: DeviceInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: DeviceInputDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => DevicesService.updateDevice({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useMapsServiceUpdateMap = <TData = Common.MapsServiceUpdateMapMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: MapInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: MapInputDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => MapsService.updateMap({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useAlarmsServiceUpdateAlarm = <TData = Common.AlarmsServiceUpdateAlarmMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: AlarmInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: AlarmInputDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => AlarmsService.updateAlarm({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useTagsServiceUpdateTag = <TData = Common.TagsServiceUpdateTagMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
  requestBody: TagInputDto;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
  requestBody: TagInputDto;
}, TContext>({ mutationFn: ({ id, requestBody }) => TagsService.updateTag({ id, requestBody }) as unknown as Promise<TData>, ...options });
export const useUsersServiceDeleteUser = <TData = Common.UsersServiceDeleteUserMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  userId: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  userId: string;
}, TContext>({ mutationFn: ({ userId }) => UsersService.deleteUser({ userId }) as unknown as Promise<TData>, ...options });
export const useSitesServiceDeleteSite = <TData = Common.SitesServiceDeleteSiteMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => SitesService.deleteSite({ id }) as unknown as Promise<TData>, ...options });
export const useOutagesServiceDeleteOutage = <TData = Common.OutagesServiceDeleteOutageMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => OutagesService.deleteOutage({ id }) as unknown as Promise<TData>, ...options });
export const useRoutesServiceDeleteRoute = <TData = Common.RoutesServiceDeleteRouteMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => RoutesService.deleteRoute({ id }) as unknown as Promise<TData>, ...options });
export const useDevicesServiceDeleteDevice = <TData = Common.DevicesServiceDeleteDeviceMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => DevicesService.deleteDevice({ id }) as unknown as Promise<TData>, ...options });
export const useMapsServiceDeleteMap = <TData = Common.MapsServiceDeleteMapMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => MapsService.deleteMap({ id }) as unknown as Promise<TData>, ...options });
export const useAlarmsServiceDeleteAlarm = <TData = Common.AlarmsServiceDeleteAlarmMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => AlarmsService.deleteAlarm({ id }) as unknown as Promise<TData>, ...options });
export const useTagsServiceDeleteTag = <TData = Common.TagsServiceDeleteTagMutationResult, TError = ErrorDto, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: string;
}, TContext>({ mutationFn: ({ id }) => TagsService.deleteTag({ id }) as unknown as Promise<TData>, ...options });
