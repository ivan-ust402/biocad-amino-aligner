import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

interface InputFormProps {
  onSubmit: (sequenceFirst: string, sequenceSecond: string) => void;
}

export const InputForm = ({onSubmit}: InputFormProps) => {
  const regexTemplate = /^[ARNDCEQGHILKMFPSTWYV\-=]+$/i;
  const {register, handleSubmit, formState: { errors }, watch} = useForm();
  const watchSequenceFirst = watch('seq1');
  const watchSequenceSecond = watch('seq2');
  const isLengthEqual = watchSequenceFirst?.length === watchSequenceSecond.length;
  const errorFirstCondition = !!errors.seq1;
  const errorSecondCondition = !!errors.seq2 || (watchSequenceFirst && watchSequenceSecond && !isLengthEqual);
  const helperTextForFirstTextArea = errors.seq1 
    ? 'Необходимо ввести только латинские символы ARNDCEQGHILKMFPSTWYV и -' 
    : '';
  const helperTextForSecondTextArea = !isLengthEqual 
    ? 'Последовательности должны быть одинаковой длины' 
    : (errors.seq2 ? 'Неверный формат' : '');

  const validateSquence = (value: string) => regexTemplate.test(value);

  const localSabmit = (data: any) => {
    if (isLengthEqual) {
      onSubmit(data.seq1.toUpperCase(), data.seq2.toUpperCase());
    }
  }
  

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit(localSabmit)} 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <TextField
        label="Аминокислотная последовательность №1"
        {...register('seq1', {required: true, validate: validateSquence})}
        error={errorFirstCondition}
        helperText={helperTextForFirstTextArea}
      />
      <TextField
        label="Аминокислотная последовательность №2"
        {...register('seq2', {required: true, validate: validateSquence})}
        error={errorSecondCondition}
        helperText={helperTextForSecondTextArea}
      />
      <Button type='submit' variant='contained'>
        Визуализировать выравнивание
      </Button>
    </Box>
  )
}
