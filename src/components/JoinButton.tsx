"use client";

import { joinEvent } from "@work-hive/api/client";
import { useRouter } from "next/navigation";

export type JoinButtonProps = {
  id: string;
};

export function JoinButton({id}: JoinButtonProps) {

    const router = useRouter();

    async function join() {
        await joinEvent(id);
        router.push("/"); // Go back home for now
    }

    return (
        <button onClick={join}>Join</button>
    )
}
