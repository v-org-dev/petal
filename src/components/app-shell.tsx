"use client"

import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { GitHubIcon } from '@/components/icons/social/github-icon'
import { XIcon } from '@/components/icons/social/x-icon'
import { YouTubeIcon } from '@/components/icons/social/youtube-icon'
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
  NewsletterForm,
  SocialLink,
} from '@/components/sections/footer-with-newsletter-form-categories-and-social-icons'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo'
import { usePathname } from 'next/navigation'

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isDashboard = pathname?.startsWith('/dashboard')
  const isWorkspace = pathname?.startsWith('/workspace')
  const isAuth =
    pathname?.startsWith('/login') ||
    pathname?.startsWith('/signup') ||
    pathname?.startsWith('/forgot-password') ||
    pathname?.startsWith('/auth')

  if (isDashboard || isWorkspace || isAuth) {
    return <>{children}</>
  }

  return (
    <>
      <NavbarWithLinksActionsAndCenteredLogo
        id="navbar"
        links={
          <>
            <NavbarLink href="/pricing">Pricing</NavbarLink>
            <NavbarLink href="/about">About</NavbarLink>
            <NavbarLink href="#features">Features</NavbarLink>
            <NavbarLink href="/login" className="sm:hidden">
              Log in
            </NavbarLink>
          </>
        }
        logo={
          <NavbarLogo href="/">
            <span className="text-2xl font-display font-semibold text-mauve-950 dark:text-mauve-50">Petal</span>
          </NavbarLogo>
        }
        actions={
          <>
            <PlainButtonLink href="/login" className="max-sm:hidden">
              Log in
            </PlainButtonLink>
            <ButtonLink href="/signup">Start free trial</ButtonLink>
          </>
        }
      />

      <Main>{children}</Main>

      <FooterWithNewsletterFormCategoriesAndSocialIcons
        id="footer"
        cta={
          <NewsletterForm
            headline="E-commerce support tips & insights"
            subheadline={
              <p>
                Get strategies for scaling support, AI automation tactics, and e-commerce customer service best practices delivered monthly. Plus early access to new features.
              </p>
            }
            action="#"
          />
        }
        links={
          <>
            <FooterCategory title="Product">
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Integrations</FooterLink>
            </FooterCategory>
            <FooterCategory title="Company">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Press Kit</FooterLink>
            </FooterCategory>
            <FooterCategory title="Resources">
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">API Docs</FooterLink>
              <FooterLink href="#">Status</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </FooterCategory>
            <FooterCategory title="Legal">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Security</FooterLink>
            </FooterCategory>
          </>
        }
        fineprint="© 2025 Petal, Inc. All rights reserved."
        socialLinks={
          <>
            <SocialLink href="https://x.com" name="X">
              <XIcon />
            </SocialLink>
            <SocialLink href="https://github.com" name="GitHub">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href="https://www.youtube.com" name="YouTube">
              <YouTubeIcon />
            </SocialLink>
          </>
        }
      />
    </>
  )
}
