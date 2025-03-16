import { calculateInvestmentResults } from "../util/investment";

export default function Results({ input }) {
  const result = calculateInvestmentResults(input);

  return <p>Result...</p>;
}
