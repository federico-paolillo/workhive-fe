import Image from "next/image";
import "./global.css";
import Link from "next/link";

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
      <body>
        <nav className="bg-white border border-b-black bg-colore-barra p-4">
          <div className="flex flex-wrap items-center justify-between">
            <a href="https://example.com" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Work Hive
              </span>
            </a>
            <div className="hidden w-full md:block md:w-auto">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 border border-orange-600 rounded">
                    <Link href={`/new`}>New</Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="md:p-8 bg-colore-sfondo h-screen">{children}</div>
      </body>
    </html>
  );
}
