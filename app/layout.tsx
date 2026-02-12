
import "./globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
