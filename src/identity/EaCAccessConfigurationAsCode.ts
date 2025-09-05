import { EaCDetails } from "./.deps.ts";
import type { EaCAccessConfigurationDetails } from "./EaCAccessConfigurationDetails.ts";

export type EaCAccessConfigurationAsCode = {
  AccessRightLookups?: string[] | null;

  ProviderLookups?: string[] | null;
} & EaCDetails<EaCAccessConfigurationDetails>;
