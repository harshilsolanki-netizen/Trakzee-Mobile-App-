# 🧩 Trakzee Mobile App — Comprehensive Component Specification
> Exhaustive component anatomy, styling values, and states synthesized across all 13 reference screens.

---

## 1. Cards & Containers

### 1.1 Metric Stat Card (Screen 1)
* **Structure:** 2-column grid (`calc(50% - 6px)` width).
* **Surface:** Background `#FFFFFF`, `border-radius: 18px`, `border: 1px solid #EEF2F6`, `padding: 16px`.
* **Top Row:**
  * Left: Pastel squircle icon badge (`36x36px`, `border-radius: 12px`, e.g., lavender `#EDE9FE` with purple icon `#9333EA`).
  * Right: Trend Pill badge (`+14.20%` in `#16A34A` or `-01.09%` in `#EF4444`).
* **Metric Value:** Oversized bold typography (`font-size: 26px`, `font-weight: 700`, color `#0F172A`).
* **Subtitle:** Caption text (`font-size: 13px`, color `#64748B`, e.g., "Total clients", "Active fleet").
* **Progress Bar Indicator:** Slim dual-tone horizontal track (`height: 4px`, `border-radius: 9999px`, background `#F1F5F9`, filled segment in purple or amber).

### 1.2 Project / Vehicle Card (Screen 2)
* **Surface:** Background `#FFFFFF`, `border-radius: 18px`, `border: 1px solid #EEF2F6`, `padding: 16px`, `margin-bottom: 12px`.
* **Header Row:**
  * Leading squircle category icon (`40x40px`, `border-radius: 14px`).
  * Title & Subtitle stacked (`16px` SemiBold title + `13px` subtitle).
  * Priority Badge (Right): High (`#FEE2E2` bg, `#EF4444` text) or Medium (`#FEF3C7` bg, `#D97706` text).
* **Footer Row:**
  * Circular progress ring with centered completion percentage (`72%`, `45%`, `88%`).
  * Metadata icon text (calendar icon + date, check icon + task ratio).
  * Overlapping circular avatar stack (up to 4 avatars with `2px` white outline border).

### 1.3 Hero Gradient Banner Card (Screens 3, 4, 5, 6, 10)
* **Surface:** Full-width card with vivid gradient:
  ```css
  background: linear-gradient(135deg, #0091FF 0%, #0077E6 100%);
  border-radius: 24px;
  padding: 20px;
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
  ```
* **Interior Visuals:** Subtle decorative translucent concentric circular arcs (`rgba(255, 255, 255, 0.08)`).
* **Content:**
  * Squircle badge (`42x42px`) with semi-transparent white background (`rgba(255, 255, 255, 0.20)`).
  * Title & Organization in white.
  * Oversized completion stat (`72% completed` or `18 days left`).
  * Horizontal rounded progress track (`height: 6px`, background `rgba(255, 255, 255, 0.25)`, filled bar in pure white).
  * Overlapping avatar group.

### 1.4 List Item Cards (Task & Team Members - Screens 4, 5)
* **Surface:** Background `#FFFFFF`, `border-radius: 16px`, `border: 1px solid #EEF2F6`, `padding: 14px 16px`.
* **Task Card:**
  * Left: Rounded checkbox container (`22x22px`, `border: 1.5px solid #CBD5E1`, `border-radius: 6px`).
  * Center: Bold task title (`15px`) + due date/category subtitle (`13px` muted).
  * Right: Assignee circular avatar (`32x32px`).
* **Team Member Card:**
  * Left: Avatar with green active presence dot (`8x8px`, `#22C55E`, positioned bottom-right of avatar).
  * Center: Member name bold + designation subtitle.
  * Right: Allocation/Performance percentage pill (`82%` in `#F1F5F9` pill with `#475569` text).

### 1.5 2×2 Selection Grid Cards (Screens 10, 11)
* **Layout:** 2 columns × 2 rows grid with `12px` gap.
* **Default State:**
  * Background `#FFFFFF`, `border: 1px solid #EEF2F6`, `border-radius: 16px`, `padding: 16px`.
  * Squircle icon badge + bold title + descriptor caption.
* **Selected State:**
  * Background `#FFFFFF`, `border: 2px solid #0095FF`, `box-shadow: 0 4px 12px rgba(0, 149, 255, 0.10)`.

### 1.6 Dashed Upload Card (Screen 11)
* **Surface:** Background `#FFFFFF`, `border: 1.5px dashed #CBD5E1`, `border-radius: 16px`, `padding: 16px`.
* **Icon:** Paperclip icon on left (`#475569`).
* **Typography:** Title "Attach a screenshot" (`14px` SemiBold) + subtitle "Screenshots help us fix it faster" (`12px` muted).

### 1.7 Grouped Settings Card with Dividers (Screen 12)
* **Surface:** Single unified white card (`border-radius: 18px`, `border: 1px solid #EEF2F6`).
* **Rows:** Separated by `1px solid #F1F5F9` dividers.
* **Content:** Leading squircle icon, title, subtitle, and right-aligned interactive Toggle Switch.

---

## 2. Form Inputs & Textareas

### 2.1 Single-Line Text Input (Screens 2, 8, 9, 11)
* **Dimensions:** Height `52px`, `border-radius: 16px`, horizontal padding `16px`.
* **Default State:**
  * Background: `#FFFFFF`
  * Border: `1px solid #E2E8F0`
  * Placeholder: `#94A3B8`, `14px`, regular weight.
* **Focused State:**
  * Border: `1.5px solid #0095FF`
  * Shadow: `0 0 0 3px rgba(0, 149, 255, 0.12)`
* **Search Input Variant:** Includes left magnifying glass icon and an optional right clear `×` button.

### 2.2 Multi-Line Textarea (Screens 8, 9, 10, 11)
* **Dimensions:** Min-height `110px`, `border-radius: 16px`, internal padding `14px 16px`.
* **Default & Focused State:** Matches single-line text input specifications.

---

## 3. Action Buttons & CTAs

### 3.1 Primary Active CTA ("Send request", "Submit ticket")
```css
height: 54px;
background: #0095FF;
color: #FFFFFF;
font-size: 16px;
font-weight: 600;
border-radius: 16px;
border: none;
box-shadow: 0 8px 20px rgba(0, 149, 255, 0.28);
cursor: pointer;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
```

### 3.2 Primary Disabled CTA ("Create task", "Create project")
```css
height: 54px;
background: #F1F5F9;
color: #94A3B8;
font-size: 16px;
font-weight: 600;
border-radius: 16px;
border: none;
cursor: not-allowed;
```

### 3.3 Secondary Button ("Cancel")
```css
height: 54px;
background: #FFFFFF;
color: #334155;
font-size: 15px;
font-weight: 600;
border-radius: 16px;
border: 1px solid #E2E8F0;
padding: 0 24px;
```

### 3.4 Floating Action Button (FAB) (Screens 2, 13)
```css
width: 58px;
height: 58px;
background: #0095FF;
color: #FFFFFF;
border-radius: 9999px;
border: none;
box-shadow: 0 10px 24px rgba(0, 149, 255, 0.35);
position: fixed;
bottom: 100px;
right: 20px;
display: flex;
align-items: center;
justify-content: center;
```

---

## 4. Chips, Badges & Segmented Controls

### 4.1 Filter Chips with Counts (Screens 2, 13)
* **Dimensions:** Height `36px`, `border-radius: 9999px`, padding `0 16px`.
* **Inactive State:** White background `#FFFFFF`, border `1px solid #E2E8F0`, text `#475569`.
* **Active State:** Solid primary blue `#0095FF`, text `#FFFFFF`, no border.
* **Count Typography:** Embedded count number separated by space (`All 5`, `Active 3`, `On hold 1`).

### 4.2 Segmented Control Tabs (Screens 3, 4, 5, 6, 8, 9, 11)
* **Used For:** `Overview | Tasks | Team | Files` and `To do | In progress | Done` and `High | Medium | Low`.
* **Selected Option:** Solid `#0095FF` background with `#FFFFFF` text.
* **Unselected Options:** Pure white `#FFFFFF` background with `1px solid #E2E8F0` border and `#475569` text.

### 4.3 Date Selector Pills (Screens 1, 8, 9, 10)
* **Structure:** Vertical pill containing day abbreviation (`Thu`) and day number (`11`).
* **Active Single Date:** Pill turns solid blue `#0095FF` with white text.
* **Active Date Range:** Continuous connected blue pills spanning from start day to end day (Screen 10).

---

## 5. Bottom Navigation Bar (Screens 1, 2, 3, 4, 5, 6, 12, 13)
* **Bar Container:** Fixed at bottom, height `84px` (including iOS safe area indicator), white surface `#FFFFFF`, top border `1px solid #EEF2F6`.
* **Items (5 total):**
  1. `Home` (Dashboard icon)
  2. `Projects` (Folder / Fleet icon)
  3. `Board` (Checkbox / Schedule icon)
  4. `Calendar` (Calendar outline icon)
  5. `More` (Settings gear icon)
* **Active State:**
  * Label and icon color: `#0095FF`.
  * **Top Active Line Indicator:** Horizontal bar (`34px` width, `3.5px` height, `border-radius: 2px`) pinned to the top edge above the active item.
* **Inactive State:** Label and icon color: `#64748B`.

---

## 6. Bottom Sheet Action Modal ("Create" - Screen 7)
* **Backdrop Overlay:** `rgba(15, 23, 42, 0.45)` with soft blur.
* **Sheet Container:** White surface, top corner radius `30px`, bottom radius `0`.
* **Drag Pill Handle:** Centered at top, `width: 40px`, `height: 4px`, `border-radius: 9999px`, color `#CBD5E1`, top margin `12px`.
* **Header:** Bold title "Create" (`24px`), subtitle "What are you adding?" (`14px` muted).
* **Action Menu Items:** Full-width rounded cards (`border-radius: 16px`, `border: 1px solid #EEF2F6`) containing pastel squircle icons and descriptions.
