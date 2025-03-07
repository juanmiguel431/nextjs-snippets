'use client';
import { createSnippet } from '@/server-actions';
import { FormEventHandler, useCallback, useState } from 'react';

export default function SnippetCreatePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(() => {
    setIsSubmitting(true);
  }, []);

  return (
    <form action={createSnippet} onSubmit={onSubmit} id="create-snippet">
      <h3 className="font-bold m3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">

        <div className="flex-gap-4">
          <label className="w-12" htmlFor="title">Title</label>
          <input type="text" name="title" className="border rounded p-2 w-full" id="title"/>
        </div>

        <div className="flex-gap-4">
          <label className="w-12" htmlFor="code">Code</label>
          <textarea name="code" className="border rounded p-2 w-full" id="code"/>
        </div>

        <button type="submit" className="rounded p-2 bg-blue-200" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
