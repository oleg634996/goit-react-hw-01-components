import styled from "@emotion/styled";

export const Table = styled.table`
  margin: 0 auto 30px;
  width: 400px;
  text-align: center;
  border-collapse: collapse;
  background: #f5ffff;

  th,
  td {
    border: 1px solid grey;
    padding: 7px;
  }

  tr:nth-of-type(odd) {
    background: #ebf3f9;
  }
`;
