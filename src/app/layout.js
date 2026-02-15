import "./globals.css";
import BottomNav from "../components/BottomNav";

export const metadata = {
  title: "KidsFashion",
  description: "Live Shopping Kids Fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 pb-16">
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
