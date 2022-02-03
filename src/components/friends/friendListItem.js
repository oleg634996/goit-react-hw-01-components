import PropTypes from "prop-types";
import { Status, Avatar, ItemList, Name } from "./Friends.styled";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ItemList>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ItemList>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
