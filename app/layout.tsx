import localFont from 'next/font/local';
import "./globals.css";
import Header from '@/ui/header'

const jetBrains = localFont({
  src: "../fonts/JetBrainsMono.woff2",
  variable: "--font-jetbrains-mono"
});

const inter = localFont({
  src: "../fonts/InterSans.woff2",
  variable: "--font-inter-sans"
})

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-8">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}