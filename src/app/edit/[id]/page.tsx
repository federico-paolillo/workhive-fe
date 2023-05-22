import { fetchEvent } from "@work-hive/api/client";
import { EditEvent } from "@work-hive/components/EditEvent";

export type EditPageParams = {
  id: string;
};

export type EditProps = {
  params: EditPageParams;
};

export default async function Edit({ params }: EditProps) {
  const eventToEdit = await fetchEvent(params.id);

  return <EditEvent event={eventToEdit} />;
}
