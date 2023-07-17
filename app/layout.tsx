import './globals.css'
import { Navbar, Footer } from '@/components';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Car Hub. 최고의 차를 찾아보세요",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={'relative'}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
