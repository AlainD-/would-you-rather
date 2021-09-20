import { Badge } from 'primereact/badge';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Panel } from 'primereact/panel';
import Trophy from './Trophy';
import UserAvatar from './UserAvatar';

export default function LeaderCard({leader, rank}) {
  return (
    <Card key={leader.id} className="mb-3">
      <div className="flex">
        <div className="flex flex-column align-self-center">
          <Trophy rank={rank} />
          <UserAvatar url={leader.avatarURL} />
        </div>
        <Divider layout="vertical" />
        <div className="p-fluid flex-grow-1 align-items-center justify-content-center">
          <h3>{leader.name}</h3>
          <div className="flex justify-content-between font-bold">
            <div>Answered questions</div>
            <div>{leader.answered}</div>
          </div>
          <Divider />
          <div className="flex justify-content-between font-bold">
            <div>Created questions</div>
            <div>{leader.created}</div>
          </div>
        </div>
        <Divider layout="vertical" />
        <Panel header="Score">
          <Badge value={`${leader.score}`} severity="success" size="xlarge" />
        </Panel>
      </div>
    </Card>
  );
}
