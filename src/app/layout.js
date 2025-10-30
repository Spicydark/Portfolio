import Script from "next/script";
// Components
import NavbarUi from '@/components/navbar_ui/navbar_ui'
// CSS
import "./globals.css";
import "./projects/projects.css"
// Google Fonts
import { Poppins, Roboto } from 'next/font/google'

// Google Fonts | Font Optimization
// Font primary
const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-family-primary'
})

// Font secondary
const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-family-secondary'
})

// Global metadata
export const metadata = {
  metadataBase: new URL('https://karthikshetty.info'),
  title: "Surya K | Full Stack Developer & Web Development Portfolio",
  description: "Professional portfolio of Surya K, experienced Full Stack Developer specializing in Java, Spring, React, MySQL, MongoDB, Git, HTML, CSS, JavaScript, BootStrap and modern web development. View my projects, skills, and development experience.",
  keywords: "Surya K, full stack developer, java developer, web developer, portfolio, React developer, JavaScript engineer, frontend development, backend development, responsive web design, React, Java, SpringBoot, Microservices, MySQL, Git, HTML, CSS, JavaScript, BootStrap, Docker, RESTful APIs, web applications, software development",
  openGraph: {
    title: "Surya K | Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer specializing in creating modern, secure and scalable applications with modern web development",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Surya K Portfolio",
    images: [
      {
        url: "/images/sharing/portfolio-og-image.png",
        width: 1200,
        height: 630,
        alt: "Surya K - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya K | Full Stack Developer",
    description: "Check out my portfolio showcasing web development projects and full stack expertise",
    creator: "@Spicy__Dark",
    images: ["/images/sharing/portfolio-og-image.png"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      {
        url: '/icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      }
    ],
    apple: [
      {
        url: '/icons/apple-touch-icon.png',
        sizes: '180x180'
      }
    ],
    shortcut: '/icons/favicon-16x16.png'
  },
  alternates: {
    canonical: "/"
  }
};

// Application RootLayout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-L9WLXD288X" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L9WLXD288X');
        `}</Script>
        <meta name="google-site-verification" content="EvIVedFo_Iyo_aDGzoxOUd06FsjaycOVOYwbz37lEOk" />
      </head>
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <NavbarUi />
        {children}
      </body>
    </html>
  );
}
