export type EditButtonProps = {
  id: string;
};

export function EditButton({ id }: EditButtonProps) {
  return (
    <a href={`/edit/${id}`}>
      <button className="mt-3 bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 border border-orange-600 rounded absolute bottom-2 left-4">
        Edit
      </button>
    </a>
  );
}
