'use client';

import { Snippet } from '@prisma/client';
import Editor, { OnChange } from '@monaco-editor/react';
import { useCallback, useMemo, useState } from 'react';
import { editor } from 'monaco-editor';
import * as action from '@/server-actions';
import SubmitButton from '@/components/SubmitButton';

type Props = Readonly<{
  snippet: Snippet
}>

export default function SnippetEditForm({ snippet }: Props) {
  const [code, setCode] = useState<string | undefined>(snippet.code);

  const handleEditorChange: OnChange = useCallback((value, ev) => {
    console.log({value})
    setCode(value);
  }, []);

  const options: editor.IStandaloneEditorConstructionOptions = useMemo(() => ({
    minimap: { enabled: false }
  }), []);

  const editSnippetAction = action.updateSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        options={options}
        defaultValue={snippet.code}
        onChange={handleEditorChange}
      />

      <form action={editSnippetAction}>
        <SubmitButton>Save</SubmitButton>
      </form>
    </div>
  );
}
