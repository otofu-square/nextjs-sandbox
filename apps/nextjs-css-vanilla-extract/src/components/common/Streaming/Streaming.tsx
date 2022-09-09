import { containerStyle } from "./Streaming.css";

type Props = {
  readonly title: string;
};

export const Streaming = ({ title }: Props) => (
  <div className={containerStyle}>
    <p>{title}</p>
  </div>
);
