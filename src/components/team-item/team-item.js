import './team-item.css'

function TeamItem(props) {
    return (
      <div className="team-item bg-light">
          <img src={props.img} alt=""></img>
          <h4>{props.title}</h4>
          <p>{props.text}</p>
      </div>
    );
  }
  
  export default TeamItem;
  