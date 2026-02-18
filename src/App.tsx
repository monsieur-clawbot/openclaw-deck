import { useState, useEffect } from "react";
import { useDeckInit } from "./hooks";
import { useDeckStore } from "./lib/store";
import { AgentColumn } from "./components/AgentColumn";
import { TopBar } from "./components/TopBar";
import { StatusBar } from "./components/StatusBar";
import { AddAgentModal } from "./components/AddAgentModal";
import type { AgentConfig } from "./types";
// ─── Agent Column Config ─────────────────────────────────────────────────────
// To add, remove, or reorder agent columns, edit src/config/agents.ts.
// No need to touch component code.
import { PINNED_AGENTS } from "./config/agents";
import "./App.css";

/**
 * Map pinned agent definitions from config to the AgentConfig shape
 * expected by the store and components.
 *
 * The icon field uses the 1-based column index so the numbered badge
 * in the column header is preserved. To use custom icons, set icon
 * per entry in src/config/agents.ts and pass it through here.
 */
function buildPinnedAgents(): AgentConfig[] {
  return PINNED_AGENTS.map((def, i) => ({
    id: def.id,
    name: def.name,
    icon: String(i + 1),
    accent: def.accent,
    context: "",
    model: "claude-sonnet-4-5",
  }));
}

function getGatewayConfig() {
  const params = new URLSearchParams(window.location.search);
  let gatewayUrl =
    params.get("gateway") ||
    import.meta.env.VITE_GATEWAY_URL ||
    "ws://127.0.0.1:18789";

  // Resolve relative paths (e.g. "/ws") to full WebSocket URLs
  if (gatewayUrl.startsWith("/")) {
    const proto = window.location.protocol === "https:" ? "wss:" : "ws:";
    gatewayUrl = `${proto}//${window.location.host}${gatewayUrl}`;
  }

  return {
    gatewayUrl,
    token:
      params.get("token") ||
      import.meta.env.VITE_GATEWAY_TOKEN ||
      undefined,
  };
}

export default function App() {
  const [activeTab, setActiveTab] = useState("All Agents");
  const [showAddModal, setShowAddModal] = useState(false);
  const [initialAgents] = useState<AgentConfig[]>(() =>
    buildPinnedAgents()
  );
  const columnOrder = useDeckStore((s) => s.columnOrder);
  const createAgentOnGateway = useDeckStore((s) => s.createAgentOnGateway);

  const { gatewayUrl, token } = getGatewayConfig();

  useDeckInit({
    gatewayUrl,
    token,
    agents: initialAgents,
  });

  // Cmd+1-9 to focus column inputs
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey && e.key >= "1" && e.key <= "9") {
        const index = parseInt(e.key, 10) - 1;
        const input = document.querySelector<HTMLTextAreaElement>(
          `[data-deck-input="${index}"]`
        );
        if (input) {
          e.preventDefault();
          input.focus();
        }
      } else if (e.metaKey && e.key === "k") {
        e.preventDefault();
        setShowAddModal((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="deck-root">
      <TopBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onAddAgent={() => setShowAddModal(true)}
      />

      <div className="deck-columns">
        {columnOrder.map((agentId, index) => (
          <AgentColumn key={agentId} agentId={agentId} columnIndex={index} />
        ))}
      </div>

      <StatusBar />

      {showAddModal && (
        <AddAgentModal
          onClose={() => setShowAddModal(false)}
          onCreate={createAgentOnGateway}
        />
      )}
    </div>
  );
}
