import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "../header"

type LayoutProps = {
  children: React.ReactNode
}

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });
  
export const Layout = ({ children }: LayoutProps) => {

  return (
    <div className={`${geistSans.className} ${geistMono.className} relative flex min-h-screen flex-col dark`}>
      <Header />
      <main className="flex-1 flex flex-col mb-12">
        {children}
      </main>
    </div>
  )
}