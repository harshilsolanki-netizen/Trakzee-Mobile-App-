# 📱 Trakzee Mobile App — UI & Design System Guidelines
> **Extracted & Unified from the 13 Reference Mobile Application Screens**  
> *Target Application: Trakzee Fleet & Telematics Mobile Platform*

---

## 1. Design Philosophy & Visual Tone
The redesign draws from modern B2B/SaaS mobile design patterns characterized by:
- **Clean, Airy Surfaces:** A cool off-white background (`#F8FAFC`) with pure white card surfaces (`#FFFFFF`).
- **Atmospheric Top Glow:** A soft radial gradient (`#E0F2FE` fading into `#F8FAFC`) placed behind the status bar and top header to introduce depth without visual clutter.
- **Vibrant Primary Accent:** Electric Sky Blue (`#0095FF`) used intentionally for key interactive elements, active selection states, and primary CTAs.
- **Soft Pastel Categorization:** Distinct pastel tint backgrounds paired with saturated monochrome icons to organize categories, files, modules, and teams.
- **Friendly Rounded Architecture:** High corner radii across all elements (`14px` squircles for badges, `16px` for inputs, `18px` for cards, `30px` for bottom sheets, `9999px` for chips and FABs).

---

## 2. Color Palette & Token System

### 2.1 Core Brand Colors
| Token Name | Hex Code | Visual Role |
| :--- | :--- | :--- |
| `color-primary` | `#0095FF` | Active tabs, primary buttons, date selection, progress indicators, focused borders |
| `color-primary-dark` | `#0077E6` | Gradient stops in hero cards, pressed button state |
| `color-primary-light` | `#E0F2FE` | Active badge backgrounds, light tint fills |
| `color-primary-glow` | `rgba(0, 149, 255, 0.30)` | Drop shadow glow for Primary CTAs and Floating Action Buttons |

### 2.2 Backgrounds & Neutrals
| Token Name | Hex Code | Role |
| :--- | :--- | :--- |
| `color-canvas` | `#F8FAFC` | Main screen background behind scrollable cards |
| `color-surface` | `#FFFFFF` | Card surface, bottom sheet modal, top app bars |
| `color-surface-subtle` | `#F1F5F9` | Disabled CTA buttons, inactive pill backgrounds |
| `color-scrim` | `rgba(15, 23, 42, 0.45)` | Backdrop dimmer behind bottom sheets |

### 2.3 Typography Colors
| Token Name | Hex Code | Role |
| :--- | :--- | :--- |
| `text-primary` | `#0F172A` | Primary titles, bold headers, oversized numbers |
| `text-secondary` | `#475569` | Body paragraphs, item subtitles, metadata descriptions |
| `text-muted` | `#94A3B8` | Input placeholders, timestamps, disabled button text |
| `text-inverse` | `#FFFFFF` | Text on primary buttons, active pills, hero cards |

### 2.4 Status & Priority Badges
| Status | Badge Background | Badge Text | Use Cases in Trakzee |
| :--- | :--- | :--- | :--- |
| **High / Critical** | `#FEE2E2` | `#EF4444` | High priority alerts, SOS tickets, overspeeding alerts |
| **Medium / Warning** | `#FEF3C7` | `#D97706` | Medium priority tasks, idle warnings, maintenance due |
| **Low / Normal** | `#DCFCE7` | `#16A34A` | Low priority tasks, regular vehicle status, resolved items |
| **Online / Active** | `#22C55E` | — | User presence dot, active vehicle ignition indicator |

### 2.5 Pastel Category Color Tokens (Squircle Badges)
| Category Tint | Background | Icon Color | Example Trakzee Application |
| :--- | :--- | :--- | :--- |
| **Sky Blue** | `#E0F2FE` | `#0284C7` | Vehicles, Live Tracking, People module |
| **Purple** | `#F3E8FF` | `#9333EA` | Geofence, Time/History playback, Figma files |
| **Pink** | `#FCE7F3` | `#DB2777` | Projects, New announcements, Favorites |
| **Green** | `#DCFCE7` | `#16A34A` | Fuel monitoring, Eco-driving, Excel sheets |
| **Orange / Peach** | `#FFEDD5` | `#EA580C` | Maintenance, Alerts, Time off |
| **Salmon / Coral** | `#FEE2E2` | `#DC2626` | Tickets, PDF documents, Critical faults |

---

## 3. Typography Scale & Hierarchy

**Font Family:** `Plus Jakarta Sans` or `Inter`, followed by system san-serif (`-apple-system`, `BlinkMacSystemFont`).

| Level | Size | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | `36px` | Bold (`700`) | `44px` | Hero completion percentages (`72%`), leave quota (`18`) |
| **Title 1 / Large** | `26px–28px` | Bold (`700`) | `34px` | Screen titles (`Projects`, `More`, `New task`) |
| **Title 2 / Header** | `20px–22px` | SemiBold (`600`) | `28px` | Bottom sheet title, card section titles |
| **Title 3 / Metric** | `20px` | Bold (`700`) | `24px` | Metric card counts (`837`, `20`) |
| **Card Heading** | `16px–17px` | SemiBold (`600`) | `22px` | Project names, task titles, team member names |
| **Body Primary** | `15px` | Medium (`500`) | `22px` | Form inputs, brief descriptions, notification titles |
| **Body Secondary** | `13px–14px` | Regular (`400`) | `18px` | Subtitles, client names, helper texts, table rows |
| **Caption / Meta** | `11px–12px` | Medium (`500`) | `16px` | Timestamps (`2h ago`), section headers (`WORKSPACE`), tags |

---

## 4. Spacing, Corner Radius & Shadows

### 4.1 Corner Radii (`border-radius`)
* **Squircles / Badges:** `14px` (Used for squircle icon containers `40x40px` or `44x44px`)
* **Form Inputs & Textareas:** `16px`
* **Standard Cards:** `18px` (Project cards, task cards, preference cards)
* **Hero Cards & Large Panels:** `24px` (Top banner card with gradient)
* **Bottom Sheet Top Corners:** `30px`
* **Pills & Circular Badges:** `9999px` (Filter chips, date selectors, avatars, FAB)

### 4.2 Elevation & Drop Shadows
```css
/* Standard Card Elevation */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02);

/* Primary CTA Button Glow */
box-shadow: 0 8px 20px rgba(0, 149, 255, 0.28);

/* Floating Action Button (FAB) Glow */
box-shadow: 0 10px 24px rgba(0, 149, 255, 0.35);

/* Bottom Sheet Scrim Shadow */
box-shadow: 0 -8px 28px rgba(0, 0, 0, 0.08);
```

---

## 5. Structural Layout & Mobile Scaffold

1. **Status Bar & Atmospheric Header:**
   - 9:41 dynamic island spacing on iOS (`44px` status area).
   - Atmospheric radial gradient (`radial-gradient(circle at 50% 0%, #DCEEFE 0%, #F8FAFC 70%)`).
2. **Main Scroll Content:**
   - Horizontal screen padding: `16px` or `20px`.
   - Vertical card spacing: `12px` to `16px` between distinct cards.
3. **Bottom Tab Bar (`~80px` height including safe area):**
   - White surface (`#FFFFFF`) with top border `1px solid #EEF2F6`.
   - 5 icons evenly spaced.
   - **Active State Indicator:** Active tab has a solid blue horizontal bar (`32px` wide, `3px` tall, rounded corners) aligned at the top border edge directly above the active tab!
