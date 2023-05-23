"use client";

import { joinEvent } from "@work-hive/api/client";
import { useRouter } from "next/navigation";

export type JoinButtonProps = {
  id: string;
};

export function JoinButton({ id }: JoinButtonProps) {
  const router = useRouter();

  async function join() {
    await joinEvent(id);
    router.push("/"); // Go back home for now
  }

  return (
    <button
      className="mt-3 bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 border border-orange-600 rounded absolute bottom-2 right-2"
      onClick={join}
    >
      Join me
    </button>
  );
}
