import FriendListItem from "./FriendListItem";
import { Item } from "./Friends.styled";

export default function FriendList({ friends }) {
  return (
    <Item>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </Item>
  );
}
