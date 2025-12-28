import { Main } from '@/components/elements/main'
import Link from 'next/link'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Main>
      <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/" className="flex justify-center">
            <h1 className="text-3xl font-display font-semibold text-mauve-950 dark:text-mauve-50">
              Petal
            </h1>
          </Link>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow-sm ring-1 ring-mauve-950/10 dark:bg-mauve-900 dark:ring-mauve-50/10 sm:rounded-lg sm:px-12">
            {children}
          </div>
        </div>
      </div>
    </Main>
  )
}
