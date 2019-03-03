export type Case<IfType, ThenType> = {
  if: IfType;
  then: ThenType | undefined;
};

const conditional = <IfType, ThenType>(cases: Case<IfType, ThenType>[]) => (
  value: IfType,
): ThenType | undefined =>
  cases.reduceRight(
    (
      resultSoFar: ThenType | undefined,
      currentCase: Case<IfType, ThenType>,
    ) => {
      if (currentCase.if === value) {
        return currentCase.then;
      }

      return resultSoFar;
    },
    undefined,
  );

export default conditional;
