'use client';
import React, { useState } from 'react';

type Props = {
  formId: string
}

const SubmitButton: React.FC<Props> = ({ formId }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <button
      type="submit"
      onClick={() => {
        setIsSubmitting(true);
        const form = document.getElementById(formId) as HTMLFormElement;
        if (form) {
          form.submit();
        }
      }}
      disabled={isSubmitting}
      className="rounded p-2 bg-blue-200">
      {isSubmitting? 'Submitting' : 'Submit'}
    </button>
  )
}

export default SubmitButton;
