import { useState } from "react";
import React from "react";

import dataobj from "../Data/FileData";

//for dataobj which have  nested folder items we need a
//seperate Folder comp can call it recusicely

//will have seperate Folder component for each folder having seperate use state to check if its open or closed


// if (dataobj has folderItems) means "folder he" so new folder found
// else "file he" toh just print filenames of this passed folder


const Folder = ({ dataobj }) => {
  const [expanded, setExpanded] = useState(false);

  if (!dataobj.folderItems) {
    return <div>📄 {dataobj.filename}</div>; //file hogi if no folder items

    
  } else {
    //folder hogi if has folder items 
    //so call same comp again for that folder items
    // boz that can again have another folder item

    return (
        <>
          <div onClick={() => setExpanded(!expanded)}>
            {expanded ? "📂" : "📂"}
            {dataobj.foldername}
          </div>

          {/* //show items of this folder (display "block" ) if expanded */}

          <div
            style={{ display: expanded ? "block" : "none", paddingLeft: "15px" }}
          >
            {dataobj.folderItems.map((item) => (
              <Folder dataobj={item}></Folder>  //again pass new obj details for new folder comp
            ))}
          </div>
        </>
      );
    }
};

export default Folder;
