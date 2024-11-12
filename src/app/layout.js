import "./globals.css";

export const metadata = {
  title: "Fun Toy",
  description: "Your Site Description",
  icons: {
    icon: "/fav.png", // Adjust path if using a different format or location
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
