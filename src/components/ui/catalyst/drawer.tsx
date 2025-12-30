'use client'

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export interface RightDrawerProps {
  open: boolean
  onClose: (value: boolean) => void
  title: string
  children: React.ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
}

export default function RightDrawer({
  open,
  onClose,
  title,
  children,
  maxWidth = 'md',
}: RightDrawerProps) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className={`pointer-events-auto w-screen ${maxWidthClasses[maxWidth]} transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700`}
            >
              <div className="relative flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-zinc-950/10 dark:bg-zinc-900 dark:after:bg-white/10">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-base font-semibold text-zinc-950 dark:text-white">
                      {title}
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => onClose(false)}
                        className="relative rounded-md text-zinc-400 hover:text-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-zinc-500 dark:hover:text-white"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">{children}</div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
