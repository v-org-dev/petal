# 技术栈说明

## 核心框架
- Next.js 16（App Router）+ React 19，使用 TypeScript 严格模式构建，入口在 `src/app`。
- 中间件与 API：`middleware.ts` 结合 `@supabase/ssr` 刷新会话；API 路由位于 `src/app/api`。

## 样式与组件
- Tailwind CSS 4（`@import 'tailwindcss'` + `@tailwindcss/postcss`），主题变量集中在 `src/app/globals.css`。
- 组件库：自研 UI 位于 `src/components/ui`，结合 `@headlessui/react`、`@tailwindplus/elements`；动画使用 `motion/react`；图标来自 `@heroicons/react` 与 `lucide-react`。

## 认证与数据
- Supabase 提供身份认证与会话管理，封装在 `src/lib/supabase/{client,server,middleware}.ts`，依赖环境变量 `NEXT_PUBLIC_SUPABASE_URL`、`NEXT_PUBLIC_SUPABASE_ANON_KEY`、`NEXT_PUBLIC_APP_URL`。

## 工具链
- Lint：ESLint 9 + `eslint-config-next`（Core Web Vitals / TypeScript）。
- 格式化：Prettier 3，插件自动整理 import 与 Tailwind 类名。
- 脚本：`npm run dev`、`npm run build`、`npm run start`、`npm run lint`。

## 目录速览
- `src/app`：页面、布局与 API 路由（含营销页、工作区、认证流程）。
- `src/components`：可复用 UI/营销模块与图标。
- `src/lib`：Supabase 封装和通用工具。
