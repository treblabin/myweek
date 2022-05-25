import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

function Day(props) {
  const params = useParams();
  const DayInput = [params.dayName][0];
  const Days = ["월", "화", "수", "목", "금", "토", "일"];
  const DaysInput = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const [count, setCount] = React.useState(0);
  const real_date = Days[DaysInput.indexOf(DayInput)];
  const star_count = Array.from({ length: 5 }, (v, i) => (count > i ? 1 : 0));
  const onClickHandler = (i) => {
    setCount(i + 1);
  };

  window.onkeydown = (e) =>
    e.key === 1 || 2 || 3 || 4 || 5 ? setCount(e.key) : 0;

  return (
    <MyCover>
      <FullCover>
        <TitleCover>
          <TitleStar1>{real_date}요일</TitleStar1>
          <TitleStar2>평점 남기기</TitleStar2>
        </TitleCover>
        <StarCover>
          {star_count.map((n, i) => {
            return star_count[i] === 1 ? (
              <YellowCircle key={i + "C"} onClick={() => onClickHandler(i)} />
            ) : (
              <GrayCircle key={i + "C"} onClick={() => onClickHandler(i)} />
            );
          })}
        </StarCover>
        <Link
          to="/"
          style={{
            display: "contents",
          }}
        >
          <LinkButton>평점 남기기</LinkButton>
        </Link>
      </FullCover>
    </MyCover>
  );
}

const MyCover = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FullCover = styled.div`
  border-radius: 5px;
  border-color: #ddd;
  border-width: 1px;
  margin-top: 10vh;
  height: 90vh;
  width: 80vw;
  max-width: 350px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  border-style: solid;
`;

const TitleCover = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10vh;
`;

const TitleStar1 = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  color: white;
  background-color: orange;
  border-radius: 5px;
  padding: 2px;
`;

const StarCover = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TitleStar2 = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  padding-left: 0.5em;
`;

const YellowCircle = styled.button`
  background-color: yellow;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: auto 5px;
  border-width: 0px;
`;

const GrayCircle = styled.button`
  background-color: #ddd;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: auto 5px;
  border-width: 0px;
`;

const LinkButton = styled.button`
  background-color: purple;
  color: white;
  width: 200px;
  height: 60px;
  margin: 30px auto;
  border-radius: 10px;
  border-width: 0px;
`;

export default Day;
