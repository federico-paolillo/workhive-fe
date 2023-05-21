import "./globals.css";

export const metadata = {
  title: "Work Hive",
  description: "Work Hive description TBD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
