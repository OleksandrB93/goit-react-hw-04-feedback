import { ButtonContainer, ButtonStyled } from "./FeedbackOption.styled";

export default function FeedbackOption({ options, onLeaveFeedback }) {

  return (
    <ButtonContainer>
      {Object.keys(options).map((key) => (
        <ButtonStyled
          options={options}
          key={key}
          onClick={() => onLeaveFeedback(key)}
          name={key}
        >
          {key}
        </ButtonStyled>
      ))}
    </ButtonContainer>
  );
}
