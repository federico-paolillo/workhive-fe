"use client";

import { createFakeEvent } from "@work-hive/api/client";
import { useRouter } from "next/navigation";

export function FakeEventButton() {
  const router = useRouter();

  async function createFakes() {
    await createFakeEvent("");
    router.push("/");
  }

  return (
    <button
      onClick={createFakes}
      className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 border border-orange-600 rounded"
    >
      Create Fakes
    </button>
  );
}
