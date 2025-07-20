import { Inter } from "next/font/google";
import { Header } from "../header"
import { Footer } from "../footer";

type LayoutProps = {
  children: React.ReactNode
}

// export const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
//   });
  
// export const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({subsets:["latin"]})
  
export const Layout = ({ children }: LayoutProps) => {

  return (
    <div className={`${inter.className} relative flex min-h-screen flex-col dark`}>
      <Header />
      <main className="flex flex-col mb-12">
        {children}
      </main>
      <Footer />
    </div>
  )
}