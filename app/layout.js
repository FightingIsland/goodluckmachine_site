import "../styles.css";

export const metadata = {
  title: "Good Luck Machine — Independent Game Studio",
  description:
    "Good Luck Machine is an independent game developer and publisher, and the studio behind Freezo.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Good Luck Machine — Games made with feeling",
    description:
      "An independent game developer and publisher. Makers of Freezo and other curious things.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#f3f0e7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
