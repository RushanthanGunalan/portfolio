import ProjectIcon from "../../assets/ProjectIcon.jpg";
import MyContacts from "../../assets/MyContacts.jpg";

import DashBoard from "../../assets/DashBoard.jpg";
import DashBoard02 from "../../assets/DashBoard02.jpg";
import DashBoard03 from "../../assets/DashBoard03.jpg";

import MyContact01 from "../../assets/MyContact01.jpg";
import MyContact02 from "../../assets/MyContact02.jpg";
import MyContact03 from "../../assets/MyContact03.jpg";

const ProjectCardData = [
  {
    imgsrc: ProjectIcon,
    title: "Multi-Tool (Mobile Application)",
    text:
      "An all-in-one mobile app with tools like camera, image reader, calculator, chatbot, and stopwatch." +
      "User-friendly design for easy navigation and clear tool categorization. " +
      "Seamless integration for convenient use." +
      "Innovative features like advanced image reading and chatbot interactions. " +
      "Focuses on providing enhanced control over general mobile tools in one app.",
    view: "",
    carouselImages: [DashBoard, DashBoard02, DashBoard03],
  },
  {
    imgsrc: MyContacts,
    title: "My Contacts (Web Application)",
    text:
      "A web application designed for managing and storing user contact details." +
      "Allows users to add contact information including name, email address, phone number, and an optional profile picture." +
      "Features include saving contacts, editing details, and deleting contacts." +
      "Provides both table view and card view options for displaying saved contacts." +
      "A user-friendly interface ensures smooth navigation and efficient contact management.",
    view: "",
    carouselImages: [MyContact01, MyContact02, MyContact03],
  },
];

export default ProjectCardData;
