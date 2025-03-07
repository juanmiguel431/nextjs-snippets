
type Props = {
  params: Promise<{
    id: string;
  }>
}

export default async function SnippetEditPage(props: Props) {

  const { id } = await props.params;

  return (
    <div>Editing Snippet with id {id}</div>
  );
}
