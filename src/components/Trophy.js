import { FaTrophy } from 'react-icons/fa';

export default function Trophy({rank}) {
  const color = rank === 1
    ? 'var(--yellow-500)'
    : rank === 2
      ? 'var(--green-400)'
      : 'var(--bluegray-600)';

  if (rank > 3) {
    return null;
  }

  return (
    <div style={{
      backgroundColor: 'var(--bluegray-100)',
      borderRadius: '50%',
      padding: '0.5rem 0',
      justifyContent: 'center',
      border: '1px solid var(--bluegray-200)',
      fontSize: '1rem',
      margin: '0',
      display: 'inline-flex',
      alignItems: 'center',
      verticalAlign: 'bottom',
      textAlign: 'center',
      overflow: 'hidden',
      position: 'relative',
      height: '2.357rem',
      width: '2.357rem'
    }}>
      <FaTrophy style={{color}} />
    </div>
  );
};
