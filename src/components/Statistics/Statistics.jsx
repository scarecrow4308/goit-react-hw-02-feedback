import { Section } from "../Section/Section";

export const Statistics = ({ good, neutral, bad, positive, total }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <Section title="Good:">{good}</Section>
      <Section title="Neutral:">{neutral}</Section>
      <Section title="Bad:">{bad}</Section>
      <Section title="Total:">{total}</Section>
      <Section title="Positive:">{positive}%</Section>
    </div>
  );
};
