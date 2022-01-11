import PropTypes from "prop-types";
import {
  Statistic,
  StatList,
  Title,
  Item,
  ItemLabel,
  ItemPercentage,
} from "./statistics.styled";

export default function Statistics({ title, stats }) {
  return (
    <Statistic>
      <Title>{title}</Title>

      <StatList>
        {stats.map(({ label, percentage, id }) => (
          <Item key={id}>
            <ItemLabel>{label}</ItemLabel>
            <ItemPercentage>{percentage}%</ItemPercentage>
          </Item>
        ))}
      </StatList>
    </Statistic>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
