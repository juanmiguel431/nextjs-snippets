import { db } from '@/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Params = {
  id: string;
}

type Props = {
  params: Promise<Params>;
}

export default async function SnippetPage(props: Props) {
  const { id } = await props.params;

  const snippetId = parseInt(id);

  if (Number.isNaN(snippetId)) {
    notFound();
  }

  await new Promise(r => setTimeout(r, 1500));
  const snippet = await db.snippet.findFirst({
    where: { id: snippetId },
  });

  if (!snippet) {
    notFound();
  }

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link
            href={`/snippets/${snippetId}/edit`}
            className="p-1 border rounded">Edit</Link>
          <button className="p-1 border rounded">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
