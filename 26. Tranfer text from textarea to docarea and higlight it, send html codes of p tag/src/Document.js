import React, { useState } from "react";

const Document = () => {
  const [text, setText] = useState("");
  const [document, setDocument] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    if (!loading) {
      setLoading(true);
      e.preventDefault();

      let newDoc = `<p class="paragraph-highlight-class">${text}</p>`; //adding this html in document code
      setDocument(document + newDoc);
      removeHighlightAfterTime();
      setText("");
    }
  };

  const removeHighlightAfterTime = () => {
    //after 2 sec remove that animation class from <p> tag to " "
    setTimeout(() => {
      setDocument((pdoc) => {
        let d = pdoc.replace(` class="paragraph-highlight-class"`, "");
        setLoading(false);
        return d;
      });
    }, 2000);
  };

  return (
    <div>
      <div className="body-container">
        <form>
          <textarea
            onKeyDown={(e) => {
              //enter code is 13
              if (e.key === "13" || e.keyCode === 13) {
                handleSubmit(e);
              }
            }}
            value={text}
            className="textarea"
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here..."
            rows={4}
          ></textarea>
        </form>
      </div>

      <div className="document-container">
        <p className="para">Document</p>

        {/* dangerouslySetInnerHTML is React's replacement for using innerHTML in the browser DOM */}
        {document ? (
          <div
            className="document-body"
            dangerouslySetInnerHTML={{
              __html: document,
            }}
          ></div>
        ) : (
          <div
            className="document-body"
            style={{ textAlign: "center", color: "#52525240" }}
          >
            Added content will show here
          </div>
        )}
      </div>
    </div>
  );
};

export default Document;

// export default function App() {
//     const htmlContent = "<p>This is raw <strong>HTML</strong> content.<p>";

//     return (
//       <div className="App">
//         <h1>Raw HTML</h1>
//         <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
//       </div>
//     );
//   }

// e set the raw html string stored in the variable htmlContent

// The htmlContent will be set as innerHTML of the <div></div> tag.
