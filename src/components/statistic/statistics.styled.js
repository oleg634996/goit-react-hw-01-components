import styled from "@emotion/styled";

export const Statistic = styled.section`
  width: 400px;
  text-align: center;
`;
export const Title = styled.h2`
  padding: 20px 0px;
  margin: 0px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0px;
  padding: 0px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 80px;
  background-color: ${() => {
    return getRandomHexColor();
  }};
`;

export const ItemLabel = styled.span`
  font-size: 22px;
  padding: 7px 0px;
`;
export const ItemPercentage = styled.span`
  font-size: 28px;
  padding: 7px 0px;
`;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
