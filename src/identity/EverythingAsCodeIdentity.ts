import { EaCProviderAsCode } from "./EaCProviderAsCode.ts";
import type { EaCAccessRightAsCode } from "./EaCAccessRightAsCode.ts";
import { EaCAccessConfigurationAsCode } from "@fathym/eac-identity";

/**
 * The Identity spec used for tracking authentication and authorization configurations.
 */
export type EverythingAsCodeIdentity = {
  /** Reusable access control definitions combining providers, rights, and optional usernames; referenced by relying parties. */
  AccessConfigurations?: Record<string, EaCAccessConfigurationAsCode>;

  /** Declarative authorization rights used by configurations and relying parties. */
  AccessRights?: Record<string, EaCAccessRightAsCode>;

  /** OAuth/OIDC and other identity providers. */
  Providers?: Record<string, EaCProviderAsCode>;
};

export function isEverythingAsCodeIdentity(
  eac: unknown,
): eac is EverythingAsCodeIdentity {
  const idEaC = eac as EverythingAsCodeIdentity;

  return idEaC.Providers !== undefined || idEaC.AccessRights !== undefined;
}
