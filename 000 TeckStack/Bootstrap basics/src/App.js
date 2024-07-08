//import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import "bootstrap-icons/font/bootstrap-icons.min.css";

import MyContainer from "./Layouts/MyContainer";
import MyGrid from "./Layouts/MyGrid";

import MyAccordian from "./MyComponents/MyAccordian";
import MyNestedAccordian from "./MyComponents/MyNestedAccordian";

import MyCard from "./MyComponents/MyCard";

import MyCarousel from "./MyComponents/MyCarousel";
import MyCollapse from "./MyComponents/MyCollapse";

import MyListGroup from "./MyComponents/MyListGroup";

import MyModal from "./MyComponents/MyModal";
import MyPlaceholder from "./MyComponents/MyPlaceholder";

import MyNavbar from "./MyComponents/MyNavbar";

import MyOffcanvas from "./MyComponents/MyOffcanvas";

import MyTabs from "./MyComponents/MyTabs";
import MyForm from "./MyComponents/MyForm";
export default function App() {
  return (
    <div className="App">
      {/* <MyContainer /> */}
      {/* <MyGrid /> */}
      {/* <MyAccordian /> */}
      {/* <MyNestedAccordian /> */}
      {/* <MyCard /> */}
      {/* <MyCarousel /> */}
      {/* <MyCollapse /> */}

      {/* <MyListGroup /> */}

      {/* <MyModal /> */}
      {/* <MyPlaceholder /> */}

      {/* <MyNavbar /> */}
      {/* <MyOffcanvas /> */}
      {/* <MyTabs /> */}
      <MyForm />
    </div>
  );
}
