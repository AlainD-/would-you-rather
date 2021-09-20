import { Divider } from 'primereact/divider';
import { Panel } from 'primereact/panel';

export default function QuestionNotFound() {
  const header = <span style={{color: 'var(--pink-700)'}}>Not Found</span>;

  return (
    <Panel header={header} className="mb-3">
      <div className="flex align-content-center" style={{color: 'var(--pink-700)'}}>
        <i className="pi pi-exclamation-triangle flex align-items-center justify-content-center mr-2" style={{fontSize: '2em'}}></i>
        <Divider layout="vertical" />
        <div className="p-fluid flex-grow-1 align-items-center justify-content-center">
          <p>This question was not found!</p>
        </div>
      </div>
    </Panel>
  );
}
