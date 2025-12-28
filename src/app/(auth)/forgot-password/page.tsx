'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/elements/button'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  async function handleResetPassword(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback?next=/reset-password`,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSuccess(true)
      setLoading(false)
    }
  }

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold leading-9 tracking-tight text-mauve-950 dark:text-mauve-50">
        Reset your password
      </h2>
      <p className="mt-2 text-center text-sm text-mauve-600 dark:text-mauve-400">
        Enter your email and we'll send you a reset link
      </p>

      <div className="mt-10">
        {success ? (
          <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-300">
            <h3 className="font-semibold">Check your email</h3>
            <p className="mt-1">
              We've sent a password reset link to <strong>{email}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleResetPassword} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-mauve-950 dark:text-mauve-50"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-lg border border-mauve-300 bg-white px-3 py-2 text-mauve-950 placeholder-mauve-400 focus:border-mauve-500 focus:outline-none focus:ring-2 focus:ring-mauve-500/20 dark:border-mauve-700 dark:bg-mauve-900 dark:text-mauve-50 dark:placeholder-mauve-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-800 dark:bg-red-900/20 dark:text-red-300">
                {error}
              </div>
            )}

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Sending...' : 'Send reset link'}
            </Button>
          </form>
        )}
      </div>

      <p className="mt-10 text-center text-sm text-mauve-500">
        Remember your password?{' '}
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
