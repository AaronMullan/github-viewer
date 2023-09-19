import './globals.css';
import type { Metadata } from 'next';
import { Figtree, Cabin } from 'next/font/google';
import { ApolloWrapper } from '../lib/apolloProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
});
const cabin = Cabin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cabin',
});

export const metadata: Metadata = {
  title: 'GitInsight',
  description: 'Providing Insight on Github Users',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} ${cabin.variable}`}>
      <body className={`flex flex-col items-center`}>
        <Header />
        <ApolloWrapper>
          <div className="w-full max-w-6xl sm:px-12">{children}</div>
        </ApolloWrapper>
        <Footer />
      </body>
    </html>
  );
}
