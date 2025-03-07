'use client';

import { Snippet } from '@prisma/client';

type Props = Readonly<{
  snippet: Snippet
}>

export default function SnippetEditForm({ snippet }: Props) {

  return (
    <div>Client Component has snippet with title {snippet.title}</div>
  );
}
