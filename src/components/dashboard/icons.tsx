import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function Icon({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      data-slot="icon"
      {...props}
    >
      {children}
    </svg>
  )
}

export function ArrowRightStartOnRectangleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M11 6H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4" />
      <path d="M14 8.5 17.5 12 14 15.5" />
      <path d="M10.5 12H18" />
    </Icon>
  )
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m6 9 6 6 6-6" />
    </Icon>
  )
}

export function ChevronUpIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m6 15 6-6 6 6" />
    </Icon>
  )
}

export function PlusIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  )
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 4 6.5 6v5.5c0 3 2.3 5.6 5.5 6.5 3.2-.9 5.5-3.5 5.5-6.5V6Z" />
      <path d="m9.5 12 2 2.5 3-4" />
    </Icon>
  )
}

export function BookOpenIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 6c-1.8-1-4-.9-6 .3V17c2-1.2 4.2-1.3 6-.3" />
      <path d="M12 6c1.8-1 4-.9 6 .3V17c-2-1.2-4.2-1.3-6-.3" />
      <path d="M12 6v10.7" />
    </Icon>
  )
}

export function ChatBubbleLeftRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-1.8L11 17.5V14H8a3 3 0 0 1-3-3Z" />
    </Icon>
  )
}

export function Cog6ToothIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 4.5v1.8M12 17.7v1.8M6.8 6.8l1.3 1.3M15.9 15.9l1.3 1.3M4.5 12h1.8M17.7 12h1.8M6.8 17.2l1.3-1.3M15.9 8.1l1.3-1.3" />
    </Icon>
  )
}

export function HomeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-4.5h-5V20H5a1 1 0 0 1-1-1Z" />
    </Icon>
  )
}

export function InboxArrowDownIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6h12l-1.5 9h-3L12 18l-1.5-3H7.5Z" />
      <path d="M12 4v5" />
      <path d="m9.5 7.5 2.5 2.5 2.5-2.5" />
    </Icon>
  )
}

export function SparklesIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5Z" />
      <path d="m6 14 1 2-1 2-1-2Z" />
      <path d="m17 12.5.7 1.5-.7 1.5-.7-1.5Z" />
    </Icon>
  )
}

export function UsersIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14.5 10a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z" />
      <path d="M7 16a3.5 3.5 0 0 1 7 0v1H7Z" />
      <path d="M16 9.8a2.2 2.2 0 1 1 0 4.4" />
      <path d="M17.5 16.5h-3" />
    </Icon>
  )
}

export function ArrowTrendingUpIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 16 10 10.5l3 3L20 7" />
      <path d="M20 11V7h-4" />
    </Icon>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </Icon>
  )
}

export function ArrowUpTrayIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 15V6" />
      <path d="m8.5 9.5 3.5-3.5 3.5 3.5" />
      <path d="M6 15.5v2a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 17.5v-2" />
    </Icon>
  )
}

export function DocumentDuplicateIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 9.5V5.5A1.5 1.5 0 0 1 10.5 4h5A1.5 1.5 0 0 1 17 5.5v8A1.5 1.5 0 0 1 15.5 15H13" />
      <rect x="6" y="8" width="7" height="10" rx="1.5" />
    </Icon>
  )
}

export function TrashIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 7h12" />
      <path d="M9 7V5h6v2" />
      <path d="M9.5 10.5v5M14.5 10.5v5" />
      <path d="M8 7h8l-.7 9a1.5 1.5 0 0 1-1.5 1.4h-3.6A1.5 1.5 0 0 1 8.7 16Z" />
    </Icon>
  )
}

export function DocumentCheckIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 4.5h4.5L17 8v9.5A1.5 1.5 0 0 1 15.5 19h-6A1.5 1.5 0 0 1 8 17.5v-11A1.5 1.5 0 0 1 9.5 5Z" />
      <path d="M11 12.5 12.4 14l2.1-2.5" />
    </Icon>
  )
}

export function PencilSquareIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 6.5 17.5 10l-6 6H8v-3.5Z" />
      <path d="M13 7.5 16.5 11" />
      <path d="M7 5h5" />
      <path d="M6.5 5A1.5 1.5 0 0 0 5 6.5v11A1.5 1.5 0 0 0 6.5 19h11a1.5 1.5 0 0 0 1.5-1.5V13" />
    </Icon>
  )
}

export function XMarkIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5" />
    </Icon>
  )
}

export function AtSymbolIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 17a5 5 0 1 1 3.9-1.9" />
      <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 3 3v1.2c0 .9.7 1.3 1.3.8.7-.5 1.2-1.6 1.2-3 0-3.3-2.8-6-6.5-6S5.5 7.7 5.5 11s2.5 6 6 6" />
    </Icon>
  )
}

export function EnvelopeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="m5 8.5 7 4.5 7-4.5" />
    </Icon>
  )
}

export function PhoneArrowUpRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8.5 5.5 10 4h5.5V9.5L14.8 7.8" />
      <path d="M10 6.5 15 11.5" />
      <path d="M9.5 8.5H7a1.5 1.5 0 0 0-1.5 1.6c.1 1.3.6 3.2 2.3 5 1.8 1.8 3.7 2.3 5 2.3A1.5 1.5 0 0 0 14.5 16v-2.5" />
    </Icon>
  )
}

export function SignalIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 16a7 7 0 0 1 14 0" />
      <path d="M8 16a4 4 0 0 1 8 0" />
      <path d="M11 16a1 1 0 0 1 2 0" />
    </Icon>
  )
}

export function CreditCardIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M4 10h16" />
      <path d="M8 14h3" />
    </Icon>
  )
}

export function KeyIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="10" cy="10" r="4" />
      <path d="M13.5 13.5 18 18" />
      <path d="M16.5 16.5 18 15" />
    </Icon>
  )
}

export function UserCircleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M7.5 17.5a4.5 4.5 0 0 1 9 0" />
    </Icon>
  )
}
