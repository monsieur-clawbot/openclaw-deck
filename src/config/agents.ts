// Edit this file to customize the agent deck.
// Add, remove, or reorder entries to change what columns appear.
// Each entry maps to one column in the deck UI.

/**
 * Definition of a single agent column.
 * Corresponds to an AgentConfig entry consumed by the store and components.
 */
export interface AgentDefinition {
  /** OpenClaw agent id — must match gateway config (e.g. "main", "coo", "cso") */
  id: string;
  /** Display name shown in the column header */
  name: string;
  /** Hex color used for the column accent (border, cursor, status indicator) */
  accent: string;
}

/**
 * The ordered list of pinned agent columns shown in the deck.
 * Edit this array to add, remove, or reorder agents without touching component code.
 *
 * To add a new agent:
 *   1. Add an entry here with a unique id, display name, and accent color.
 *   2. Make sure the agent id is registered in your OpenClaw gateway config.
 */
export const PINNED_AGENTS: AgentDefinition[] = [
  { id: "main",              name: "Monsieur Claw",   accent: "#22d3ee" },
  { id: "coo",               name: "COO",             accent: "#a78bfa" },
  { id: "cso",               name: "CSO",             accent: "#34d399" },
  { id: "codex-engineer",    name: "CodexEngineer",   accent: "#f59e0b" },
  { id: "marketing-analyst", name: "MarketingAnalyst", accent: "#f472b6" },
  { id: "plan-optimizer",    name: "PlanOptimizer",   accent: "#60a5fa" },
];
