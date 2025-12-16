// layout.js
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import './globals.css';
import { Roboto_Mono, Roboto_Flex } from "next/font/google";
import { LoadingProvider } from "@/context/LoadingContext";
import PreloaderWrapper from '@/components/loaders/PreloaderWrapper';
import { getLogo, getMenu } from '@/lib/wpApi';

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

export default async function RootLayout({ children }) {
  const logoData = await getLogo();
  const menuData = await getMenu("header-menu");
  return (
    <html className={`${robotoMono.variable} ${robotoFlex.variable}`} lang="en">
      <body className='myContainer'>
        <LoadingProvider>
          <PreloaderWrapper>
            <Header logo={logoData?.logo} menu={menuData?.items} />
            {children}
            <Footer />
          </PreloaderWrapper>
        </LoadingProvider>
      </body>
    </html>
  );
}
