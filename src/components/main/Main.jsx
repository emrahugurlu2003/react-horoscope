import data from "../../helper/data";
import Card from "./Card";
const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
      {data && data.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
};
export default Main;
