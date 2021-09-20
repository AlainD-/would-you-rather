import { useSelector } from 'react-redux';
import { getLeaderBoard } from '../utils/helper';
import LeaderCard from './LeaderCard';
import InfoMessage from './InfoMessage';
import UserRankingInfo from './UserRankingInfo';

export default function LeaderBoard() {
  const leaders = useSelector(getLeaderBoard);

  if (leaders.length === 0) {
    return <InfoMessage text="The leader board is currently empty." />;
  }

  return (
    <>
      <UserRankingInfo />
      {leaders.map((leader, index) => (
        <LeaderCard key={leader.id} leader={leader} rank={index + 1} />
      ))}
    </>
  );
}
