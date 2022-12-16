import { Buttons, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ onClick }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <Buttons>
        <Button type="submit" name="good" onClick={onClick}>
          Good
        </Button>
        <Button type="submit" name="neutral" onClick={onClick}>
          Neutral
        </Button>
        <Button type="submit" name="bad" onClick={onClick}>
          Bad
        </Button>
      </Buttons>
    </div>
  );
};
