import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import { RoaData } from "../../types/roa";

interface IProps {
  RoaData: RoaData;
}

const Container = styled.div``;

const Tech: NextPage<IProps> = ({ RoaData }) => {
  const techData = RoaData.data.tech;
  return (
    <Container>
      {techData.map((data, index) => (
        <div key={index}>{data.key}</div>
      ))}
    </Container>
  );
};

export default Tech;
