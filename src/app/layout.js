import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import ToastProvider from '@/components/ToastProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DiscDrive',
  description:
    'Discover DiscDrive: Your Disc Golf Destination! Find the perfect discs to elevate your game. Dive in today!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <Header />
        <div className="min-h-screen bg-gray-200 ">{children}</div>
      </body>
    </html>
  );
}
