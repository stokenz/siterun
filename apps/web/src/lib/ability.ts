import { AbilityBuilder, createMongoAbility, PureAbility } from "@casl/ability";
import { UsersServiceFindMeDefaultResponse } from "~/api/queries";
import { createContext } from "react";
import { createContextualCan } from "@casl/react";

type Actions = "create" | "read" | "update" | "delete";

type Subjects =
  | "User"
  | "Site"
  | "Asset"
  | "Route"
  | "Map"
  | "Outage"
  | "Alarm";

export type AppAbility = PureAbility<[Actions, Subjects]>;

// Provides default value for AbilityContext
// This is overridden in _auth.tsx
const emptyAbility = new AbilityBuilder<AppAbility>(createMongoAbility).build();

export const AbilityContext = createContext(emptyAbility);

// Component to use in the UI to check permissions
export const Can = createContextualCan(AbilityContext.Consumer);

export function createAbilityForUser(user: UsersServiceFindMeDefaultResponse) {
  const { can, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

  if (user.features.includes("base")) {
    can("read", "User");
    can("update", "User");
    can("create", "User");
    can("delete", "User");

    can("read", "Site");
    can("update", "Site");
    can("create", "Site");
    can("delete", "Site");

    can("read", "Asset");
    can("update", "Asset");
    can("create", "Asset");
    can("delete", "Asset");

    can("read", "Map");
    // can('create', 'Map');
    // can('update', 'Map');
    // can('delete', 'Map');
  }

  if (user.features.includes("routes")) {
    can("read", "Route");
    can("update", "Route");
    can("create", "Route");
    can("delete", "Route");
  }

  if (user.features.includes("outages")) {
    can("read", "Outage");
    can("create", "Outage");
    can("update", "Outage");
    can("delete", "Outage");
  }

  if (user.features.includes("alarms")) {
    can("read", "Alarm");
    can("create", "Alarm");
    can("update", "Alarm");
    can("delete", "Alarm");
  }

  return build({
    detectSubjectType: (item) =>
      // @ts-expect-error $kind property added by Prisma client extension
      item.$kind,
  });
}
