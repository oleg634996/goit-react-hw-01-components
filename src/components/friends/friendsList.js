import FriendListItem from "./friendListItem";
import { Item } from "./friends.styled";

export default function FriendList({ friends }) {
  return (
    <Item>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </Item>
  );
}
