const Header = ( props ) => {

    const onBackClicked = () => {
        let prevComponent = props.myHistory[props.myHistory.length - 2]
        if(props.myHistory.length > 1){
            //Remove the last 2 elements from history, otherwise you will be stuck in a loop
            let tempArr = props.myHistory
            tempArr.pop() //the current page is removed from array
            tempArr.pop() //the previous page, (about to be current page), is also removed from array
            props.setMyHistory(tempArr)
        }
        props.setRenderComponent(prevComponent)
    }

    const onHomeClicked = () => {
        props.setRenderComponent("Home")
    }

    if(props.icons === false){
        return (
            <header className="header-height flex vert-center horz-center">
                <h1>KibbleUp!</h1>
            </header>
        )
    }
    else{
        return (
            <header className="header-height condensed-header flex space-between">
                <div className="img-wrapper flex vert-center" onClick={onBackClicked}>
                    <img src="images/header/arrow.png" alt="back" />
                </div>
                <h1 className="flex vert-center">KibbleUp!</h1>
                <div className="img-wrapper flex vert-center" onClick={onHomeClicked}>
                    <img src="images/header/home.png" alt="home" />
                </div>
            </header>
        )
    }

}

export default Header
