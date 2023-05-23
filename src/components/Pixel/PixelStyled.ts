import { styled } from "styled-components";

const PixelStyled = styled.td`
  border: 1px solid #000;
  width: 40px;
  height: 40px;

  &.mini {
    width: 10px;
    height: 10px;
    border: none;
  }

  &.on {
    background-color: #000;
  }
`;

export default PixelStyled;
