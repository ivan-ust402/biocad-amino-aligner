export const getAminoColor = (char: string): string => {
  const upperChar = char.toUpperCase();
  if (upperChar === 'C') return '#FFEA00';
  if ('AILMFWYVP'.includes(upperChar)) return '#67E4A6';
  if (upperChar === 'G') return '#C4C4C4';
  if ('DE'.includes(upperChar)) return '#FC9CAC';
  if ('KR'.includes(upperChar)) return '#BB99FF';
  if ('STHQN'.includes(upperChar)) return '#80BFFF';
  return '#FFFFFF';
};