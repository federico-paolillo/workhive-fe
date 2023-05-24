import "./global.css";
import Link from "next/link";
import Image from "next/image";
import { FakeEventButton } from "@work-hive/components/FakeEventButton";

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
        <nav className="border-b-2 border-b-black bg-colore-barra p-4 pl-32 text-white pr-32">
          <div className="flex flex-wrap items-center justify-between">
            <Link href={"/"} className="flex items-center">
              <Image
                src="/images/logo5_rev2.png"
                className="mr-3"
                alt="WorkHive logo"
                width={702}
                height={97}
              />
            </Link>
            <div className="hidden w-full md:block md:w-auto">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
                <li>
                  <Link href={`/new`}>
                    <button className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 border border-orange-600 rounded">
                      New
                    </button>
                  </Link>
                </li>
                <li>
                  <FakeEventButton />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="md:p-8 md:pl-32 bg-colore-sfondo h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
