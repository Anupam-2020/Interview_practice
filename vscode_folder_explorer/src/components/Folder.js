import { useState } from "react";

const Folder = ({ explorer, setExplorer }) => {
  const [clicked, setClicked] = useState(false);
  const [inputBox, setInputBox] = useState(false);
  const [storageType, setStorageType] = useState();
  const [folderId, setFolderId] = useState('');
  const [fileORFolderName, setFileORFolderName] = useState();

  const displayInput = (bool, storageId) => {
    setInputBox(true);
    setStorageType(bool);
    setFolderId(storageId)
    console.log(folderId)
  };

  const setInHirarchy = (e) => {
    setFileORFolderName(e.target.value);
    console.log(fileORFolderName)
  }

  if (explorer.isFolder) {
    return (
      <div>
        <div className="folder__div">
          <span className="folder__name" onClick={() => setClicked(!clicked)}>
            📂 {explorer.name}
          </span>
          <button
            className="folder__button-style"
            onClick={() => displayInput(true, explorer.id)}
          >
            + 📂
          </button>
          <button onClick={() => displayInput(false, explorer.id)}>+ 🔖</button>
          <div
            style={{
              marginLeft: "2rem",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            {inputBox ? (
              <>
                {storageType ?
                  (
                    <span style={{ marginRight: '1rem' }}>📂</span> 
                  ) : ( 
                    <span style={{ marginRight: '1rem' }}>🔖</span> 
                  ) 
                }
                <input onBlur={() => {
                  setInputBox(false)
                  }} onChange={setInHirarchy}/>
              </>
            ) : null}
          </div>
        </div>

        {clicked ? (
          <div style={{ marginLeft: "30px" }}>
            {explorer.items.map((item) => {
              return (
                <div key={item.id}>
                  <Folder explorer={item} />
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  } else {
    return (
      <span style={{ display: "block", marginBottom: '0.5rem' }}>
        🔖 {explorer.name}
      </span>
    );
  }
};

export default Folder;
