import "./style.css";
import "./header.css";
import List from "./List";

const users = [
  {
    id: 1,
    name: "블랙 위도우",
  },
  {
    id: 2,
    name: "아이언맨",
  },
  {
    id: 3,
    name: "헐크",
  },
  {
    id: 4,
    name: "스파이더맨",
  },
  {
    id: 5,
    name: "캡틴 아메리카",
  },
];

document.querySelector(".root").appendChild(List({ userList: users }));
