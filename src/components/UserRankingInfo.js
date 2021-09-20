import { useSelector } from 'react-redux';
import { getLeaderBoard } from '../utils/helper';

export default function UserRankingInfo() {
  const leaders = useSelector(getLeaderBoard);
  const authedUser = useSelector(({authedUser}) => authedUser);
  const leader = leaders.find(({id}) => id === authedUser);

  if (!leader) {
    return null;
  }

  const info = {leader, rank: leaders.indexOf(leader) + 1};

  return (
    <>
      {info.rank <= 3 && (
        <div className="p-inline-message p-component p-inline-message-success mb-2">
          <i className="p-inline-message-icon pi pi-thumbs-up"></i>
          <span className="p-inline-message-text">
            Congratulations, you are in the top-3!
          </span>
        </div>
      )}
      {info.rank > 3 && (
        <small className="p-inline-message p-component p-inline-message-info mb-2">
          <i className="p-inline-message-icon pi pi-info-circle"></i>
          <span className="p-inline-message-text">
            You are at position {info.rank} with a score of {info.leader.score}
          </span>
        </small>
      )}
    </>
  );
};
