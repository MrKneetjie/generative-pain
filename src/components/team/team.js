import TeamItem from '../team-item/team-item';

import './team.css'

function Team() {
    return (
      <div id="team" className="team bg-light">
        <h1>Team</h1>
        <div className="team-wrapper">
          <TeamItem img="/sackman.jpg" title="Sackmanjones" text="Creative Lead"/>
          <TeamItem img="/appraiser.jpg" title="The Appraiser" text="Ops/Marketing"/>
          <TeamItem img="/dijon.jpg" title="Dijon_danny" text="Pain Reliever"/>
        </div>
      </div>
    );
  }
  
export default Team;