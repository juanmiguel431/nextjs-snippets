'use client'
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="rounded p-2 bg-blue-200" disabled={pending}>
      {pending ? 'Submitting' : 'Submit'}
    </button>
  );
}

export default SubmitButton;
