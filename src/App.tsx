import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { InputForm } from './components/InputForm';
import AlignedResult from './components/AlignedResult';

function App() {
  const [sequenceFirst, setSequenceFirst] = useState<string>('');
  const [sequenceSecond, setSequenceSecond] = useState<string>('');

  const handleSubmit = (seq1: string, seq2: string) => {
    setSequenceFirst(seq1);
    setSequenceSecond(seq2);
  }
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 5,
      }}
    >
      <Typography
        component="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
        }}
      >
        Визуализация выравнивания аминокислот
      </Typography>
      <InputForm onSubmit={handleSubmit}/>
      {sequenceFirst && sequenceSecond && <AlignedResult seq1={sequenceFirst} seq2={sequenceSecond}/>}
    </Container>
  );
}

export default App;
