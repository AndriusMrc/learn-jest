interface SumProps {
  x: number;
  y: number;
}

export const Sum = ({ x, y }: SumProps) => {
  return <>{x + y}</>;
};

export const calculateSum = ({ x, y }: SumProps) => {
  return x + y;
};
