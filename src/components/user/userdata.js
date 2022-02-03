import PropTypes from "prop-types";

import {
  Profile,
  UserImg,
  Name,
  SubtitleProfile,
  Stats,
  StatsList,
  ProfileCard,
  Label,
  Quantity,
} from "./User.styled";

export default function UserData({
  avatar,
  userName,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <Profile>
      <ProfileCard>
        <UserImg src={avatar} alt={"avatar"} width="300" />
        <Name>{userName}</Name>
        <SubtitleProfile>@{tag}</SubtitleProfile>
        <SubtitleProfile>{location}</SubtitleProfile>
      </ProfileCard>
      <Stats>
        <StatsList>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsList>
      </Stats>
    </Profile>
  );
}

UserData.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
