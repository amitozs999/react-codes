import Folder from "./Components/Folder";
import "./styles.css";

import dataobj from "./Data/FileData";

export default function App() {
  return <Folder dataobj={dataobj}/>;
}
