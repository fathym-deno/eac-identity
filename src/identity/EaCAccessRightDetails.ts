import { EaCVertexDetails } from "./.deps.ts";

/**
 * Details describing an Access Right.
 * Extends base vertex details and supports organizing via tags.
 */
export type EaCAccessRightDetails = EaCVertexDetails & {
  Enabled: boolean;

  /** Optional tags for grouping and discovery in UX. */
  Tags?: string[];
};
