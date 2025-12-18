import "./globals.css";


export const metadata = {
  title: "Night Club",
  description: "Have A Good Time ",
  icons: {
    icon: "/assets/icon/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
