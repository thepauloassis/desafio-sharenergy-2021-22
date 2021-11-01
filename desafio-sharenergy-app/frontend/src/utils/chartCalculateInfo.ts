interface IData {
  tempo_h: number;
  tensao_V: number;
  corrente_A: number;
  potencia_kW: number;
  temperatura_C: number;
}

export const calculateChartInfo = (data: Array<IData>, variable: string) => {
  let selectArray: number[] = [];

  if (variable === 'tensao_V') selectArray = data.map((data) => data.tensao_V);
  if (variable === 'corrente_A')
    selectArray = data.map((data) => data.corrente_A);
  if (variable === 'potencia_kW')
    selectArray = data.map((data) => data.potencia_kW);
  if (variable === 'temperatura_C')
    selectArray = data.map((data) => data.temperatura_C);

  const arraySort = selectArray.sort();

  const totalArray = arraySort.length;

  const mean = arraySort.reduce((acc, value) => acc + value / totalArray, 0);

  const mode = calculateMode(arraySort);

  const median = calculateMedian(arraySort);

  const variance = arraySort.reduce(
    (acc, value) => acc + Math.pow(mean - value, 2) / totalArray,
    0,
  );

  const standardDeviation = Math.sqrt(variance);

  const minimum = arraySort[0];
  const maximum = arraySort[arraySort.length - 1];

  return {
    mean: Number(mean.toFixed(2)),
    mode: Number(mode.toFixed(2)),
    median: Number(median.toFixed(2)),
    variance: Number(variance.toFixed(2)),
    standardDeviation: Number(standardDeviation.toFixed(2)),
    minimum: Number(minimum.toFixed(2)),
    maximum: Number(maximum.toFixed(2)),
  };
};

const calculateMode = (a: number[]) => {
  a = a.slice().sort((x: number, y: number) => x - y);

  let bestStreak = 1;
  let bestElem = a[0];
  let currentStreak = 1;
  let currentElem = a[0];

  for (let i = 1; i < a.length; i++) {
    if (a[i - 1] !== a[i]) {
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        bestElem = currentElem;
      }

      currentStreak = 0;
      currentElem = a[i];
    }

    currentStreak++;
  }

  return currentStreak > bestStreak ? currentElem : bestElem;
};

function calculateMedian(numbers: number[]) {
  // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
  let median = 0;
  const numsLen = numbers.length;
  numbers.sort();

  if (
    numsLen % 2 ===
    0 // is even
  ) {
    // average of two middle numbers
    median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
  } else {
    // is odd
    // middle number only
    median = numbers[(numsLen - 1) / 2];
  }

  return median;
}
