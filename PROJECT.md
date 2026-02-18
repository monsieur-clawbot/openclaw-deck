# PROJECT.md — openclaw-deck (monsieur-clawbot fork)

## What is this?

**OpenClaw Deck** is a multi-column chat interface for [OpenClaw](https://openclaw.ai) agents. It lets you chat with up to 7 AI agents simultaneously in a side-by-side deck layout, with features including:

- Multi-column layout for parallel agent conversations
- Full Markdown rendering with syntax highlighting
- Keyboard navigation (Tab, Cmd+1–9, Cmd+K)
- Real-time WebSocket connection to the OpenClaw Gateway
- Clean, productivity-focused UI

Upstream repo: https://github.com/kellyclaudeai/openclaw-deck

## This Fork

This is **monsieur-clawbot's** fork of openclaw-deck, maintained at:
https://github.com/monsieur-clawbot/openclaw-deck

It serves as our local base for customization — tweaking the UI, adding agent layouts, and experimenting with new features without touching upstream.

## Getting Started

```bash
cp .env.example .env
# Edit .env with your OpenClaw Gateway token and URL
npm install
npm start
```

## Notes

- Keep `.env` out of git (it's in `.gitignore`)
- Use `.env.example` as the template for all required env vars
- Pull upstream changes via the `upstream` remote as needed
