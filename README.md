🌓 React Theme Management API
A professional-grade theme switching solution built for modern React applications using Tailwind CSS v4. This project implements a global Context provider that synchronizes user interface preferences with the browser's hardware capabilities and persistent storage.


🌟 Core Concepts
1. The Context Architecture
The API uses a Provider-Consumer model. By wrapping the application root, the ThemeContext creates a single source of truth for the visual state. This eliminates "prop-drilling" and allows any UI element—from a main Hero section to a tiny nested button—to respond instantly to theme changes.

2. Tailwind v4 "CSS-First" Integration
Unlike previous versions of Tailwind that relied on JavaScript configuration files, this project leverages the v4 Engine. It uses a custom CSS @variant to bridge the gap between React's state and Tailwind's utility classes. When the Context updates the DOM, Tailwind automatically re-scans the tree and applies the correct styles.

3. Smart Persistence & Sync
Local Storage: User choices are cached so the "dark mode" preference survives page refreshes and browser restarts.

System Preference (Media Queries): On the first visit, the API intelligently queries the user's Operating System settings (macOS/Windows/Linux dark mode) to provide a seamless "out-of-the-box" experience.

DOM Injection: The API directly manipulates the document.documentElement class list, ensuring that theme variables are available at the highest possible level in the DOM tree.
