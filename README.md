# OpenClaw Deck 🦞

A multi-column chat interface for [OpenClaw](https://openclaw.ai) agents. Chat with multiple AI agents side-by-side in a clean, responsive deck layout.

![OpenClaw Deck](https://img.shields.io/badge/OpenClaw-Deck-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Features

- **Multi-column layout** — Chat with 7 agents simultaneously by default
- **Markdown rendering** — Full markdown support with syntax highlighting
- **Keyboard navigation** — Fast switching between columns
- **Real-time WebSocket** — Live connection to OpenClaw Gateway
- **Clean UI** — Compact, readable design optimized for productivity

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [OpenClaw Gateway](https://openclaw.ai) running locally

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure connection

Copy the example environment file and add your OpenClaw Gateway token:

```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_GATEWAY_URL=ws://127.0.0.1:18789
VITE_GATEWAY_TOKEN=your_gateway_token_here
```

To get your gateway token, run:
```bash
openclaw config get gateway.token
```

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Keyboard Shortcuts

- **Tab** / **Shift+Tab** — Navigate between agent input fields
- **Cmd+1–9** — Jump directly to a specific column
- **Cmd+K** — Open the Add Agent modal

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Configuration

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_GATEWAY_URL` | `ws://127.0.0.1:18789` | OpenClaw Gateway WebSocket URL |
| `VITE_GATEWAY_TOKEN` | (required) | Your gateway authentication token |

### Customizing Agents

Edit `src/App.tsx` to customize the default agent configuration:

```typescript
const AGENT_ACCENTS = [
  "#22d3ee", // cyan
  "#a78bfa", // purple
  // ... add more colors
];

function buildDefaultAgents(count: number): AgentConfig[] {
  // customize agent setup here
}
```

## Tech Stack

- **React** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool and dev server
- **Zustand** — State management
- **react-markdown** — Markdown rendering
- **highlight.js** — Syntax highlighting

## Project Structure

```
openclaw-deck/
├── src/
│   ├── components/      # React components
│   │   ├── AgentColumn.tsx
│   │   ├── TopBar.tsx
│   │   └── StatusBar.tsx
│   ├── lib/            # Core libraries
│   │   ├── gateway-client.ts  # WebSocket client
│   │   └── store.ts           # Zustand store
│   ├── hooks/          # React hooks
│   ├── types/          # TypeScript types
│   └── App.tsx         # Main app component
├── public/             # Static assets
└── dist/              # Build output (gitignored)
```

## Development

### Running Tests

```bash
npm test
```

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npm run type-check
```

## Troubleshooting

### Connection Issues

**Problem:** "WebSocket error" or "Handshake failed"

**Solution:**
1. Ensure OpenClaw Gateway is running: `openclaw status`
2. Check your gateway token is correct in `.env`
3. Verify the gateway URL matches your setup

### White Screen

**Problem:** App loads but shows a white screen

**Solution:**
1. Check browser console for errors (F12)
2. Ensure `npm install` completed successfully
3. Try clearing browser cache and reloading

### Can't Type in Columns

**Problem:** Input fields are disabled

**Solution:**
- This means the gateway connection failed
- Check the WebSocket connection status in the status bar
- Verify your `VITE_GATEWAY_TOKEN` is correct

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Related Projects

- [OpenClaw](https://github.com/openclaw/openclaw) — The main OpenClaw project
- [OpenClaw Docs](https://docs.openclaw.ai) — Official documentation

## Acknowledgments

Built with ❤️ for the OpenClaw community.
