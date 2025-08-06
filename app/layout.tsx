import './globals.css'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LVR | Latest Release",
  description:
    'Listen to "Klack" by Laura (@LVR) - her latest electronic music release. Stream now on Spotify and discover more tracks from this emerging artist.',
  keywords: ["Laura", "LVR", "Klack", "electronic music", "new release", "Spotify", "artist", "music streaming"],
  authors: [{ name: "LVR", url: "https://open.spotify.com/intl-de/artist/3VHg1Bct5nmXqmA0aVsbQi" }],
  creator: "Laura (LVR)",
  publisher: "Laura Ehrenhuber",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "music.song",
    title: "LVR - Klack | Latest Release",
    description: 'Listen to "Klack" by Laura (@LVR) - her latest electronic music release. Stream now on Spotify.',
    url: "https://your-domain.com",
    siteName: "lvrmusic",
    images: [
      {
        url: "/images/klack-cover.webp",
        width: 1200,
        height: 1200,
        alt: "Klack album cover by LVR",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    // Music-specific Open Graph
    // @ts-ignore - music properties are valid but not in types
    "music:duration": 180,
    "music:album": "Klack",
    "music:musician": "https://open.spotify.com/intl-de/artist/3VHg1Bct5nmXqmA0aVsbQi",
  },
  twitter: {
    card: "summary_large_image",
    title: "LVR | Latest Release",
    description: 'Listen to "Klack" by Laura (@LVR) - her latest electronic music release. Stream now on Spotify.',
    images: ["/images/klack-cover.webp"],
    creator: "@LVR",
    site: "@LVR",
  },
  alternates: {
    canonical: "https://lvr.nohell.dev",
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    // Music streaming platform links
    "music:spotify": "https://open.spotify.com/intl-de/track/3aq1HZ3GfVlMSshBOckTRt",
    "music:apple_music": "https://music.apple.com", // Add your Apple Music link
    "music:youtube": "https://youtube.com", // Add your YouTube link
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black'>{children}</body>
    </html>
  )
}