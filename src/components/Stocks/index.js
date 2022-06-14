import { useHistory } from "react-router-dom";
function Stocks() {
  const history = useHistory();
  // const loggedIn = false;
  // if (loggedIn === false){

  // }
  const handleClick = () => {
    window.alert("Sending info to the DB!");
    history.push("/");
  };
  return (
    <div className="comp orange">
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;
