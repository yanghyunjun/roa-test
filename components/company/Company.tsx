import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import { RoaData } from "../../types/roa";

interface IProps {
  RoaData: RoaData;
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  .circle1 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    font-size: 0.8em;
    line-height: 100px;
    background-color: #4287f5;
    padding: 10px;
  }
  .circle2 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    font-size: 0.8em;
    line-height: 100px;
    background-color: #4287f5;
    padding: 60px;
  }
  .circle3 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    font-size: 0.8em;
    line-height: 100px;
    background-color: #42f58a;
    padding: 30px;
  }
  .circle4 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    font-size: 0.8em;
    line-height: 100px;
    background-color: #dfff42;
    padding: 40px;
  }
  .circle5 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    font-size: 0.8em;
    line-height: 100px;
    background-color: #ff5842;
    padding: 50px;
  }
  .circle6 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    font-size: 0.8em;
    line-height: 100px;
    background-color: #ffb742;
    padding: 10px;
  }
  .circle7 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    font-size: 0.8em;
    line-height: 100px;
    background-color: #42fff2;
    padding: 100px;
  }
  .circle8 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    font-size: 0.8em;
    line-height: 100px;
    background-color: #4268ff;
    padding: 90px;
  }
  .circle9 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    font-size: 0.8em;
    line-height: 100px;
    background-color: #9742ff;
    padding: 80px;
  }
  .circle10 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    font-size: 0.8em;
    line-height: 100px;
    background-color: #ff42c0;
    padding: 30px;
  }
`;

const Company: NextPage<IProps> = ({ RoaData }) => {
  const companyData = RoaData.data.corporation;
  const circleCSShandler = (value: number) => {
    switch (value) {
      case 0:
        return "circle1";
        break;
      case 1:
        return "circle2";
        break;
      case 2:
        return "circle3";
        break;
      case 3:
        return "circle4";
        break;
      case 4:
        return "circle5";
        break;
      case 5:
        return "circle6";
        break;
      case 6:
        return "circle7";
        break;
      case 7:
        return "circle8";
      case 8:
        return "circle9";
        break;
      case 9:
        return "circle10";
        break;
        break;

      default:
        break;
    }
  };
  return (
    <Container>
      {companyData.map((data, index) => (
        <div key={index} className={`${circleCSShandler(index)}`}>
          {data.key}
        </div>
      ))}
    </Container>
  );
};

export default Company;
