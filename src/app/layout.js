import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DiscDrive',
  description:
    'Discover DiscDrive: Your Disc Golf Destination! Find the perfect discs to elevate your game. Dive in today!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
