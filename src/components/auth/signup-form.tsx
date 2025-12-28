'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/elements/button'

export function SignupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      // Check if email confirmation is required
      if (data.user && !data.session) {
        setSuccess(true)
        setLoading(false)
      } else {
        // Auto sign-in (if email confirmation is disabled)
        router.push('/workspace')
        router.refresh()
      }
    }
  }

  if (success) {
    return (
      <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-300">
        <h3 className="font-semibold">Check your email</h3>
        <p className="mt-1">
          We've sent you a confirmation link to <strong>{email}</strong>.
          Please click the link to verify your account.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSignup} className="space-y-6">
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-mauve-950 dark:text-mauve-50"
        >
          Full name
        </label>
        <div className="mt-2">
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="block w-full rounded-lg border border-mauve-300 bg-white px-3 py-2 text-mauve-950 placeholder-mauve-400 focus:border-mauve-500 focus:outline-none focus:ring-2 focus:ring-mauve-500/20 dark:border-mauve-700 dark:bg-mauve-900 dark:text-mauve-50 dark:placeholder-mauve-500"
            placeholder="John Doe"
          />
        </div>
      </div>

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

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-mauve-950 dark:text-mauve-50"
        >
          Password
        </label>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-lg border border-mauve-300 bg-white px-3 py-2 text-mauve-950 placeholder-mauve-400 focus:border-mauve-500 focus:outline-none focus:ring-2 focus:ring-mauve-500/20 dark:border-mauve-700 dark:bg-mauve-900 dark:text-mauve-50 dark:placeholder-mauve-500"
            placeholder="••••••••"
          />
          <p className="mt-1 text-xs text-mauve-500">
            Must be at least 6 characters
          </p>
        </div>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-800 dark:bg-red-900/20 dark:text-red-300">
          {error}
        </div>
      )}

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Creating account...' : 'Create account'}
      </Button>
    </form>
  )
}
