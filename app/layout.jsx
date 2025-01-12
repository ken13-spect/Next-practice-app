import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">{children}</body>
    </html>
  );
}
