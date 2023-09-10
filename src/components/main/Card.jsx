const Card = (props) => {
  console.log("incoming prop:", props);
  return (
    <div className="cards">
      <div className="title">
        <h1>{props.item.title}</h1>
      </div>
      <div className="date">
        <h2>{props.item.date}</h2>
      </div>
      <img src="" alt="" />
      <div className="card-over">
        <p>{props.item.description}</p>
      </div>
    </div>
  );
};
export default Card;
