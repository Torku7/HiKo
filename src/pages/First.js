import Header from "../common/header";
import Button from "../common/button";
import "../css/first.css";

export default function Frist() {
  return (
    <div className="container">
    <div className="mw">
      <nav className="first-nav">
        <Header />
      </nav>
      <div className="first-div">
        <Button />
      </div>
    </div>
    </div>
  );
}
