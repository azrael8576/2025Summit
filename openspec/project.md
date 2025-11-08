# Project Context

## Purpose

DDD Taiwan 2025 年度成果發表會官方網站。本專案旨在為 Domain Driven Design Taiwan 社群提供一個現代化、響應式的會議網站，展示議程資訊、講者介紹、交通資訊等內容。2025 年度主題聚焦於 AI 時代的軟體開發方法、AI 輔助開發、文件即程式碼、Incident Response 自動化等。

**核心目標：**

- 提供清晰、易用的會議資訊展示平台
- 支援響應式設計，確保多裝置瀏覽體驗
- 優化 SEO 和無障礙性，提升可訪問性
- 部署於 GitHub Pages，實現高效能靜態網站

## Tech Stack

### 核心框架

- **Next.js 15.2.4** - React 框架，配置為 SPA 模式（靜態匯出）
- **React 19** - 前端 UI 框架
- **TypeScript 5** - 型別安全的 JavaScript 超集

### 樣式與 UI

- **Tailwind CSS 3.4** - 實用優先的 CSS 框架
- **Radix UI** - 無樣式的無障礙 UI 組件庫（透過 shadcn/ui）
- **shadcn/ui** - 基於 Radix UI 的組件系統
- **Geist Font** - 字體系統（Sans 和 Mono）
- **Lucide React** - 圖示庫

### 工具與工具鏈

- **pnpm** - 快速的包管理器
- **PostCSS** - CSS 處理工具
- **ESLint** - 程式碼檢查工具（使用 Next.js 預設配置）
- **Web Vitals** - 效能監控

### 表單與驗證

- **React Hook Form** - 表單管理
- **Zod** - 型別安全的 schema 驗證
- **@hookform/resolvers** - React Hook Form 與 Zod 整合

### 其他依賴

- **next-themes** - 主題切換支援
- **date-fns** - 日期處理
- **clsx** + **tailwind-merge** - 條件式 className 合併

## Project Conventions

### Code Style

**命名規範：**

- 檔案名稱：使用 kebab-case（如 `error-handler.ts`）
- 元件檔案：使用 PascalCase（如 `Header.tsx`）
- 變數與函數：使用 camelCase
- 常數：使用 UPPER_SNAKE_CASE（如 `BASE_PATH`）
- 型別與介面：使用 PascalCase（如 `AppError`）

**程式碼組織：**

- 使用 TypeScript 嚴格模式（`strict: true`）
- 優先使用函數式元件和 React Hooks
- 使用 `"use client"` 標記客戶端元件
- 使用 `@/` 路徑別名（配置於 `tsconfig.json`）

**註解與文件：**

- 使用 JSDoc 註解說明複雜函數
- 在配置檔案中說明設計決策（如 Vibe-Coding 原則）
- 使用繁體中文註解說明業務邏輯

**格式化：**

- 遵循 Next.js 和 ESLint 預設規則
- 使用 2 空格縮排
- 使用單引號（由 ESLint 自動處理）

### Architecture Patterns

**SPA 架構：**

- 使用 Next.js 靜態匯出模式（`output: 'export'`）
- 所有頁面在建構時預渲染為靜態 HTML
- 支援 GitHub Pages 部署（basePath: `/2025`）

**配置集中化（Vibe-Coding 原則）：**

- 所有配置集中於 `lib/config.ts` 和 `lib/config.mjs`
- 避免魔法字串分散於程式碼中
- 使用統一常數管理（`lib/constants.ts`）

**元件化設計：**

- 頁面元件位於 `app/` 目錄（Next.js App Router）
- 可重用元件位於 `components/` 目錄
- 佈局元件（Header, Footer）位於 `components/layout/`
- UI 基礎元件（shadcn/ui）位於 `components/ui/`

**錯誤處理模式：**

- 使用單例模式的 `ErrorHandler` 類別（`lib/error-handler.ts`）
- 集中化錯誤記錄與處理
- 提供安全的預設值回退機制

**路徑管理：**

- 使用 `lib/paths.ts` 統一處理 SPA 模式下的路徑
- 自動偵測 basePath（支援開發與生產環境）
- 圖片路徑包含版本參數以破解快取

**資料管理：**

- 會議資料集中於 `lib/data/conference.ts`
- 使用 TypeScript 型別確保資料結構一致性
- 自訂 Hooks（如 `useConferenceData`）封裝資料邏輯

**無障礙設計：**

- 使用語義化 HTML 標籤
- 提供 ARIA 標籤和角色屬性
- 實作「跳至主要內容」連結
- 確保鍵盤導航支援

### Testing Strategy

**目前狀態：**

- 專案目前未包含測試檔案
- 建議未來加入測試以提升程式碼品質

**建議的測試策略：**

- **單元測試**：使用 Jest 或 Vitest 測試工具函數和 Hooks
- **元件測試**：使用 React Testing Library 測試 UI 元件
- **E2E 測試**：使用 Playwright 測試關鍵使用者流程
- **視覺回歸測試**：使用 Chromatic 或 Percy 確保 UI 一致性

**測試優先順序：**

1. 核心業務邏輯（路徑處理、配置管理）
2. 表單驗證與提交流程
3. 響應式設計在不同裝置上的表現
4. 無障礙功能（鍵盤導航、螢幕閱讀器支援）

### Git Workflow

**分支策略：**

- `main` 分支：生產環境穩定版本
- `gh-pages` 分支：GitHub Pages 部署分支（自動部署）
- 功能分支：`feature/功能名稱`（如 `feature/AmazingFeature`）

**提交規範：**

- 使用清晰的提交訊息描述變更內容
- 範例：`git commit -m 'Add some AmazingFeature'`
- 建議遵循 Conventional Commits 格式（可選）

**Pull Request 流程：**

1. Fork 專案或建立功能分支
2. 實作功能並提交變更
3. 推送至遠端分支
4. 建立 Pull Request
5. 等待審查與合併

**部署流程：**

- Push 至 `main` 分支時自動觸發部署
- 建置指令：`pnpm build`
- 輸出目錄：`out/`
- 部署目標：GitHub Pages（`gh-pages` 分支）

## Domain Context

**DDD Taiwan 社群：**

- Domain Driven Design Taiwan 是台灣的 DDD 社群組織
- 致力於促進軟體開發者、架構師、團隊領導者交流
- 透過工作坊、演講、實作活動分享 DDD 最佳實踐

**2025 年度會議主題：**

- AI 時代的軟體開發方法
- AI 輔助開發
- 文件即程式碼
- Incident Response 自動化

**會議資訊結構：**

- 議程（Agenda）：多個時段的演講和工作坊
- 講者（Speakers）：講者介紹與背景
- 交通資訊（Transportation）：會場位置與交通方式
- 大會守則（Rules）：參與規則與注意事項
- 購票（Tickets）：報名與購票流程

**使用者角色：**

- 參與者：瀏覽議程、講者資訊、報名參加
- 講者：查看自己的議程安排
- 主辦單位：管理會議內容與資訊

## Important Constraints

**技術限制：**

- **SPA 模式限制**：必須使用靜態匯出，無法使用 Next.js 的 SSR/API Routes
- **圖片優化**：必須停用 Next.js 圖片優化（`unoptimized: true`）以支援靜態匯出
- **BasePath 要求**：必須支援 `/2025` 路徑前綴（GitHub Pages 子路徑部署）
- **建置時錯誤處理**：`eslint` 和 `typescript` 錯誤在建置時被忽略（`ignoreDuringBuilds: true`）

**部署限制：**

- **靜態網站**：僅支援靜態檔案部署，無後端服務
- **GitHub Pages**：必須符合 GitHub Pages 的檔案結構要求
- **路徑處理**：必須正確處理 basePath 以確保資源載入正常

**效能考量：**

- **圖片快取**：使用版本參數（`?v=版本號`）控制快取
- **程式碼分割**：Next.js 自動處理程式碼分割
- **字體載入**：使用 Geist 字體，需注意載入效能

**無障礙性要求：**

- 必須遵循 WCAG 2.1 無障礙設計原則
- 確保鍵盤導航完整支援
- 提供適當的 ARIA 標籤

**瀏覽器支援：**

- 支援現代瀏覽器（Chrome, Firefox, Safari, Edge）
- 需考慮行動裝置瀏覽體驗

## External Dependencies

**部署服務：**

- **GitHub Pages** - 靜態網站託管服務
  - 網域：`ddd-tw-conference.github.io`
  - Base Path：`/2025`
  - 部署分支：`gh-pages`

**社群平台（參考資訊，非技術依賴）：**

- **Facebook 社團**：Domain Driven Design Taiwan
- **YouTube 頻道**：DDD Taiwan
- **Line 社群**：DDD Taiwan 討論群組

**未來可能的 API 整合（預留）：**

- 講者資訊 API（`/api/speakers`）
- 議程資訊 API（`/api/agenda`）
- 報名註冊 API（`/api/registration`）

**字體服務：**

- **Geist Font** - 透過 npm 套件載入，無外部 CDN 依賴

**監控與分析（未來擴展）：**

- **Web Vitals** - 已整合，用於效能監控
- 可考慮整合 Google Analytics 或其他分析工具
