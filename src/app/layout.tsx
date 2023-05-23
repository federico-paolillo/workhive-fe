import "./global.css";

export const metadata = {
  title: "Work Hive",
  description: "Work Hive description TBD",
};

export type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="md:p-4">{children}</body>
    </html>
  );
}
