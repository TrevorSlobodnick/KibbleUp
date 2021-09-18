import Header from "./Header"
import HomeOption from "./HomeOption"

const HomePage = ( props ) => {

    /** Called when the Dino option is clicked */
    const onDinoClick = () => {
      props.setRenderComponent("SearchPage")
      props.setInfoType("dino")
    }

    /** Called when the Egg option is clicked */
    const onEggClick = () => {
      props.setRenderComponent("SearchPage")
      props.setInfoType("egg")
    }

    /** Called when the Kibble option is clicked */
    const onKibbleClick = () => {
      //set renderComponent = "KibblePage" -- when its made
      props.setRenderComponent("KibblePage")
    }

    return (
      <div className="flex flex-direction-col">
        <Header icons={false} myHistory={props.myHistory} setMyHistory={props.setMyHistory} setRenderComponent={props.setRenderComponent} />
        <div className="home-height flex-child flex flex-direction-col">
            <div className="flex-child flex vert-center horz-center">
              <HomeOption text="Find kibble for dino..." src="images/home/dino.png" alt="Dino" onClick={onDinoClick} />
            </div>
            <div className="flex-child flex vert-center horz-center">
              <HomeOption text="Find kibble containing egg..." src="images/home/egg.png" alt="Egg" onClick={onEggClick} />
            </div>
            <div className="flex-child flex vert-center horz-center">
              <HomeOption text="view all kibble recipes..." src="images/home/kibble.png" alt="Kibble" onClick={onKibbleClick} />
            </div>
        </div>
      </div>
    )
}

export default HomePage
