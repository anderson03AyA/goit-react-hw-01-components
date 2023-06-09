import React from "react";
import Style from "./FriendsList.module.css";
import data from "../../data/friends.json";

export const FriendsList = () => {
  return (
    <ul className={Style.friendList}>
      {data.map((item) => (
        <li className={Style.item} key={item.id}>
          <span
            className={`${Style.status} ${
              item.isOnline
                ? Style["status--active"]
                : Style["status--inactive"]
            }`}
          />
          <img
            className={Style.avatar}
            src={item.avatar}
            alt={item.name}
            width="48"
          />
          <p className={Style.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};
