import { createSnippet } from '@/server-actions';
import SubmitButton from '@/components/SubmitButton';

export default function SnippetCreatePage() {

  return (
    <form action={createSnippet} id="create-snippet">
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

        <SubmitButton/>
      </div>
    </form>
  );
}
