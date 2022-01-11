import UserData from "../components/user/userdata";
import Statistics from "../components/statistic/statistics";
import FriendList from "../components/friends/friendsList";
import TransactionHistory from "../components/transaction/transactionHistory";
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import { Container } from "./App.styled";

export default function App() {
  return (
    <Container>
      <UserData
        key={user.tag}
        avatar={user.avatar}
        userName={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />;
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </Container>
  );
}
