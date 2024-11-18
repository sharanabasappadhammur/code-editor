import { useEffect } from "react";
import "./App.css";
// import Editor from "@monaco-editor/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Share from "./Share";

function App() {
  // const editorRef = useRef(null);

  // Function to execute the code from the editor
  const executeCode = () => {
    // if (editorRef.current) {
    //   const code = editorRef.current.getValue();
    //   try {
    //     console.clear();
    //     // Use the Function constructor to safely execute the code
    //     const result = new Function(code)();
    //     console.log(result);
    //   } catch (error) {
    //     console.error("Error executing code:", error);
    //   }
    // }
  };

  function redirectToMobileApp() {
    const originalUrl = window.location.href;
    const removedPart = "/share";

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      if (/SamsungBrowser/i.test(userAgent)) {
        window.location.href = originalUrl.replace(removedPart, "");
      } else if (/Opera/i.test(userAgent)) {
        window.location.href = originalUrl.replace(removedPart, "");
      } else {
        window.location.href = originalUrl.replace(removedPart, "");
      }
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      if (originalUrl.includes("www")) {
        window.location.href = originalUrl
          .replace(removedPart, "")
          .replace("https://www.", "");
      } else {
        window.location.href = originalUrl
          .replace(removedPart, "")
          .replace("https://", "");
      }
    }
  }

  // Capture Ctrl + S key event
  useEffect(() => {
    redirectToMobileApp();
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault(); // Prevent the default save action
        executeCode(); // Execute the code
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Function to handle editor mount and get editor instance
  // const handleEditorDidMount = (editor) => {
  //   editorRef.current = editor;
  // };

  return (
    <div className="App">
      {/* <div style={{backgroundColor:"#1f1f1f", color:"#ffca28", padding:"3px 30px",fontSize:"15px" }}>React Code Editor</div> */}
      {/* <div style={{ padding: "10px 0px", backgroundColor: "#1e1e1e" }}> */}
      {/* <Editor
        height="100vh"
        defaultLanguage="javascript"
        defaultValue="// Start coding here"
        // theme="Eiffel"
        onMount={handleEditorDidMount}
      /> */}

      <Router>
        {/* The Switch component renders the first route that matches */}
        <Switch>
          {/* <Route path="/share" component={Share} /> */}
          <Route exact path="/share/News/:id" component={Share} />
        </Switch>
      </Router>

      {/* </div> */}
    </div>
  );
}

export default App;
