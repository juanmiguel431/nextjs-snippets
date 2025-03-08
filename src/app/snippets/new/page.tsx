'use client'
import * as actions from '@/server-actions';
import SubmitButton from '@/components/SubmitButton';
import React, { startTransition, useActionState, useCallback } from 'react';

export default function SnippetCreatePage() {

  const [formState, action] = useActionState(actions.createSnippet, { message: '' });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback((event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    startTransition(() => action(formData));
  }, []);

  return (
    <form onSubmit={onSubmit} id="create-snippet">
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

        {formState.message && (
          <div className="my-2 p-2 bg-red-200 border rounded border-b-red-400">
            {formState.message}
          </div>
        )}

        <SubmitButton/>
      </div>
    </form>
  );
}
