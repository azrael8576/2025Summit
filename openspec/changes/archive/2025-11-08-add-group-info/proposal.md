# Change: Add Group Info

## Why

為了讓使用者能清楚了解各組別的職責與聯絡窗口，需要在年會網站上新增「組別資訊」功能。這將幫助參與者了解不同組別的工作內容，並在需要時能快速找到對應的聯絡人。

## What Changes

- 新增「組別資訊」頁面（`/groups`）
- 在導航選單中新增「組別資訊」連結
- 建立組別資料結構與資料管理
- 實作組別資訊展示元件，包含：
  - 組別名稱
  - 聯絡人
  - 摘要說明
  - 主要職責列表
- 支援四個組別：報到組、引導組、技術組、場地組

## Impact

- **Affected specs**: 新增 `groups` capability
- **Affected code**:
  - `app/groups/page.tsx` (新頁面)
  - `lib/data/conference.ts` (新增組別資料結構)
  - `components/layout/Header.tsx` (新增導航連結)
  - `components/groups/` (新元件目錄，可選)

