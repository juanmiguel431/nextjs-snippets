'use server';
import { db } from '@/db';
import { redirect } from 'next/navigation';

type FormState = {
  message: string;
}

export async function createSnippet(formState: FormState, formData: FormData) {
  try {
    const title = formData.get('title');
    const code = formData.get('code');

    if (typeof title !== 'string' || title.length < 3) {
      return {
        message: 'Title must be longer'
      };
    }

    if (typeof code !== 'string' || code.length < 10) {
      return {
        message: 'Code must be longer'
      };
    }

    await new Promise(r => setTimeout(r, 1500));
    const snippet = await db.snippet.create({
      data: { title, code }
    });

    console.log({ snippet });

  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        message: e.message
      };
    }

    return {
      message: 'Something went wrong'
    };
  }

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
