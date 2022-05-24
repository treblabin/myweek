import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Day(props) {
  const params = useParams();
  const DayInput = [params.dayName][0];
  console.log(DayInput);
  return (
    <>
      <h1>this is daypage</h1>
    </>
  );
}

export default Day;
