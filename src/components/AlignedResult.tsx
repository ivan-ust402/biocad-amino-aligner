import { Box, Snackbar } from '@mui/material';
import React, { useRef, useState } from 'react'
import { getAminoColor } from '../utils/utils';

interface AlignedResultProps {
  seq1: string;
  seq2: string;
}

const AlignedResult = ({seq1, seq2}: AlignedResultProps) => {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    if (window.getSelection()) {
      const text = window.getSelection()?.toString();
      if (text) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      }
    }
  }
  return (
    <Box 
      ref={containerRef}
      sx={{
        mt: 4,
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        maxWidth: '100%',
        overflowWrap: 'break-word',
        cursor: 'text',
      }}
      onMouseUp={handleCopy}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
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
      <Box 
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
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
      <Snackbar 
        open={copied}
        message="Скопировано"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      />
    </Box>
  )
}

export default AlignedResult
