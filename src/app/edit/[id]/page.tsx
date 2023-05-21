"use client";

import { fetchEvent } from "@work-hive/api/client";

export type EditPageParams = {
  id: string;
};

export type EditProps = {
  params: EditPageParams;
};

export default async function Edit({ params }: EditProps) {
  const event = await fetchEvent(params.id);
}
