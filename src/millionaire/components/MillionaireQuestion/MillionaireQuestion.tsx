interface Props {
  question: string;
}

export default function MillionaireQuestion({ question }: Props) {
  return (
    <h2>
      {question}
    </h2>
  );
}
