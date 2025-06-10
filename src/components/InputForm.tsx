import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

interface InputFormProps {
  onSubmit: (sequenceFirst: string, sequenceSecond: string) => void;
}

export const InputForm = ({onSubmit}: InputFormProps) => {
  const regexTemplate = '/^[ARNDCEQGHILKMFPSTWYV\\-=]+$/i';
  const {register, handleSubmit, formState: { errors }, watch} = useForm();
  const watchSequenceFirst = watch('seq1');
  const watchSequenceSecond = watch('seq2');
  
  return (
    <div>
      
    </div>
  )
}
