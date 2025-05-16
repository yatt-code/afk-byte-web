import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AFK Byte | IT Consultancy',
  description: 'Professional IT consultancy services for businesses of all sizes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            {/* Wrap children in a container to center content and apply max-width.
                The 'container' class (typically from Tailwind config or globals.css via Shadcn/UI)
                should provide max-width and horizontal padding. 'mx-auto' handles the centering.
                'w-full' on main ensures it behaves as a block for the centering logic of its child. */}
            <main className="flex-1 w-full">
              <div className="container mx-auto">{children}</div>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}