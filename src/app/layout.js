import './globals.css';

const siteUrl = 'https://originalbyte.site';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'OriginalByte | Software Developer Portfolio',
  description: 'Personal portfolio website detailing my expertise in modern web applications.',
  openGraph: {
    title: 'OriginalByte | Software Developer Portfolio',
    description: 'Personal portfolio website detailing my expertise in modern web applications.',
    url: siteUrl,
    siteName: 'OriginalByte',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OriginalByte portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OriginalByte | Software Developer Portfolio',
    description: 'Personal portfolio website detailing my expertise in modern web applications.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
