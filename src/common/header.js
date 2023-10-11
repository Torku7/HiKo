import { Link } from "react-router-dom";
import "../css/header.css";
import Button from "./Button";
// 여기 컴포넌트에는 왼쪽 상단으로 프로젝트 이름, ?버튼이 존재할것.
export default function Header() {
  return (
    <header className="mw">
      <h1>
        히코
      </h1>
      <nav>
        <Link to="/end">마지막페이지</Link>
      </nav>
    </header>
  );
}
