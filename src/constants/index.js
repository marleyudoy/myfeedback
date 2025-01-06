import all from "../assets/category/all.png";
import returent from "../assets/category/resturent.png";
import hotel from "../assets/category/hotel.png";
import home from "../assets/category/home.png";
import shoping from "../assets/category/shoping.png";
import car from "../assets/category/car.png";
import beauty from "../assets/category/beauty.png";
import park from "../assets/category/park.png";
import museum from "../assets/category/museum.png";
import carWash from "../assets/category/carwash.png";
import bar from "../assets/category/bars.png";
import gym from "../assets/category/gym.png";
import re1 from "../assets/recent/rec1.png";
import re2 from "../assets/recent/rec2.png";
import re3 from "../assets/recent/rec3.png";
import re4 from "../assets/recent/rec4.png";
import re5 from "../assets/recent/rec5.png";
import re6 from "../assets/recent/rec6.png";
import re7 from "../assets/recent/rec7.png";
import re8 from "../assets/recent/rec8.png";
import re9 from "../assets/recent/rec9.png";

const navbarItems = [
  {
    iamge: all,
    text: "All",
  },
  {
    iamge: returent,
    text: "Restaurants",
  },
  {
    iamge: hotel,
    text: "Hotel",
  },
  {
    iamge: home,
    text: "Home services",
  },
  {
    iamge: shoping,
    text: "Shopping",
  },
  {
    iamge: car,
    text: "Car location",
  },
  {
    iamge: beauty,
    text: "Beauty & Spa",
  },
  {
    iamge: park,
    text: "AParkll",
  },
  {
    iamge: museum,
    text: "museum",
  },
  {
    iamge: carWash,
    text: "Car wash",
  },
  {
    iamge: bar,
    text: "Bars",
  },
  {
    iamge: gym,
    text: "Gyms",
  },
];

const footerItems = [
  {
    title: "About",
    items: ["About MyFeedback", "Investor Relations"],
  },
  {
    title: "MyFeedback",
    items: [
      "MyFeedback for business",
      "Collections",
      "Talk",
      "Events",
      "MyFeedback blog",
      "Support",
      "Developers",
    ],
  },
  {
    title: "Languages",
    items: ["English"],
  },
];
const recentActivites = [
  {
    id: 1,
    userName: "Leslie sakho",
    location: "Canada, toronto",
    date:"09/11/2023",
    ratting: 5,
    message:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    images: [re1, re2, re3],
  },
  {
    id: 2,
    userName: "Chris macari",
    location: "Singapour",
    date:"09/11/2023",
    ratting: 5,
    message:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    images: [re4, re5, re6],
  },
  {
    id: 3,
    userName: "Jojo alba",
    location: "Kuala lumpur",
    date:"09/11/2023",
    ratting: 5,
    message:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    images: [re7, re8, re9],
  },
  {
    id: 4,
    userName: "Leslie sakho",
    location: "Canada, toronto",
    ratting: 5,
    message:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    images: [re1, re2, re3],
  },
];

export { navbarItems, footerItems,recentActivites };
