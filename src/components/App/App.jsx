import UserData from "../User/Userdata";
import Statistics from "../Statistic/Statistics";
import FriendList from "../Friends/FriendsList";
import TransactionHistory from "../Transaction/TransactionHistory";
import user from "../../data/user.json";
import data from "../../data/data.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";
import { Container } from "./App.styled";

export default function App() {
  const {username,tag,location,avatar,stats}= user
  return (
    <Container>
      <UserData
        stats = {stats}
        avatar={avatar}
        userName={username}
        tag={tag}
        location={location}
        
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
