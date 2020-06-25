import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import MainPage from "../components/MainPage";
import { RoaData } from "../types/roa";

const Container = styled.div``;

interface IProps {
  RoaData: RoaData;
}
const index: NextPage<IProps> = ({ RoaData }) => {
  return (
    <Container>
      <MainPage RoaData={RoaData} />
    </Container>
  );
};

index.getInitialProps = async () => {
  try {
    const proxy = "https://cors-anywhere.herokuapp.com";
    const RoaDataRes = await fetch(
      `${proxy}/https://data.roa.ai/v1/trend?start_date=20200530&end_date=20200606`,
      { headers: { Origin: "data.roa.ai" } }
    );
    const RoaData = await RoaDataRes.json();
    return { RoaData: RoaData };
  } catch (e) {
    console.log(e.message);
    return { RoaData: "" };
  }
};

export default index;
