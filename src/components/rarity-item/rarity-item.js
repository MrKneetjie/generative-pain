import './rarity-item.css'

function RarityItem(props) {
    return (
      <div className="rarity-item bg-light">
          <img src={props.img} alt=""></img>
          <h4>{props.title}</h4>
          <p>{props.text}</p>
      </div>
    );
  }
  
  export default RarityItem;
  