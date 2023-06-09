"use client";

import { joinEvent } from "@work-hive/api/client";
import { useRouter } from "next/navigation";

export type JoinButtonProps = {
  id: string;
  maxGuest: number;
  guestCount: number;
};

export function JoinButton({ id, maxGuest, guestCount }: JoinButtonProps) {
  const router = useRouter();

  async function join() {
    await joinEvent(id);
    router.push("/"); // Go back home for now
  }

  return (
    <button
      className="mt-3 bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 border border-orange-600 rounded absolute bottom-2 right-4"
      onClick={join}
      disabled={maxGuest != 0 && guestCount >= maxGuest}
    >
      Join me {maxGuest != 0 && `${guestCount}/${maxGuest}`}
    </button>
  );
}
