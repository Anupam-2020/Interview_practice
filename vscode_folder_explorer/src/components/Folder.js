import { useState } from "react";

const Folder = ({ explorer }) => {
  const [clicked, setClicked] = useState(false);
  if (explorer.isFolder) {
    return (
      <div>
        <div onClick={() => setClicked(!clicked)}>📂 {explorer.name}</div>
        
        {clicked ? (<div style={{marginLeft: '10px'}}>
        {explorer.items.map((item) => {
          return <Folder explorer={item}/>
        })}
        </div>) : null}
      </div>
    );
  } else {
    return <span style={{display: 'block'}}>🔖 {explorer.name}</span>;
  }
};

export default Folder;