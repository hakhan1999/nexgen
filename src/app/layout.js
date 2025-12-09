import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import './globals.css'
import { Roboto_Mono, Roboto_Flex } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-mono",
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-flex",
});

export const metadata = {
  title: "NexGen",
  description: "Digital Solutions That Drive Success",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${robotoMono.variable} ${robotoFlex.variable}`} lang="en">
      <body className='myContainer'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}