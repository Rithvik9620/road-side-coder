import "./App.css";
import { useState } from "react";
import explorerData from "./file-system/data/explorerData";
import Folder from "./file-system/components/Folder";
import useTreeHook from "./file-system/hooks/use-tree-hook";

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
