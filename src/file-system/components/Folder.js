import React, { useState } from "react";

const Folder = ({ explorerData, handleAddNew }) => {
  const [showChild, setShowChild] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: true,
  });

  const handleAddClick = (e, isFolder) => {
    e.stopPropagation();
    setShowChild(true);

    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const handleEnter = (e, id, isFolder, name) => {
    if (e.keyCode === 13 && e.target.value) {
      handleAddNew(id, name, isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  return (
    <div>
      <div onClick={() => setShowChild(!showChild)} style={{ display: "flex" }}>
        {explorerData.isFolder ? "📁" : "📄"}
        {explorerData.name}
        {explorerData.isFolder ? (
          <div style={{ display: "flex", marginLeft: "20px" }}>
            <button onClick={(e) => handleAddClick(e, true)}>Add Folder</button>
            <button
              style={{ marginLeft: "5px" }}
              onClick={(e) => handleAddClick(e, false)}
            >
              Add File
            </button>
          </div>
        ) : null}
      </div>
      {showChild && (
        <div className="pl">
          {showInput.visible ? (
            <div>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                autoFocus
                type="text"
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                onKeyDown={(e) =>
                  handleEnter(
                    e,
                    explorerData.id,
                    showInput.isFolder,
                    e.target.value
                  )
                }
              />
            </div>
          ) : null}
          {explorerData.items.map((exp) => (
            <Folder explorerData={exp} handleAddNew={handleAddNew} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
