import { containerStyle } from "./SamplePage.css";

type Props = {
  readonly title: string;
  readonly children: React.ReactNode;
};

export const SamplePage = ({ title, children }: Props) => (
  <div className={containerStyle}>
    <h2>{title}</h2>
    {children}
  </div>
);
