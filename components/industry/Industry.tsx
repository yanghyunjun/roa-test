import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import { RoaData } from "../../types/roa";

interface IProps {
  RoaData: RoaData;
}

const Container = styled.div``;

const Industry: NextPage<IProps> = ({ RoaData }) => {
  const industryData = RoaData.data.industry;
  return (
    <Container>
      {industryData.map((data, index) => (
        <div key={index}>{data.key}</div>
      ))}
    </Container>
  );
};

export default Industry;
