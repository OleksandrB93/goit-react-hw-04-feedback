import {
  ButtonContainer,
  ButtonStyled,
} from "./FeedbackOption.styled";

export default function FeedbackOption({ options, onLeaveFeedback }) {
  // console.log(options.good)
  return (
    <ButtonContainer>
    {Object.keys(options).map(key => (
      <ButtonStyled options={options} key={key} onClick={onLeaveFeedback} name={key}>
        {key}
      </ButtonStyled>
    ))}
    </ButtonContainer>
  );
}
