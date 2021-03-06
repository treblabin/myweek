import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Start = (props) => {
  const [count, setCount] = React.useState(0);
  const star_count = Array.from({ length: 7 }, (v, i) =>
    Math.floor(Math.random() * 5 + 1)
  );
  const mon_count = Array.from({ length: 5 }, (v, i) =>
    star_count[0] > i ? 1 : 0
  );
  const tue_count = Array.from({ length: 5 }, (v, i) =>
    star_count[1] > i ? 1 : 0
  );
  const wed_count = Array.from({ length: 5 }, (v, i) =>
    star_count[2] > i ? 1 : 0
  );
  const thu_count = Array.from({ length: 5 }, (v, i) =>
    star_count[3] > i ? 1 : 0
  );
  const fri_count = Array.from({ length: 5 }, (v, i) =>
    star_count[4] > i ? 1 : 0
  );
  const sat_count = Array.from({ length: 5 }, (v, i) =>
    star_count[5] > i ? 1 : 0
  );
  const sun_count = Array.from({ length: 5 }, (v, i) =>
    star_count[6] > i ? 1 : 0
  );
  const ResetStar = () => {
    return count === 1 ? 0 : setCount(count + 1);
  };

  const current = new window.Date().getDay();

  const mycode = [
    <DayCover key="sun">
      <Date>일</Date>
      <Circles>
        {sun_count.map((n, i) => {
          return sun_count[i] === 1 ? (
            <YellowCircle key={i + "SU"} />
          ) : (
            <GrayCircle key={i + "SU"} />
          );
        })}
      </Circles>
      <Link
        to="day/sun"
        style={{
          width: "0px",
          height: "0px",
          borderTop: "15px solid transparent",
          borderBottom: "15px solid transparent",
          borderLeft: "20px solid purple",
        }}
      />
    </DayCover>,
    <DayCover key="mon">
      <Date>월</Date>
      <Circles>
        {mon_count.map((n, i) => {
          return mon_count[i] === 1 ? (
            <YellowCircle key={i + "M"} />
          ) : (
            <GrayCircle key={i + "M"} />
          );
        })}
      </Circles>
      <Link
        to="day/mon"
        style={{
          width: "0px",
          height: "0px",
          borderTop: "15px solid transparent",
          borderBottom: "15px solid transparent",
          borderLeft: "20px solid purple",
        }}
      />
    </DayCover>,
    <DayCover key="tue">
      <Date>화</Date>
      <Circles>
        {tue_count.map((n, i) => {
          return tue_count[i] === 1 ? (
            <YellowCircle key={i + "T"} />
          ) : (
            <GrayCircle key={i + "T"} />
          );
        })}
      </Circles>
      <Link
        to="day/tue"
        style={{
          width: "0px",
          height: "0px",
          borderTop: "15px solid transparent",
          borderBottom: "15px solid transparent",
          borderLeft: "20px solid purple",
        }}
      />
    </DayCover>,
    <DayCover key="wed">
      <Date>수</Date>
      <Circles>
        {wed_count.map((n, i) => {
          return wed_count[i] === 1 ? (
            <YellowCircle key={i + "W"} />
          ) : (
            <GrayCircle key={i + "W"} />
          );
        })}
      </Circles>
      <Link
        to="day/wed"
        style={{
          width: "0px",
          height: "0px",
          borderTop: "15px solid transparent",
          borderBottom: "15px solid transparent",
          borderLeft: "20px solid purple",
        }}
      />
    </DayCover>,
    <DayCover key="thu">
      <Date>목</Date>
      <Circles>
        {thu_count.map((n, i) => {
          return thu_count[i] === 1 ? (
            <YellowCircle key={i + "TH"} />
          ) : (
            <GrayCircle key={i + "TH"} />
          );
        })}
      </Circles>
      <Link
        to="day/thu"
        style={{
          width: "0px",
          height: "0px",
          borderTop: "15px solid transparent",
          borderBottom: "15px solid transparent",
          borderLeft: "20px solid purple",
        }}
      />
    </DayCover>,
    <DayCover key="fri">
      <Date>금</Date>
      <Circles>
        {fri_count.map((n, i) => {
          return fri_count[i] === 1 ? (
            <YellowCircle key={i + "F"} />
          ) : (
            <GrayCircle key={i + "F"} />
          );
        })}
      </Circles>
      <Link
        to="day/fri"
        style={{
          width: "0px",
          height: "0px",
          borderTop: "15px solid transparent",
          borderBottom: "15px solid transparent",
          borderLeft: "20px solid purple",
        }}
      />
    </DayCover>,
    <DayCover key="sat">
      <Date>토</Date>
      <Circles>
        {sat_count.map((n, i) => {
          return sat_count[i] === 1 ? (
            <YellowCircle key={i + "S"} />
          ) : (
            <GrayCircle key={i + "S"} />
          );
        })}
      </Circles>
      <Link
        to="day/sat"
        style={{
          width: "0px",
          height: "0px",
          borderTop: "15px solid transparent",
          borderBottom: "15px solid transparent",
          borderLeft: "20px solid purple",
        }}
      />
    </DayCover>,
  ];

  return (
    <MyCover>
      <TotalCover>
        <Title>내 일주일은?</Title>
        <WeekCover>
          {mycode[current]}
          {mycode[(current + 1) % 7]}
          {mycode[(current + 2) % 7]}
          {mycode[(current + 3) % 7]}
          {mycode[(current + 4) % 7]}
          {mycode[(current + 5) % 7]}
          {mycode[(current + 6) % 7]}
        </WeekCover>
        <BottomCover>
          <AverageArea>
            평균 평점
            <br />
            {count === 1
              ? 0
              : (star_count.reduce((a, c) => a + c, 0) / 7).toFixed(1)}
          </AverageArea>
          <ResetBtn onClick={ResetStar}>Reset</ResetBtn>
        </BottomCover>
      </TotalCover>
    </MyCover>
  );
};

const MyCover = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TotalCover = styled.div`
  border-radius: 5px;
  border-color: #ddd;
  border-width: 1px;
  height: 90vh;
  width: 80vw;
  max-width: 350px;
  margin: 0px auto;
  border-style: solid;
`;

const Title = styled.h3`
  text-align: center;
  margin-top: 10vh;
`;

const WeekCover = styled.div``;

const DayCover = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

const Date = styled.p`
  margin: auto 20px;
  font-weight: bold;
`;

const Circles = styled.div`
  display: flex;
  flex-direction: row;
`;

const YellowCircle = styled.div`
  background-color: yellow;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: auto 5px;
`;

const GrayCircle = styled.div`
  background-color: #ddd;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: auto 5px;
`;

const BottomCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: static;
`;

const AverageArea = styled.p`
  color: blue;
  font-size: 18pt;
  text-align: center;
  font-weight: bold;
`;

const ResetBtn = styled.button`
  margin: 10px auto;
  background-color: #1f90ff;
  color: white;
  border-width: 0px;
  border-radius: 10px;
  width: 30%;
  height: 60px;
  font-weight: bold;
  font-size: 15pt;
`;

export default Start;
