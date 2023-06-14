import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import Head from "next/head";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
          />
        </Head>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
