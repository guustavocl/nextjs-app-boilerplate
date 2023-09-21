import Header from "@/components/Header";
import { Nunito_Sans } from "next/font/google";
import ToastProvider from "@/providers/ToastProvider";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/translucent.css";

const nunito = Nunito_Sans({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Next App Boilerplate",
  description: "Created by @guustavocl [https://gus.sh]",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        <NextTopLoader color="#6d28d9" showSpinner={false} />
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
