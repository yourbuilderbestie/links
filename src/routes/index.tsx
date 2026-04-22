import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/ybb-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Your Builder Bestie | Jenna Ahrens" },
      { name: "description", content: "Your Builder Bestie at Meritage Homes – Connect with Jenna Ahrens" },
    ],
  }),
});

const socialLinks = [
  { href: "https://www.facebook.com/yourbuilderbestie", label: "Facebook", icon: FacebookIcon },
  { href: "https://www.instagram.com/yourbuilderbestie", label: "Instagram", icon: InstagramIcon },
  { href: "https://www.linkedin.com/in/jennaahrens/", label: "LinkedIn", icon: LinkedInIcon },
  { href: "https://www.youtube.com/@yourbuilderbestie", label: "YouTube", icon: YouTubeIcon },
];

const mainLinks = [
  { href: "https://yourbuilderbestie.com/about", label: "About Me" },
  { href: "https://jennaslinks.com/consultation", label: "Book A Call" },
  { href: "https://jennaslinks.com/review", label: "Leave Me A Review!" },
  { href: "sms:+18053145798", label: "Text Me" },
];

function Index() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image with pink overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover"
          width={1080}
          height={1920}
        />
        <div className="absolute inset-0 bg-pink-400/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6 py-12">
        {/* Logo */}
        <img
          src={logo}
          alt="Your Builder Bestie"
          className="mb-8 w-72"
        />

        {/* Social icons */}
        <div className="mb-8 flex gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--social-icon-bg)] transition-colors hover:bg-[var(--social-icon-hover)]"
            >
              <s.icon />
            </a>
          ))}
        </div>

        {/* Link buttons */}
        <div className="flex w-full flex-col gap-3">
          {mainLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center justify-center rounded-lg bg-[var(--link-btn-bg)] px-6 py-4 text-center font-medium text-[var(--link-btn-text)] transition-colors hover:bg-[var(--link-btn-hover)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom contact icons */}
        <div className="mt-8 flex gap-4">
          <a
            href="mailto:jenna@yourbuilderbestie.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--social-icon-bg)] transition-colors hover:bg-[var(--social-icon-hover)]"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+18053145798"
            aria-label="Phone"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--social-icon-bg)] transition-colors hover:bg-[var(--social-icon-hover)]"
          >
            <PhoneIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
