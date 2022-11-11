import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const ButtonStyled = styled.button`
  margin: 0 10px;
  padding: 3px 6px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 5px;
  border: 1px solid green;
  background-color: #fdc200c8;
  transition: all 300ms;

  &:hover {
    scale: 1.05;
  }

  &:first-of-type {
    color: #000000;
    background-color: #6afe00c9;
  }

  &:last-child {
    color: #000000;
    background-color: #ff0000a3;
  }
`;

// export const ChangeShadow = ( {goodPercent} ) => {
// console.log(goodPercent)

//   if (goodPercent < 34) {
//     return "rgba(255, 0, 0, 0.8)";
//   } else if (goodPercent < 67) {
//     return "rgba(230, 157, 0, 0.8)";
//   } else if (goodPercent > 67) {
//     return "rgba(0, 198, 0, 0.8)";
//   }
//   {
//     return "gray";
//   }
// };

// export const FeedbackContainer = styled.div`
//   width: 500px;
//   margin: auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   border-radius: 8px;
//   transition: all 600ms;

//   background-color: #f0fff0fb;
//   box-shadow: ${ChangeShadow} 0px 100px 700px 50px, #444444 0px 20px 60px -0px,
//     ${ChangeShadow} 0px -5px 20px 0px inset;
// `;
