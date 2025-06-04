// generated with @7nohe/openapi-react-query-codegen@1.4.1 

import { UseQueryResult } from "@tanstack/react-query";
import { AlarmsService, AssetsService, AuthService, DefaultService, MapsService, OutagesService, RoutesService, SitesService, TagsService, UsersService } from "../requests/services.gen";
export type DefaultServiceHealthControllerCheckDefaultResponse = Awaited<ReturnType<typeof DefaultService.healthControllerCheck>>;
export type DefaultServiceHealthControllerCheckQueryResult<TData = DefaultServiceHealthControllerCheckDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDefaultServiceHealthControllerCheckKey = "DefaultServiceHealthControllerCheck";
export const UseDefaultServiceHealthControllerCheckKeyFn = (queryKey?: Array<unknown>) => [useDefaultServiceHealthControllerCheckKey, ...(queryKey ?? [])];
export type AuthServiceGoogleDefaultResponse = Awaited<ReturnType<typeof AuthService.google>>;
export type AuthServiceGoogleQueryResult<TData = AuthServiceGoogleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAuthServiceGoogleKey = "AuthServiceGoogle";
export const UseAuthServiceGoogleKeyFn = (queryKey?: Array<unknown>) => [useAuthServiceGoogleKey, ...(queryKey ?? [])];
export type AuthServiceAuthControllerGoogleCallbackDefaultResponse = Awaited<ReturnType<typeof AuthService.authControllerGoogleCallback>>;
export type AuthServiceAuthControllerGoogleCallbackQueryResult<TData = AuthServiceAuthControllerGoogleCallbackDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAuthServiceAuthControllerGoogleCallbackKey = "AuthServiceAuthControllerGoogleCallback";
export const UseAuthServiceAuthControllerGoogleCallbackKeyFn = ({ state }: {
  state: string;
}, queryKey?: Array<unknown>) => [useAuthServiceAuthControllerGoogleCallbackKey, ...(queryKey ?? [{ state }])];
export type AuthServiceMicrosoftDefaultResponse = Awaited<ReturnType<typeof AuthService.microsoft>>;
export type AuthServiceMicrosoftQueryResult<TData = AuthServiceMicrosoftDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAuthServiceMicrosoftKey = "AuthServiceMicrosoft";
export const UseAuthServiceMicrosoftKeyFn = (queryKey?: Array<unknown>) => [useAuthServiceMicrosoftKey, ...(queryKey ?? [])];
export type AuthServiceAuthControllerMicrosoftCallbackDefaultResponse = Awaited<ReturnType<typeof AuthService.authControllerMicrosoftCallback>>;
export type AuthServiceAuthControllerMicrosoftCallbackQueryResult<TData = AuthServiceAuthControllerMicrosoftCallbackDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAuthServiceAuthControllerMicrosoftCallbackKey = "AuthServiceAuthControllerMicrosoftCallback";
export const UseAuthServiceAuthControllerMicrosoftCallbackKeyFn = ({ state }: {
  state: string;
}, queryKey?: Array<unknown>) => [useAuthServiceAuthControllerMicrosoftCallbackKey, ...(queryKey ?? [{ state }])];
export type UsersServiceFindManyUsersDefaultResponse = Awaited<ReturnType<typeof UsersService.findManyUsers>>;
export type UsersServiceFindManyUsersQueryResult<TData = UsersServiceFindManyUsersDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUsersServiceFindManyUsersKey = "UsersServiceFindManyUsers";
export const UseUsersServiceFindManyUsersKeyFn = ({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: Array<unknown>) => [useUsersServiceFindManyUsersKey, ...(queryKey ?? [{ page, recordsPerPage }])];
export type UsersServiceFindMeDefaultResponse = Awaited<ReturnType<typeof UsersService.findMe>>;
export type UsersServiceFindMeQueryResult<TData = UsersServiceFindMeDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUsersServiceFindMeKey = "UsersServiceFindMe";
export const UseUsersServiceFindMeKeyFn = (queryKey?: Array<unknown>) => [useUsersServiceFindMeKey, ...(queryKey ?? [])];
export type UsersServiceFindOneUserDefaultResponse = Awaited<ReturnType<typeof UsersService.findOneUser>>;
export type UsersServiceFindOneUserQueryResult<TData = UsersServiceFindOneUserDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUsersServiceFindOneUserKey = "UsersServiceFindOneUser";
export const UseUsersServiceFindOneUserKeyFn = ({ userId }: {
  userId: string;
}, queryKey?: Array<unknown>) => [useUsersServiceFindOneUserKey, ...(queryKey ?? [{ userId }])];
export type UsersServiceFindOneUserByEmailDefaultResponse = Awaited<ReturnType<typeof UsersService.findOneUserByEmail>>;
export type UsersServiceFindOneUserByEmailQueryResult<TData = UsersServiceFindOneUserByEmailDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUsersServiceFindOneUserByEmailKey = "UsersServiceFindOneUserByEmail";
export const UseUsersServiceFindOneUserByEmailKeyFn = ({ email }: {
  email: string;
}, queryKey?: Array<unknown>) => [useUsersServiceFindOneUserByEmailKey, ...(queryKey ?? [{ email }])];
export type SitesServiceFindManySitesDefaultResponse = Awaited<ReturnType<typeof SitesService.findManySites>>;
export type SitesServiceFindManySitesQueryResult<TData = SitesServiceFindManySitesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSitesServiceFindManySitesKey = "SitesServiceFindManySites";
export const UseSitesServiceFindManySitesKeyFn = ({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: Array<unknown>) => [useSitesServiceFindManySitesKey, ...(queryKey ?? [{ page, recordsPerPage }])];
export type SitesServiceSearchSitesDefaultResponse = Awaited<ReturnType<typeof SitesService.searchSites>>;
export type SitesServiceSearchSitesQueryResult<TData = SitesServiceSearchSitesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSitesServiceSearchSitesKey = "SitesServiceSearchSites";
export const UseSitesServiceSearchSitesKeyFn = ({ code }: {
  code: unknown;
}, queryKey?: Array<unknown>) => [useSitesServiceSearchSitesKey, ...(queryKey ?? [{ code }])];
export type SitesServiceFindOneSiteDefaultResponse = Awaited<ReturnType<typeof SitesService.findOneSite>>;
export type SitesServiceFindOneSiteQueryResult<TData = SitesServiceFindOneSiteDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSitesServiceFindOneSiteKey = "SitesServiceFindOneSite";
export const UseSitesServiceFindOneSiteKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useSitesServiceFindOneSiteKey, ...(queryKey ?? [{ id }])];
export type SitesServiceFindManyRoutesBySiteDefaultResponse = Awaited<ReturnType<typeof SitesService.findManyRoutesBySite>>;
export type SitesServiceFindManyRoutesBySiteQueryResult<TData = SitesServiceFindManyRoutesBySiteDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSitesServiceFindManyRoutesBySiteKey = "SitesServiceFindManyRoutesBySite";
export const UseSitesServiceFindManyRoutesBySiteKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useSitesServiceFindManyRoutesBySiteKey, ...(queryKey ?? [{ id }])];
export type SitesServiceFindManyOutagesBySiteDefaultResponse = Awaited<ReturnType<typeof SitesService.findManyOutagesBySite>>;
export type SitesServiceFindManyOutagesBySiteQueryResult<TData = SitesServiceFindManyOutagesBySiteDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useSitesServiceFindManyOutagesBySiteKey = "SitesServiceFindManyOutagesBySite";
export const UseSitesServiceFindManyOutagesBySiteKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useSitesServiceFindManyOutagesBySiteKey, ...(queryKey ?? [{ id }])];
export type OutagesServiceFindManyOutagesDefaultResponse = Awaited<ReturnType<typeof OutagesService.findManyOutages>>;
export type OutagesServiceFindManyOutagesQueryResult<TData = OutagesServiceFindManyOutagesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useOutagesServiceFindManyOutagesKey = "OutagesServiceFindManyOutages";
export const UseOutagesServiceFindManyOutagesKeyFn = ({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: Array<unknown>) => [useOutagesServiceFindManyOutagesKey, ...(queryKey ?? [{ page, recordsPerPage }])];
export type OutagesServiceFindManyPublicOutagesDefaultResponse = Awaited<ReturnType<typeof OutagesService.findManyPublicOutages>>;
export type OutagesServiceFindManyPublicOutagesQueryResult<TData = OutagesServiceFindManyPublicOutagesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useOutagesServiceFindManyPublicOutagesKey = "OutagesServiceFindManyPublicOutages";
export const UseOutagesServiceFindManyPublicOutagesKeyFn = ({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: Array<unknown>) => [useOutagesServiceFindManyPublicOutagesKey, ...(queryKey ?? [{ page, recordsPerPage }])];
export type OutagesServiceGetOutageSummaryDefaultResponse = Awaited<ReturnType<typeof OutagesService.getOutageSummary>>;
export type OutagesServiceGetOutageSummaryQueryResult<TData = OutagesServiceGetOutageSummaryDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useOutagesServiceGetOutageSummaryKey = "OutagesServiceGetOutageSummary";
export const UseOutagesServiceGetOutageSummaryKeyFn = (queryKey?: Array<unknown>) => [useOutagesServiceGetOutageSummaryKey, ...(queryKey ?? [])];
export type OutagesServiceFindOneOutageDefaultResponse = Awaited<ReturnType<typeof OutagesService.findOneOutage>>;
export type OutagesServiceFindOneOutageQueryResult<TData = OutagesServiceFindOneOutageDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useOutagesServiceFindOneOutageKey = "OutagesServiceFindOneOutage";
export const UseOutagesServiceFindOneOutageKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useOutagesServiceFindOneOutageKey, ...(queryKey ?? [{ id }])];
export type OutagesServiceFindOneOutageRenderEmailDefaultResponse = Awaited<ReturnType<typeof OutagesService.findOneOutageRenderEmail>>;
export type OutagesServiceFindOneOutageRenderEmailQueryResult<TData = OutagesServiceFindOneOutageRenderEmailDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useOutagesServiceFindOneOutageRenderEmailKey = "OutagesServiceFindOneOutageRenderEmail";
export const UseOutagesServiceFindOneOutageRenderEmailKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useOutagesServiceFindOneOutageRenderEmailKey, ...(queryKey ?? [{ id }])];
export type RoutesServiceFindManyRoutesDefaultResponse = Awaited<ReturnType<typeof RoutesService.findManyRoutes>>;
export type RoutesServiceFindManyRoutesQueryResult<TData = RoutesServiceFindManyRoutesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useRoutesServiceFindManyRoutesKey = "RoutesServiceFindManyRoutes";
export const UseRoutesServiceFindManyRoutesKeyFn = ({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: Array<unknown>) => [useRoutesServiceFindManyRoutesKey, ...(queryKey ?? [{ page, recordsPerPage }])];
export type RoutesServiceFindOneRouteDefaultResponse = Awaited<ReturnType<typeof RoutesService.findOneRoute>>;
export type RoutesServiceFindOneRouteQueryResult<TData = RoutesServiceFindOneRouteDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useRoutesServiceFindOneRouteKey = "RoutesServiceFindOneRoute";
export const UseRoutesServiceFindOneRouteKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useRoutesServiceFindOneRouteKey, ...(queryKey ?? [{ id }])];
export type AssetsServiceFindManyAssetsDefaultResponse = Awaited<ReturnType<typeof AssetsService.findManyAssets>>;
export type AssetsServiceFindManyAssetsQueryResult<TData = AssetsServiceFindManyAssetsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAssetsServiceFindManyAssetsKey = "AssetsServiceFindManyAssets";
export const UseAssetsServiceFindManyAssetsKeyFn = ({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: Array<unknown>) => [useAssetsServiceFindManyAssetsKey, ...(queryKey ?? [{ page, recordsPerPage }])];
export type AssetsServiceSearchAssetsDefaultResponse = Awaited<ReturnType<typeof AssetsService.searchAssets>>;
export type AssetsServiceSearchAssetsQueryResult<TData = AssetsServiceSearchAssetsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAssetsServiceSearchAssetsKey = "AssetsServiceSearchAssets";
export const UseAssetsServiceSearchAssetsKeyFn = ({ name }: {
  name: unknown;
}, queryKey?: Array<unknown>) => [useAssetsServiceSearchAssetsKey, ...(queryKey ?? [{ name }])];
export type AssetsServiceFindOneAssetDefaultResponse = Awaited<ReturnType<typeof AssetsService.findOneAsset>>;
export type AssetsServiceFindOneAssetQueryResult<TData = AssetsServiceFindOneAssetDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAssetsServiceFindOneAssetKey = "AssetsServiceFindOneAsset";
export const UseAssetsServiceFindOneAssetKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useAssetsServiceFindOneAssetKey, ...(queryKey ?? [{ id }])];
export type MapsServiceFindManyMapsDefaultResponse = Awaited<ReturnType<typeof MapsService.findManyMaps>>;
export type MapsServiceFindManyMapsQueryResult<TData = MapsServiceFindManyMapsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMapsServiceFindManyMapsKey = "MapsServiceFindManyMaps";
export const UseMapsServiceFindManyMapsKeyFn = ({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: Array<unknown>) => [useMapsServiceFindManyMapsKey, ...(queryKey ?? [{ page, recordsPerPage }])];
export type MapsServiceFindDefaultMapDefaultResponse = Awaited<ReturnType<typeof MapsService.findDefaultMap>>;
export type MapsServiceFindDefaultMapQueryResult<TData = MapsServiceFindDefaultMapDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMapsServiceFindDefaultMapKey = "MapsServiceFindDefaultMap";
export const UseMapsServiceFindDefaultMapKeyFn = (queryKey?: Array<unknown>) => [useMapsServiceFindDefaultMapKey, ...(queryKey ?? [])];
export type MapsServiceFindOneMapDefaultResponse = Awaited<ReturnType<typeof MapsService.findOneMap>>;
export type MapsServiceFindOneMapQueryResult<TData = MapsServiceFindOneMapDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMapsServiceFindOneMapKey = "MapsServiceFindOneMap";
export const UseMapsServiceFindOneMapKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useMapsServiceFindOneMapKey, ...(queryKey ?? [{ id }])];
export type AlarmsServiceFindManyAlarmsDefaultResponse = Awaited<ReturnType<typeof AlarmsService.findManyAlarms>>;
export type AlarmsServiceFindManyAlarmsQueryResult<TData = AlarmsServiceFindManyAlarmsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAlarmsServiceFindManyAlarmsKey = "AlarmsServiceFindManyAlarms";
export const UseAlarmsServiceFindManyAlarmsKeyFn = ({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: Array<unknown>) => [useAlarmsServiceFindManyAlarmsKey, ...(queryKey ?? [{ page, recordsPerPage }])];
export type AlarmsServiceFindOneAlarmDefaultResponse = Awaited<ReturnType<typeof AlarmsService.findOneAlarm>>;
export type AlarmsServiceFindOneAlarmQueryResult<TData = AlarmsServiceFindOneAlarmDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAlarmsServiceFindOneAlarmKey = "AlarmsServiceFindOneAlarm";
export const UseAlarmsServiceFindOneAlarmKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useAlarmsServiceFindOneAlarmKey, ...(queryKey ?? [{ id }])];
export type TagsServiceFindManyTagsDefaultResponse = Awaited<ReturnType<typeof TagsService.findManyTags>>;
export type TagsServiceFindManyTagsQueryResult<TData = TagsServiceFindManyTagsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useTagsServiceFindManyTagsKey = "TagsServiceFindManyTags";
export const UseTagsServiceFindManyTagsKeyFn = ({ page, recordsPerPage }: {
  page: number;
  recordsPerPage: number;
}, queryKey?: Array<unknown>) => [useTagsServiceFindManyTagsKey, ...(queryKey ?? [{ page, recordsPerPage }])];
export type TagsServiceFindOneTagDefaultResponse = Awaited<ReturnType<typeof TagsService.findOneTag>>;
export type TagsServiceFindOneTagQueryResult<TData = TagsServiceFindOneTagDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useTagsServiceFindOneTagKey = "TagsServiceFindOneTag";
export const UseTagsServiceFindOneTagKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useTagsServiceFindOneTagKey, ...(queryKey ?? [{ id }])];
export type AuthServiceLoginMutationResult = Awaited<ReturnType<typeof AuthService.login>>;
export type AuthServiceLogoutMutationResult = Awaited<ReturnType<typeof AuthService.logout>>;
export type AuthServiceInitiatePasswordResetMutationResult = Awaited<ReturnType<typeof AuthService.initiatePasswordReset>>;
export type AuthServiceCompletePasswordResetMutationResult = Awaited<ReturnType<typeof AuthService.completePasswordReset>>;
export type AuthServiceCompleteOnboardingMutationResult = Awaited<ReturnType<typeof AuthService.completeOnboarding>>;
export type AuthServiceLinkOauthAccountMutationResult = Awaited<ReturnType<typeof AuthService.linkOauthAccount>>;
export type UsersServiceCreateUserMutationResult = Awaited<ReturnType<typeof UsersService.createUser>>;
export type UsersServiceExportUsersMutationResult = Awaited<ReturnType<typeof UsersService.exportUsers>>;
export type SitesServiceCreateSiteMutationResult = Awaited<ReturnType<typeof SitesService.createSite>>;
export type SitesServiceExportSitesMutationResult = Awaited<ReturnType<typeof SitesService.exportSites>>;
export type OutagesServiceCreateOutageMutationResult = Awaited<ReturnType<typeof OutagesService.createOutage>>;
export type OutagesServiceHandleInboundEmailWebhookMutationResult = Awaited<ReturnType<typeof OutagesService.handleInboundEmailWebhook>>;
export type OutagesServiceExportOutagesMutationResult = Awaited<ReturnType<typeof OutagesService.exportOutages>>;
export type OutagesServiceCreateOutageNoteMutationResult = Awaited<ReturnType<typeof OutagesService.createOutageNote>>;
export type RoutesServiceCreateRouteMutationResult = Awaited<ReturnType<typeof RoutesService.createRoute>>;
export type RoutesServiceExportRoutesMutationResult = Awaited<ReturnType<typeof RoutesService.exportRoutes>>;
export type AssetsServiceCreateAssetMutationResult = Awaited<ReturnType<typeof AssetsService.createAsset>>;
export type AssetsServiceExportAssetsMutationResult = Awaited<ReturnType<typeof AssetsService.exportAssets>>;
export type MapsServiceCreateMapMutationResult = Awaited<ReturnType<typeof MapsService.createMap>>;
export type MapsServiceExportMapsMutationResult = Awaited<ReturnType<typeof MapsService.exportMaps>>;
export type AlarmsServiceCreateAlarmMutationResult = Awaited<ReturnType<typeof AlarmsService.createAlarm>>;
export type AlarmsServiceExportAlarmsMutationResult = Awaited<ReturnType<typeof AlarmsService.exportAlarms>>;
export type TagsServiceCreateTagMutationResult = Awaited<ReturnType<typeof TagsService.createTag>>;
export type TagsServiceExportTagsMutationResult = Awaited<ReturnType<typeof TagsService.exportTags>>;
export type UsersServiceUpdateUserMutationResult = Awaited<ReturnType<typeof UsersService.updateUser>>;
export type SitesServiceUpdateSiteMutationResult = Awaited<ReturnType<typeof SitesService.updateSite>>;
export type OutagesServiceUpdateOutageMutationResult = Awaited<ReturnType<typeof OutagesService.updateOutage>>;
export type OutagesServiceUpdateOutageNoteMutationResult = Awaited<ReturnType<typeof OutagesService.updateOutageNote>>;
export type RoutesServiceUpdateRouteMutationResult = Awaited<ReturnType<typeof RoutesService.updateRoute>>;
export type AssetsServiceUpdateAssetMutationResult = Awaited<ReturnType<typeof AssetsService.updateAsset>>;
export type MapsServiceUpdateMapMutationResult = Awaited<ReturnType<typeof MapsService.updateMap>>;
export type AlarmsServiceUpdateAlarmMutationResult = Awaited<ReturnType<typeof AlarmsService.updateAlarm>>;
export type TagsServiceUpdateTagMutationResult = Awaited<ReturnType<typeof TagsService.updateTag>>;
export type UsersServiceDeleteUserMutationResult = Awaited<ReturnType<typeof UsersService.deleteUser>>;
export type SitesServiceDeleteSiteMutationResult = Awaited<ReturnType<typeof SitesService.deleteSite>>;
export type OutagesServiceDeleteOutageMutationResult = Awaited<ReturnType<typeof OutagesService.deleteOutage>>;
export type RoutesServiceDeleteRouteMutationResult = Awaited<ReturnType<typeof RoutesService.deleteRoute>>;
export type AssetsServiceDeleteAssetMutationResult = Awaited<ReturnType<typeof AssetsService.deleteAsset>>;
export type MapsServiceDeleteMapMutationResult = Awaited<ReturnType<typeof MapsService.deleteMap>>;
export type AlarmsServiceDeleteAlarmMutationResult = Awaited<ReturnType<typeof AlarmsService.deleteAlarm>>;
export type TagsServiceDeleteTagMutationResult = Awaited<ReturnType<typeof TagsService.deleteTag>>;
