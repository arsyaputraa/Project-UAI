import React from "react";
import styled from "styled-components";

const VisionMissionStyled = styled.div`
  padding: 2rem 3rem;
  display: flex;
  font-size: 2rem;
  div {
    padding: 3rem;
    text-align: center;
    h3 {
      text-decoration: underline;
    }
    line-height: 1.6;
  }

  div.vision {
    flex: 1;
  }
  div.mission {
    flex: 1;
  }
  p {
    font-family: "Playfair Display", serif;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 1.3rem;
    div {
      padding: 1rem 3rem;
    }
  }
`;
const VisionMission = () => {
  return (
    <VisionMissionStyled>
      <div className="vision">
        <h3>Vision</h3>
        <p>
          To build a network around the world in order to supply the world's
          coconut needs.
        </p>
      </div>
      <div className="mission">
        <h3>Mission</h3>
        <p>
          To introduce Indonesian coconut by providing the best and high quality
          coconut products from Indonesia and fulfill the world’s coconut needs.
        </p>
      </div>
    </VisionMissionStyled>
  );
};

export default VisionMission;
