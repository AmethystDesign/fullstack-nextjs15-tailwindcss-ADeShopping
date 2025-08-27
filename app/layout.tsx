// import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-poppins bg-background text-foreground`}
      > */}
      <body
        className={`antialiased font-poppins bg-background text-foreground`}
      >
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#000000",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
