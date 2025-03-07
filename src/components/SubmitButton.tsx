'use client'
import { useFormStatus } from 'react-dom';
import React, { PropsWithChildren } from 'react';

const SubmitButton: React.FC<PropsWithChildren> = ({ children }) => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="rounded p-2 bg-blue-200" disabled={pending}>
      {pending ? 'Submitting' : children || 'Submit'}
    </button>
  );
}

export default SubmitButton;
