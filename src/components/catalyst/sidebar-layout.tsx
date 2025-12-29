'use client'

import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import clsx from 'clsx'
import React, { useState } from 'react'
import { NavbarItem } from './navbar'

function OpenMenuIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" />
    </svg>
  )
}

function CloseMenuIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  )
}

function MobileSidebar({ open, close, children }: React.PropsWithChildren<{ open: boolean; close: () => void }>) {
  return (
    <Dialog open={open} onClose={close} className="relative z-50 lg:hidden">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/40 transition-opacity duration-300 ease-linear data-closed:opacity-0"
      />

      <div className="fixed inset-0 flex">
        <DialogPanel
          transition
          className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
        >
          <TransitionChild>
            <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
              <button type="button" onClick={close} className="-m-2.5 p-2.5">
                <span className="sr-only">Close sidebar</span>
                <CloseMenuIcon />
              </button>
            </div>
          </TransitionChild>

          <div className="flex grow flex-col overflow-y-auto border-r border-zinc-200 bg-white shadow-xl">{children}</div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export function SidebarLayout({
  navbar,
  sidebar,
  children,
  secondary,
}: React.PropsWithChildren<{ navbar: React.ReactNode; sidebar: React.ReactNode; secondary?: React.ReactNode }>) {
  let [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="relative min-h-svh bg-white text-zinc-900">
      {/* Sidebar on desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col overflow-y-auto border-r border-zinc-200 bg-white shadow-sm">{sidebar}</div>
      </div>

      {/* Sidebar on mobile */}
      <MobileSidebar open={showSidebar} close={() => setShowSidebar(false)}>
        {sidebar}
      </MobileSidebar>

      {secondary ? (
        <aside className="fixed inset-y-0 left-72 hidden w-96 overflow-y-auto border-r border-zinc-200 bg-white px-6 py-6 xl:block">
          {secondary}
        </aside>
      ) : null}

      <div className="lg:pl-72">
        <header
          className={clsx(
            'sticky top-0 z-30 border-b border-zinc-200 bg-white/90 px-4 py-4 shadow-xs backdrop-blur sm:px-6 lg:px-8',
            secondary && 'xl:pl-96'
          )}
        >
          <div className="flex items-center gap-4">
            <NavbarItem
              type="button"
              onClick={() => setShowSidebar(true)}
              aria-label="Open navigation"
              className="lg:hidden"
            >
              <OpenMenuIcon />
            </NavbarItem>
            <div className="min-w-0 flex-1">{navbar}</div>
          </div>
        </header>

        <main className={clsx('bg-white pb-12 pt-6', secondary && 'xl:pl-96')}>
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
