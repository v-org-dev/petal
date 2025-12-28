'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/elements/button'
import Link from 'next/link'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/workspace')
      router.refresh()
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-6">
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
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-mauve-950 dark:text-mauve-50"
          >
            Password
          </label>
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-mauve-700 hover:text-mauve-800 dark:text-mauve-300 dark:hover:text-mauve-200"
          >
            Forgot password?
          </Link>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-lg border border-mauve-300 bg-white px-3 py-2 text-mauve-950 placeholder-mauve-400 focus:border-mauve-500 focus:outline-none focus:ring-2 focus:ring-mauve-500/20 dark:border-mauve-700 dark:bg-mauve-900 dark:text-mauve-50 dark:placeholder-mauve-500"
            placeholder="••••••••"
          />
        </div>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-800 dark:bg-red-900/20 dark:text-red-300">
          {error}
        </div>
      )}

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Signing in...' : 'Sign in'}
      </Button>
    </form>
  )
}
