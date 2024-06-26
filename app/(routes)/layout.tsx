import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import TranstackQueryProvider from "@/components/TranstackQueryProvider";
import NextTopLoader from "nextjs-toploader";
import ShoppingCartBar from "@/components/ShoppingCartBar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MYSHOPBD-HABIB",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className + ' dark:bg-black'}>
                <NextTopLoader
                    color="#2563EB"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={false}
                    easing="ease"
                    speed={200}
                    shadow="0 0 10px #2299DD,0 0 5px #2299DD"
                    zIndex={1600}
                    showAtBottom={false}
                />
                <TranstackQueryProvider>
                    <main className="max-w-[1440px] mx-auto md:px-6 px-3 w-[100%]">
                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                        />
                        <Header />
                        <ShoppingCartBar />
                        {children}
                        <Footer />
                    </main>
                </TranstackQueryProvider>

            </body>
        </html>
    );
}
