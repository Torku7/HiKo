import { useNavigate } from "react-router-dom";
import "../css/button.css";
export default function Button() {
  // 페이지 이동을 위해 상수 선언
  const moveEndPage = useNavigate();

  const moveSecondPage = useNavigate();

  // 레벨2 버튼시 end페이지로 이동
  function goEnd(){
    moveEndPage("/end");
  }

  function goSecond(){
    moveSecondPage("/second");
  }
  return (
    <div class="level-buttons">
          <button class="level-button" onClick={goSecond}>
            레벨 1
          </button>
          <button class="level-button" onClick={goEnd}>
            레벨 2
          </button>
    </div>
  );
}