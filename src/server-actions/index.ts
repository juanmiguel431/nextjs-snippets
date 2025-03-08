'use server';
import { db } from '@/db';
import { redirect } from 'next/navigation';

export async function createSnippet(formData: FormData) {
  const title = formData.get('title') as string;
  const code = formData.get('code') as string;

  await new Promise(r => setTimeout(r, 1500));
  const snippet = await db.snippet.create({
    data: { title, code }
  });

  console.log({ snippet });

  redirect('/');
}

export async function updateSnippet(id: number, code: string | undefined) {
  await new Promise(r => setTimeout(r, 1500));
  await db.snippet.update({
    where: { id: id },
    data: { code: code }
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await new Promise(r => setTimeout(r, 1500));
  await db.snippet.delete({
    where: { id: id },
  });

  redirect('/');
}
