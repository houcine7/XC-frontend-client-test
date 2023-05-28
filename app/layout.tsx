import Header from "./components/header";
import { StateProvider } from "./context/contextProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Xperince test client consumer",
  description:
    "this a an application built with nextjs to consume the backend ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateProvider>
          <Header />
          {children}
        </StateProvider>
      </body>
    </html>
  );
}
