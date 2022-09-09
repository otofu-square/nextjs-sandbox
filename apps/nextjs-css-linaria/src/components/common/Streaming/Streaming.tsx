import { styled } from "linaria/react";

type Props = {
  readonly title: string;
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 500px;
  background: red;
`;

export const Streaming = ({ title }: Props) => (
  <StyledWrapper>
    <p>{title}</p>
  </StyledWrapper>
);
