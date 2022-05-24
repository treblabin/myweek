import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Start = (props) => {
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

  return (
    <>
      <TotalCover>
        <Title>내 일주일은?</Title>
        <WeekCover>
          <DayCover>
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
              to="day/:dayName"
              style={{
                width: "0px",
                height: "0px",
                borderTop: "15px solid transparent",
                borderBottom: "15px solid transparent",
                borderLeft: "20px solid purple",
              }}
            />
          </DayCover>
          <DayCover>
            <Date>화</Date>
            <Circles>
              {tue_count.map((n, i) => {
                return mon_count[i] === 1 ? (
                  <YellowCircle key={i + "M"} />
                ) : (
                  <GrayCircle key={i + "M"} />
                );
              })}
            </Circles>
            <Link
              to="day/:dayName"
              style={{
                width: "0px",
                height: "0px",
                borderTop: "15px solid transparent",
                borderBottom: "15px solid transparent",
                borderLeft: "20px solid purple",
              }}
            />
          </DayCover>
          <DayCover>
            <Date>수</Date>
            <Circles>
              {wed_count.map((n, i) => {
                return wed_count[i] === 1 ? (
                  <YellowCircle key={i + "M"} />
                ) : (
                  <GrayCircle key={i + "M"} />
                );
              })}
            </Circles>
            <Link
              to="day/:dayName"
              style={{
                width: "0px",
                height: "0px",
                borderTop: "15px solid transparent",
                borderBottom: "15px solid transparent",
                borderLeft: "20px solid purple",
              }}
            />
          </DayCover>
          <DayCover>
            <Date>목</Date>
            <Circles>
              {thu_count.map((n, i) => {
                return thu_count[i] === 1 ? (
                  <YellowCircle key={i + "M"} />
                ) : (
                  <GrayCircle key={i + "M"} />
                );
              })}
            </Circles>
            <Link
              to="day/:dayName"
              style={{
                width: "0px",
                height: "0px",
                borderTop: "15px solid transparent",
                borderBottom: "15px solid transparent",
                borderLeft: "20px solid purple",
              }}
            />
          </DayCover>
          <DayCover>
            <Date>금</Date>
            <Circles>
              {fri_count.map((n, i) => {
                return fri_count[i] === 1 ? (
                  <YellowCircle key={i + "M"} />
                ) : (
                  <GrayCircle key={i + "M"} />
                );
              })}
            </Circles>
            <Link
              to="day/:dayName"
              style={{
                width: "0px",
                height: "0px",
                borderTop: "15px solid transparent",
                borderBottom: "15px solid transparent",
                borderLeft: "20px solid purple",
              }}
            />
          </DayCover>
          <DayCover>
            <Date>토</Date>
            <Circles>
              {sat_count.map((n, i) => {
                return sat_count[i] === 1 ? (
                  <YellowCircle key={i + "M"} />
                ) : (
                  <GrayCircle key={i + "M"} />
                );
              })}
            </Circles>
            <Link
              to="day/:dayName"
              style={{
                width: "0px",
                height: "0px",
                borderTop: "15px solid transparent",
                borderBottom: "15px solid transparent",
                borderLeft: "20px solid purple",
              }}
            />
          </DayCover>
          <DayCover>
            <Date>일</Date>
            <Circles>
              {sun_count.map((n, i) => {
                return sun_count[i] === 1 ? (
                  <YellowCircle key={i + "M"} />
                ) : (
                  <GrayCircle key={i + "M"} />
                );
              })}
            </Circles>
            <Link
              to="day/:dayName"
              style={{
                width: "0px",
                height: "0px",
                borderTop: "15px solid transparent",
                borderBottom: "15px solid transparent",
                borderLeft: "20px solid purple",
              }}
            />
          </DayCover>
        </WeekCover>
        <BottomCover>
          <AverageArea>
            평균 평점
            <br />
            {(star_count.reduce((a, c) => a + c, 0) / 7).toFixed(1)}
          </AverageArea>
          <ResetBtn>Reset</ResetBtn>
        </BottomCover>
      </TotalCover>
    </>
  );
};

const TotalCover = styled.div`
  border-radius: 5px;
  border-color: #eee;
  border-width: 1px;
  margin-top: 10vh;
  height: 90vh;
  width: 30vw;
  margin: 0px auto;
`;

const Title = styled.h1`
  text-align: center;
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
  background-color: gray;
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
  height: 50px;
`;

export default Start;
