import { useEffect, useRef } from "react";
import "./App.css";
import Editor from "@monaco-editor/react";

function App() {
  const editorRef = useRef(null);

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

  // Capture Ctrl + S key event
  useEffect(() => {
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
  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  return (
    <div className="App">
      {/* <div style={{backgroundColor:"#1f1f1f", color:"#ffca28", padding:"3px 30px",fontSize:"15px" }}>React Code Editor</div> */}
      {/* <div style={{ padding: "10px 0px", backgroundColor: "#1e1e1e" }}> */}
      <Editor
        height="100vh"
        defaultLanguage="javascript"
        defaultValue="// Start coding here"
        // theme="Eiffel"
        onMount={handleEditorDidMount}
      />
      {/* </div> */}
    </div>
  );
}

export default App;
