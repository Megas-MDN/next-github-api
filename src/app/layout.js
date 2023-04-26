import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';

const popping = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const metadata = {
  title: 'All Home',
  description: 'Usando next e travessuras',
  keywords: 'tuffy, play, any, tey',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <body className={popping.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
