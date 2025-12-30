# Task 5: 为Settings的Create New Key按钮添加RightDrawer

## 目标
为Settings页面API标签的"Create New Key"按钮添加drawer功能，点击时打开一个drawer用于创建新的API Key。

## 当前状态分析

### 文件位置
`/Users/kerone/Desktop/petal/src/app/dashboard/settings/page.tsx`

### 当前实现
- Create New Key按钮位于API标签头部（第203行）
- 目前是一个静态按钮，没有点击事件
```tsx
<Button color="indigo">Create New Key</Button>
```

## 目标实现

为Create New Key按钮添加drawer：
1. 添加drawer状态控制（createKeyDrawerOpen）
2. 为按钮添加onClick事件
3. 创建Create New Key的drawer组件
4. 在drawer中实现API Key创建表单

## 实现步骤

### 1. 添加导入
在文件顶部添加RightDrawer（第10行后）：
```typescript
import RightDrawer from '@/components/ui/catalyst/drawer'
```

### 2. 添加drawer状态
在第23行后添加状态：
```typescript
const [createKeyDrawerOpen, setCreateKeyDrawerOpen] = useState(false)
```

### 3. 修改Create New Key按钮
修改第203行的按钮：
```tsx
<Button color="indigo" onClick={() => setCreateKeyDrawerOpen(true)}>
  Create New Key
</Button>
```

### 4. 添加Create New Key Drawer
在页面底部（第238行的外层div关闭之前）添加drawer：
```tsx
{/* Create New Key Drawer */}
<RightDrawer
  open={createKeyDrawerOpen}
  onClose={setCreateKeyDrawerOpen}
  title="Create New API Key"
  maxWidth="md"
>
  <div className="space-y-6">
    <div>
      <label className="block text-sm font-medium text-zinc-950 dark:text-white mb-2">
        Key Name
      </label>
      <input
        type="text"
        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
        placeholder="My API Key"
      />
      <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
        A descriptive name to help you identify this key
      </p>
    </div>

    <div>
      <label className="block text-sm font-medium text-zinc-950 dark:text-white mb-2">
        Permissions
      </label>
      <select className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-white">
        <option>Read Only</option>
        <option>Read & Write</option>
        <option>Full Access</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-zinc-950 dark:text-white mb-2">
        Description (optional)
      </label>
      <textarea
        rows={4}
        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
        placeholder="Describe what this key will be used for..."
      />
    </div>

    <div className="rounded-md bg-amber-50 p-4 dark:bg-amber-900/20">
      <p className="text-sm text-amber-800 dark:text-amber-200">
        <strong>Note:</strong> The API key will only be shown once. Make sure to copy it and store it securely.
      </p>
    </div>

    <div className="flex gap-2 pt-4">
      <Button outline className="flex-1" onClick={() => setCreateKeyDrawerOpen(false)}>
        Cancel
      </Button>
      <Button color="indigo" className="flex-1">
        Create Key
      </Button>
    </div>
  </div>
</RightDrawer>
```

## 验收标准
- [ ] 已导入RightDrawer组件
- [ ] 添加了createKeyDrawerOpen状态
- [ ] Create New Key按钮有onClick事件
- [ ] 点击按钮能打开drawer
- [ ] drawer包含API Key创建表单（名称、权限、描述）
- [ ] 表单有警告提示信息
- [ ] 表单有Cancel和Create Key按钮
- [ ] Cancel按钮能关闭drawer
- [ ] drawer样式与设计系统一致
- [ ] 代码格式正确，无语法错误

## 注意事项
- 表单内容目前是静态的，不需要实现实际的创建逻辑
- 确保drawer的maxWidth为'md'
- 使用项目统一的输入框样式
- 添加警告提示，提醒用户API key只显示一次
