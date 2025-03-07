import { notFound } from 'next/navigation';
import { db } from '@/db';
import SnippetEditForm from '@/components/SnippetEditForm';

type Props = {
  params: Promise<{
    id: string;
  }>
}

export default async function SnippetEditPage(props: Props) {
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
      Editing Snippet with title {snippet.title}
      <SnippetEditForm
        snippet={snippet}
      />
    </div>
  );
}
