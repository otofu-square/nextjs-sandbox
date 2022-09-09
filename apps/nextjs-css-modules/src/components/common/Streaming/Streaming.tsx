import styles from "./Streaming.module.css";

type Props = {
  readonly title: string;
};

export const Streaming = ({ title }: Props) => (
  <div className={styles.container}>
    <p>{title}</p>
  </div>
);
