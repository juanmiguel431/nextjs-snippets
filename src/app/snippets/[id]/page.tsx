import { db } from '@/db';
import { notFound } from 'next/navigation';

type Params = {
  id: string;
}

type Props = {
  params: Promise<Params>;
}

export default async function SnippetPage(props: Props) {
  await new Promise(r => setTimeout(r, 1500));

  const { id } = await props.params;

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    notFound();
  }

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-2">
          <button className="p-1 border rounded">Edit</button>
          <button className="p-1 border rounded">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
