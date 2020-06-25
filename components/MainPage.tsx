import React, { useState } from "react";
import styled from "styled-components";
import { NextPage } from "next";
import { RoaData } from "../types/roa";
import Company from "./company/Company";
import Industry from "./industry/Industry";
import Tech from "./tech/Tech";

interface IProps {
  RoaData: RoaData;
}

const Container = styled.div`
  padding: 5%;
  .button-wrapper {
    display: flex;
    .button {
      cursor: pointer;
      padding: 10px 5px;
    }
    .button_Click {
      cursor: pointer;
      padding: 10px 5px;
      border-bottom: 2px solid red;
      color: red;
    }
  }
  .contents {
  }
`;

const MainPage: NextPage<IProps> = ({ RoaData }) => {
  // console.log(RoaData);
  const [showCompany, setShowCompany] = useState(false);
  const [showIndustry, setShowIndustry] = useState(false);
  const [showTech, setShowTech] = useState(false);

  const buttonHandler = (value: string) => {
    switch (value) {
      case "company":
        setShowCompany(!showCompany);
        setShowIndustry(false);
        setShowTech(false);
        break;
      case "industry":
        setShowCompany(false);
        setShowIndustry(!showIndustry);
        setShowTech(false);
        break;
      case "tech":
        setShowCompany(false);
        setShowIndustry(false);
        setShowTech(!showTech);
        break;

      default:
        break;
    }
  };

  return (
    <Container>
      <div className="button-wrapper">
        <div
          className={`${showCompany ? `button_Click` : `button`}`}
          role="button"
          onClick={() => buttonHandler("company")}
        >
          기업
        </div>
        <div
          className={`${showIndustry ? `button_Click` : `button`}`}
          role="button"
          onClick={() => buttonHandler("industry")}
        >
          산업
        </div>
        <div
          className={`${showTech ? `button_Click` : `button`}`}
          role="button"
          onClick={() => buttonHandler("tech")}
        >
          기술
        </div>
      </div>
      <div className="contents">
        {showCompany && <Company RoaData={RoaData} />}
        {showIndustry && <Industry RoaData={RoaData} />}
        {showTech && <Tech RoaData={RoaData} />}
      </div>
    </Container>
  );
};

export default MainPage;
