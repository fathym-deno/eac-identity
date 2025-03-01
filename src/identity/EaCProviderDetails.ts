import { EaCVertexDetails } from "./.deps.ts";

export type EaCProviderDetails = {
  ClientID: string;

  ClientSecret: string;

  IsPrimary?: boolean;

  Scopes: string[];
} & EaCVertexDetails;

export function isEaCProviderDetails(
  details: unknown,
): details is EaCProviderDetails {
  const prvdrDetails = details as EaCProviderDetails;

  return (
    prvdrDetails &&
    prvdrDetails.ClientID !== undefined &&
    typeof prvdrDetails.ClientID === "string" &&
    prvdrDetails.ClientSecret !== undefined &&
    typeof prvdrDetails.ClientSecret === "string" &&
    prvdrDetails.Scopes !== undefined &&
    Array.isArray(prvdrDetails.Scopes)
  );
}
