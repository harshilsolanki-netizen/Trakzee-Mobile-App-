# 📱 Trakzee Mobile Design System & UI Guideline

This project contains the complete, pixel-accurate UI Design System and Component Specification extracted and unified from the 13 reference mobile screens for the **Trakzee Mobile App** redesign.

---

## 📁 Repository Structure

```text
trakzee-mobile-design-system/
├── DESIGN_SYSTEM_GUIDELINES.md   # Master design guidelines (colors, typography, grid, elevation)
├── COMPONENTS_SPECIFICATION.md   # Exhaustive specs for all cards, inputs, CTAs, sheets, nav, badges
├── design-tokens.json           # Standard W3C Tokens (Tokens Studio / Figma / React Native / Flutter)
├── theme.css                    # CSS Custom Properties / variables
├── tailwind.config.js           # Ready-to-use Tailwind CSS configuration
├── index.html                   # Interactive visual design system catalog & mobile phone simulator
└── README.md                    # Project documentation & Git setup instructions
```

---

## 🚀 How to View the Interactive Component Catalog

Simply open `index.html` in your browser:
* Double-click `index.html`, or
* Run via terminal:
  ```powershell
  Start-Process index.html
  ```

---

## 🔗 How to Connect & Push to Your Git Remote Repository

Run the following commands in your PowerShell / Terminal:

```powershell
# 1. Navigate to the project directory
cd "C:\Users\Uffizio_User\.gemini\antigravity\scratch\trakzee-mobile-design-system"

# 2. Rename default branch to main
git branch -M main

# 3. Add your remote GitHub / GitLab / Bitbucket repository URL
# (Replace YOUR_GIT_REPO_URL with your actual git link)
git remote add origin YOUR_GIT_REPO_URL

# 4. Push the design system files
git push -u origin main
```
