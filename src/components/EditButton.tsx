"use client";

import Link from "next/link";

export type EditButtonProps = {
  id: string;
};

export function EditButton({ id }: EditButtonProps) {
  return (
    <Link href={`/edit/${id}`}>
      <button className="mt-3 bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 border border-orange-600 rounded absolute bottom-2 left-4">
        Edit
      </button>
    </Link>
  );
}
