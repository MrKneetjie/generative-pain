import TeamItem from '../team-item/team-item';

import './team.css'

function Team() {
    return (
      <div id="team" className="team bg-light">
        <h1>Team</h1>
        <div className="team-wrapper">
          <TeamItem img="https://miro.medium.com/max/1200/1*5AyYzOlGlv501PlJlIdZZQ.jpeg" title="Sackmanjones" text="Creative Lead"/>
          <TeamItem img="https://miro.medium.com/max/1200/1*5AyYzOlGlv501PlJlIdZZQ.jpeg" title="The Appraiser" text="Ops/Marketing"/>
          <TeamItem img="https://miro.medium.com/max/1200/1*5AyYzOlGlv501PlJlIdZZQ.jpeg" title="Dijon_danny" text="Pain Reliever"/>
        </div>
      </div>
    );
  }
  
export default Team;