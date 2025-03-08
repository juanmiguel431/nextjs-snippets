'use client'
import { useFormStatus } from 'react-dom';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  className?: string;
}

const SubmitButton: React.FC<Props> = ({ children, className }) => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={className ?? 'rounded p-2 bg-blue-200'} disabled={pending}>
      {pending ? 'Submitting' : children ?? 'Submit'}
    </button>
  );
}

export default SubmitButton;
