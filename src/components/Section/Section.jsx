import React from "react";
import { Title } from "./Section.styled";

export default function Section({ title, children, goodPercent }) {
  // const img = "🥺";

  function imgFeedback() {
    let img = "";
    if (goodPercent < 34) {
      return (img = "😡");
    } else if (goodPercent < 67) {
      return (img = "😞");
    } else if (goodPercent >= 67) {
      return (img = "🤩");
    }
  }

  return (
    <section>
      <Title>
        {title}
      {imgFeedback()}
      </Title>
      {children}
    </section>
  );
}
