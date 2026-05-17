import './globals.css';
export const metadata = {
  title: 'OriginalByte | Software Developer Portfolio',
  description: 'Personal portfolio website of OriginalByte, a software developer specializing in modern web applications.',
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
