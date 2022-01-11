import styled from "@emotion/styled";

export const Item = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
`;

export const ItemList = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? "red" : "green")};
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15%;
  background-color: #a9a7a757;
  margin-right: 15px;
`;
export const Name = styled.p`
  font-size: 28px;
  font-weight: 700;
`;
