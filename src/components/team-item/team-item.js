import './team-item.css'

function TeamItem(props) {
    return (
      <div className="team-item bg-light">
          <img src={props.img} alt=""></img>
          <h4>{props.text}</h4>
          <p>{props.title}</p>
      </div>
    );
  }
  
  export default TeamItem;
  