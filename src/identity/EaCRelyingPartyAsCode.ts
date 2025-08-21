import type { EaCRelyingPartyDetails } from "./EaCRelyingPartyDetails.ts";
import type { EaCAccessConfigurationAsCode } from "./EaCAccessConfigurationAsCode.ts";
import { EaCDetails } from "./.deps.ts";

export type EaCRelyingPartyAsCode = {
  AccessRightLookups?: string[] | null;

  DefaultAccessConfigurationLookup?: string | null;

  AccessConfigurations?: { [key: string]: EaCAccessConfigurationAsCode } | null;

  TrustedProviderLookups?: string[] | null;
} & EaCDetails<EaCRelyingPartyDetails>;
