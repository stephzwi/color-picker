import { useState } from "react";

const Color= ({color, setSelectedColor, selectedColor}) => {
  return (
    <>
        <div className={color} onClick={() => setSelectedColor(color)}>
        </div>
  
         
        
      
  
       
       
   </>
  );
  };

  const App = () => {
    const [selectedColor, setSelectedColor]=useState("")
    return(
      <>
    <div id="navbar">
      <div>Currently selected: </div>
      <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">

  <Color color="orange" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
  <Color color="blue" selectedColor={selectedColor}  setSelectedColor={setSelectedColor}/>
  <Color color="black" selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
</div>
      </>
      )
  
  
  };
export default App;
