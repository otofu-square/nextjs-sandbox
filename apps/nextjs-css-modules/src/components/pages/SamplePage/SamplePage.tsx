import styles from "./SamplePage.module.css";

type Props = {
  readonly title: string;
  readonly children: React.ReactNode;
};

export const SamplePage = ({ title, children }: Props) => (
  <div className={styles.container}>
    <h2>{title}</h2>
    {children}
  </div>
);
