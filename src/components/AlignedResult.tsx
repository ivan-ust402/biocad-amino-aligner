import { Box } from '@mui/material';
import React from 'react'
import { getAminoColor } from '../utils/utils';

interface AlignedResultProps {
  seq1: string;
  seq2: string;
}

const AlignedResult = ({seq1, seq2}: AlignedResultProps) => {
  return (
    <Box 
      sx={{
        mt: 4,
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}
    >
      <Box>
        {seq1.split('').map((char, index) => (
          <Box 
            key={`seq1-${index}`}
            component="span"
            sx={{
              backgroundColor: getAminoColor(char),
              px: 0.5
            }}
          >
            {char}
          </Box>
        ))}
      </Box>
      <Box>
        {seq2.split('').map((char, index) => (
          <Box 
            key={`seq2-${index}`}
            component="span"
            sx={{
              backgroundColor: seq1[index] !== seq2[index] ? "#ccc" : "transparent",
              px: 0.5
            }}
          >
            {char}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default AlignedResult
