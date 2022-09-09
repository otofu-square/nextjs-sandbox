import { styled } from "linaria/react";

type Props = {
  readonly title: string;
  readonly children: React.ReactNode;
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 500px;
  background: grey;
`;

export const SamplePage = ({ title, children }: Props) => (
  <StyledWrapper>
    <h2>{title}</h2>
    {children}
  </StyledWrapper>
);
