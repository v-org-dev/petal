import { SignupForm } from '@/components/auth/signup-form'
import { OAuthButtons } from '@/components/auth/oauth-buttons'
import Link from 'next/link'

export const metadata = {
  title: 'Sign up - Petal',
  description: 'Create your Petal account',
}

export default function SignupPage() {
  return (
    <div>
      <h2 className="text-center text-2xl font-semibold leading-9 tracking-tight text-mauve-950 dark:text-mauve-50">
        Create your account
      </h2>
      <p className="mt-2 text-center text-sm text-mauve-600 dark:text-mauve-400">
        Start your 14-day free trial. No credit card required.
      </p>

      <div className="mt-10">
        <OAuthButtons />

        <div className="relative mt-10">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-mauve-200 dark:border-mauve-700" />
          </div>
          <div className="relative flex justify-center text-sm font-medium leading-6">
            <span className="bg-white px-6 text-mauve-500 dark:bg-mauve-900">
              Or sign up with email
            </span>
          </div>
        </div>

        <div className="mt-10">
          <SignupForm />
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-mauve-500">
        Already have an account?{' '}
        <Link
          href="/login"
          className="font-semibold leading-6 text-mauve-700 hover:text-mauve-800 dark:text-mauve-300 dark:hover:text-mauve-200"
        >
          Sign in
        </Link>
      </p>
    </div>
  )
}
