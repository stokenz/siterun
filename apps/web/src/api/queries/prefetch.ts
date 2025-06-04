// generated with @7nohe/openapi-react-query-codegen@1.4.1 

import { type QueryClient } from "@tanstack/react-query";
import { AlarmsService, AuthService, DefaultService, DevicesService, MapsService, MetricsService, OutagesService, RoutesService, SitesService, TagsService, UsersService } from "../requests/services.gen";
import * as Common from "./common";
export const prefetchUseDefaultServiceHealthControllerCheck = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseDefaultServiceHealthControllerCheckKeyFn(), queryFn: () => DefaultService.healthControllerCheck() });
export const prefetchUseAuthServiceGoogle = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseAuthServiceGoogleKeyFn(), queryFn: () => AuthService.google() });
export const prefetchUseAuthServiceAuthControllerGoogleCallback = (queryClient: QueryClient, { state }: {
  state: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAuthServiceAuthControllerGoogleCallbackKeyFn({ state }), queryFn: () => AuthService.authControllerGoogleCallback({ state }) });
export const prefetchUseAuthServiceMicrosoft = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseAuthServiceMicrosoftKeyFn(), queryFn: () => AuthService.microsoft() });
export const prefetchUseAuthServiceAuthControllerMicrosoftCallback = (queryClient: QueryClient, { state }: {
  state: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAuthServiceAuthControllerMicrosoftCallbackKeyFn({ state }), queryFn: () => AuthService.authControllerMicrosoftCallback({ state }) });
export const prefetchUseUsersServiceFindManyUsers = (queryClient: QueryClient, { page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseUsersServiceFindManyUsersKeyFn({ page, recordsPerPage }), queryFn: () => UsersService.findManyUsers({ page, recordsPerPage }) });
export const prefetchUseUsersServiceSearchUsers = (queryClient: QueryClient, { q }: {
  q: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseUsersServiceSearchUsersKeyFn({ q }), queryFn: () => UsersService.searchUsers({ q }) });
export const prefetchUseUsersServiceFindMe = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseUsersServiceFindMeKeyFn(), queryFn: () => UsersService.findMe() });
export const prefetchUseUsersServiceFindOneUser = (queryClient: QueryClient, { userId }: {
  userId: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseUsersServiceFindOneUserKeyFn({ userId }), queryFn: () => UsersService.findOneUser({ userId }) });
export const prefetchUseUsersServiceFindOneUserByEmail = (queryClient: QueryClient, { email }: {
  email: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseUsersServiceFindOneUserByEmailKeyFn({ email }), queryFn: () => UsersService.findOneUserByEmail({ email }) });
export const prefetchUseSitesServiceFindManySites = (queryClient: QueryClient, { page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSitesServiceFindManySitesKeyFn({ page, recordsPerPage }), queryFn: () => SitesService.findManySites({ page, recordsPerPage }) });
export const prefetchUseSitesServiceFindManySitesGeoJson = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseSitesServiceFindManySitesGeoJsonKeyFn(), queryFn: () => SitesService.findManySitesGeoJson() });
export const prefetchUseSitesServiceSearchSites = (queryClient: QueryClient, { q }: {
  q: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSitesServiceSearchSitesKeyFn({ q }), queryFn: () => SitesService.searchSites({ q }) });
export const prefetchUseSitesServiceFindOneSite = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSitesServiceFindOneSiteKeyFn({ id }), queryFn: () => SitesService.findOneSite({ id }) });
export const prefetchUseSitesServiceFindManyRoutesBySite = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSitesServiceFindManyRoutesBySiteKeyFn({ id }), queryFn: () => SitesService.findManyRoutesBySite({ id }) });
export const prefetchUseSitesServiceFindManyOutagesBySite = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseSitesServiceFindManyOutagesBySiteKeyFn({ id }), queryFn: () => SitesService.findManyOutagesBySite({ id }) });
export const prefetchUseOutagesServiceFindManyOutages = (queryClient: QueryClient, { page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseOutagesServiceFindManyOutagesKeyFn({ page, recordsPerPage }), queryFn: () => OutagesService.findManyOutages({ page, recordsPerPage }) });
export const prefetchUseOutagesServiceFindManyPublicOutages = (queryClient: QueryClient, { page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseOutagesServiceFindManyPublicOutagesKeyFn({ page, recordsPerPage }), queryFn: () => OutagesService.findManyPublicOutages({ page, recordsPerPage }) });
export const prefetchUseOutagesServiceGetOutageSummary = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseOutagesServiceGetOutageSummaryKeyFn(), queryFn: () => OutagesService.getOutageSummary() });
export const prefetchUseOutagesServiceFindOneOutage = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseOutagesServiceFindOneOutageKeyFn({ id }), queryFn: () => OutagesService.findOneOutage({ id }) });
export const prefetchUseOutagesServiceFindOneOutageRenderEmail = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseOutagesServiceFindOneOutageRenderEmailKeyFn({ id }), queryFn: () => OutagesService.findOneOutageRenderEmail({ id }) });
export const prefetchUseRoutesServiceFindManyRoutes = (queryClient: QueryClient, { page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseRoutesServiceFindManyRoutesKeyFn({ page, recordsPerPage }), queryFn: () => RoutesService.findManyRoutes({ page, recordsPerPage }) });
export const prefetchUseRoutesServiceFindOneRoute = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseRoutesServiceFindOneRouteKeyFn({ id }), queryFn: () => RoutesService.findOneRoute({ id }) });
export const prefetchUseDevicesServiceFindManyDevicesForCollector = (queryClient: QueryClient, { page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseDevicesServiceFindManyDevicesForCollectorKeyFn({ page, recordsPerPage }), queryFn: () => DevicesService.findManyDevicesForCollector({ page, recordsPerPage }) });
export const prefetchUseDevicesServiceSearchDevices = (queryClient: QueryClient, { name }: {
  name: unknown;
}) => queryClient.prefetchQuery({ queryKey: Common.UseDevicesServiceSearchDevicesKeyFn({ name }), queryFn: () => DevicesService.searchDevices({ name }) });
export const prefetchUseDevicesServiceFindOneDevice = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseDevicesServiceFindOneDeviceKeyFn({ id }), queryFn: () => DevicesService.findOneDevice({ id }) });
export const prefetchUseMapsServiceFindManyMaps = (queryClient: QueryClient, { page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseMapsServiceFindManyMapsKeyFn({ page, recordsPerPage }), queryFn: () => MapsService.findManyMaps({ page, recordsPerPage }) });
export const prefetchUseMapsServiceFindDefaultMap = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseMapsServiceFindDefaultMapKeyFn(), queryFn: () => MapsService.findDefaultMap() });
export const prefetchUseMapsServiceFindOneMap = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseMapsServiceFindOneMapKeyFn({ id }), queryFn: () => MapsService.findOneMap({ id }) });
export const prefetchUseAlarmsServiceFindManyAlarms = (queryClient: QueryClient, { page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAlarmsServiceFindManyAlarmsKeyFn({ page, recordsPerPage }), queryFn: () => AlarmsService.findManyAlarms({ page, recordsPerPage }) });
export const prefetchUseAlarmsServiceFindOneAlarm = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseAlarmsServiceFindOneAlarmKeyFn({ id }), queryFn: () => AlarmsService.findOneAlarm({ id }) });
export const prefetchUseTagsServiceFindManyTags = (queryClient: QueryClient, { page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseTagsServiceFindManyTagsKeyFn({ page, recordsPerPage }), queryFn: () => TagsService.findManyTags({ page, recordsPerPage }) });
export const prefetchUseTagsServiceFindOneTag = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseTagsServiceFindOneTagKeyFn({ id }), queryFn: () => TagsService.findOneTag({ id }) });
export const prefetchUseMetricsServiceFindManyMetrics = (queryClient: QueryClient, { deviceId, endTime, interval, startTime }: {
  deviceId: string;
  endTime: string;
  interval: string;
  startTime: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseMetricsServiceFindManyMetricsKeyFn({ deviceId, endTime, interval, startTime }), queryFn: () => MetricsService.findManyMetrics({ deviceId, endTime, interval, startTime }) });
