import HomePage from "./components/HomePage"
import SearchPage from "./components/SearchPage"
import InfoPage from "./components/InfoPage"
import { useState } from "react"
import KibblePage from "./components/KibblePage"

function App() {

  //STATES USED THROUGHOUT APP
  const [myHistory, setMyHistory] = useState(["Home"])
  /**  
    * myHistory is an array that stores all the components the user renders, with the last component 
    * in the array being the current component. It must be passed as a prop to every component that 
    * gets rendered
  */
  const [infoType, setInfoType] = useState("")
  /**  
    * infoType is only used to determine what to render for the SearchPage and InfoPage components, 
    * and should be set to either "egg" or "dino" before rendering these components
  */
  const [renderComponent, setRenderComponent] = useState("Home")

  //STATES USED IN InfoPage
  const [dinoName, setDinoName] = useState("")

  if(renderComponent !== myHistory[myHistory.length - 1]){
    let tempArr = myHistory;
    tempArr.push(renderComponent)
    setMyHistory(tempArr)
  }

  switch (renderComponent){
    case "Home":
      return <HomePage myHistory={myHistory} setMyHistory={setMyHistory} setInfoType={setInfoType} setRenderComponent={setRenderComponent} />
      /*PROPS = {myHistory, setMyHistory, setInfoType, setRenderComponent} */
    case "SearchPage":
      return <SearchPage setDinoName={setDinoName} infoType={infoType} myHistory={myHistory} setMyHistory={setMyHistory} setRenderComponent={setRenderComponent} />
      /*PROPS = {setDinoName, infoType = "dino" | "egg", myHistory, setMyHistory, setRenderComponent} */
    case "InfoPage":
      return <InfoPage dinoName={dinoName} infoType={infoType} myHistory={myHistory} setMyHistory={setMyHistory} setRenderComponent={setRenderComponent} /> 
      /*PROPS = {dinoName="NameOfDino", infoType = "dino" | "egg", myHistory, setMyHistory, setRenderComponent} */
    //KibblePage
    case "KibblePage":
      return <KibblePage myHistory={myHistory} setMyHistory={setMyHistory} setRenderComponent={setRenderComponent} />
    //EggSizePage
    default: 
      return <HomePage myHistory={myHistory} setMyHistory={setMyHistory} setInfoType={setInfoType} setRenderComponent={setRenderComponent} />
      /*PROPS = {myHistory, setMyHistory, setInfoType, setRenderComponent} */
  }
}

//TODO: add the nicknames not yet added

//TODO: Get the missing images, the names of the dinos missing are on piece of paper in room, could be egg or dino

export default App;
