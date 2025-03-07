import { db } from '@/db';
import { notFound } from 'next/navigation';

type Params = {
  id: string;
}

type Props = {
  params: Promise<Params>;
}

export default async function SnippetPage(props: Props) {
  console.log({props});

  const { id } = await props.params;

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    notFound();
  }

  return (
    <div>{snippet.title}</div>
  );
}
