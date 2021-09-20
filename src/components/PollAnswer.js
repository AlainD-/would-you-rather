import { ProgressBar } from 'primereact/progressbar';
import YourVoteTag from './YourVoteTag';

export default function PollAnswer({text, isUserVote, totalVotes = 0, voted = 0}) {

  const background = isUserVote ? 'var(--cyan-100)' : 'var(--surface-50)';

  const cardStyle = {
    background,
    padding: '1rem',
    boxShadow: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)',
    borderRadius: '4px',
    marginBottom: '1rem'
  };

  const legend = `${voted} out of ${totalVotes} votes`;

  const value = totalVotes !== 0 ? Math.floor(voted * 100 / totalVotes) : 0;

  return (
    <>
      {isUserVote && <YourVoteTag />}
      <div style={cardStyle} className="flex flex-column p-fluid">
        <h3 className="mt-0">{text}</h3>
        <ProgressBar value={value} />
        <div className="font-bold flex align-items-center justify-content-center">{legend}</div>
      </div>
    </>
  );
}
