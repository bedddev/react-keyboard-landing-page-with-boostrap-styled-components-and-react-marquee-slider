import styled from "styled-components/";

export default function Button(props) {
  const { text, color, icon } = props;

  const ButtonLink = styled.a`
    color: ${color === "white" ? "#FFFFFF" : "#6DEBB5"};
    border: 2px solid ${color === "white" ? "#FFFFFF" : "#6DEBB5"};
    padding:8px 24px;
    text-decoration:none;
    cursor:pointer;
    transition: all 0.4s;

    :hover{
      color: ${color === "white" ? "#FFFFFF" : "#6DEBB5"};
      opacity: .7;
      transition: all 0.4s;
    }

  `;

  return <ButtonLink>{text} <i className={icon}></i></ButtonLink>;
}
