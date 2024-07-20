import "./App.css";
import { useState } from "react";
import explorerData from "./data/explorerData";
import Folder from "./components/Folder";
import useTreeHook from "./hooks/use-tree-hook";

function App() {
  const [explorerDateTree, setExplorerDataTree] = useState(explorerData);
  const { addIntoTree } = useTreeHook();

  const handleAddNew = (folderId, name, isFolder) => {
    let updatedTree = addIntoTree(explorerDateTree, folderId, name, isFolder);
    setExplorerDataTree(updatedTree);
  };
  return (
    <div>
      <Folder explorerData={explorerDateTree} handleAddNew={handleAddNew} />
    </div>
  );
}

export default App;
