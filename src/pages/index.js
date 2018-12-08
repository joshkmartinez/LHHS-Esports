import React from "react";
import { View } from "react";
import "../style.css";
import { mx } from "../screensizes";
import {
  Heading,
  Flex,
  Column,
  Box,
  Container,
  Link,
  Text,
  Image,
  Card
} from "rebass";
import {
  Wrapper,
  SmallerWrapper,
  Icon,
  Medium,
  SocialMedia,
  Paragraph,
  Project,
  ProjectTitle,
  ProjectDesc,
  ProjectFinish,
  Footer
} from "../components/components";
import styled from "styled-components";
import Helmet from "react-helmet";
import Paper from "@material-ui/core/Paper";

export default isOpen => (
  <React.Fragment>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />

    <Wrapper>
      <Helmet
        title="Hawks Gaming Club"
        meta={[
          {
            name: "description",
            content: "Laguna Hills High School Esports Club"
          },
          {
            name: "keywords",
            content: "Hawk, Gaming, LHHS, Hawk Gaming Club, LHHS Esports, LHHS Gaming"
          }
        ]}
      />

      <CenteredBox>
        <HeaderBlock>
          <CenteredBlock>
            <Card
              borderRadius={21}
              boxShadow="0 3px 21px rgba(0, 0, 0, 0.25)"
              styles={{ alignItems: "center", width: "30%" }}
            >
              <Centered>
                <div class="glitch large" data-text="">
                  Hawk Gaming Club
                </div>
              </Centered>
              {/*<div class="glitch small" data-text="">I create cool things</div>*/}
            </Card>
          </CenteredBlock>
          <Break />
        </HeaderBlock>
      </CenteredBox>
    </Wrapper>
    <Break />

    <Break />

    <Footer>
      <CenteredBlock>Site created by Joshua Martinez</CenteredBlock>
    </Footer>
  </React.Fragment>
);

const Hello = Heading.extend.attrs({ m: 0, fontSize: 50, textAlign: "left" })`
  position: relative;
  left: -6px;

  ${mx[0]} {
    left: 0px;
  }
  line-height: 1.5;
  color: black;
  font-family: "Averta-Bold";
`;
const SmallerHello = Heading.extend.attrs({
  fontSize: 45,
  mr: 3,
  textAlign: "center"
})`
  line-height: 1.5;
  color: white;
  font-family: "Averta-Bold";
`;
const Subhead = Heading.extend.attrs({
  f: 6,
  m: 0,
  fontSize: 30,
  textAlign: "center"
})`
  line-height: 2;
  color: white;
  font-family: "Averta-Bold";
`;
const Left = Flex.extend.attrs()`
  position: relative;
  left: -25px;
  ${mx[0]} {
    left: -7px;
  }
`;
const CenteredBox = Column.extend.attrs({})`
  display: flex;
  justify-content: center;
`;

const Centered = Box.extend.attrs({})`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Break = Flex.extend.attrs({
  flexDirection: ["column", "row"],
  px: 3
})`
  text-align: center;
  ${mx[0]} {
    min-height: 5vh;
    text-align: left;
  }
`;

const HeaderBlock = Column.extend.attrs({ py: 2, pl: [null, 5] })`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const CenteredBlock = Column.extend.attrs({
  py: 2,
  ml: [-25, 210],
  mr: [-40, 240]
})`
  ${mx[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
