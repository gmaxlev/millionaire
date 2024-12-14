interface Props {
  reward: number;
  currency: string;
}

export default function MillionaireReward({ reward, currency }: Props) {
  return (
    <div>
      {`Congratulations! You won ${reward} ${currency}`}
    </div>
  );
}
