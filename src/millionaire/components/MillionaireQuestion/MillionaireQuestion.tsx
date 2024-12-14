import styles from './MillionaireQuestion.module.scss';

interface Props {
  question: string;
}

export default function MillionaireQuestion({ question }: Props) {
  return (
    <h2 className={styles.question}>
      {question}
    </h2>
  );
}
