import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export default function MyAvatar() {
  return (
    <AvatarGroup max={4}>
      <Avatar
        alt="Remy Sharp"
        src="https://randomuser.me/api/portraits/women/79.jpg"
      />
      <Avatar
        alt="Travis Howard"
        src="https://randomuser.me/api/portraits/women/39.jpg"
      />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
  );
}
