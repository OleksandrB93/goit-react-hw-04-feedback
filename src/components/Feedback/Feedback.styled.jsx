import styled from "@emotion/styled";

export const ChangeShadow = ({ goodPercent }) => {
  if (goodPercent === 0) {
    return "gray";
  } else if (goodPercent < 34) {
    return "rgba(255, 0, 0, 0.8)";
  } else if (goodPercent < 67) {
    return "rgba(230, 157, 0, 0.8)";
  } else if (goodPercent >= 67) {
    return "rgba(0, 198, 0, 0.8)";
  }

};

export const FeedbackContainer = styled.div`
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  transition: all 600ms;

  background-color: #f0fff0fb;
  box-shadow: ${ChangeShadow} 0px 100px 700px 50px, #444444 0px 20px 60px -0px,
    ${ChangeShadow} 0px -5px 20px 0px inset;
`;
