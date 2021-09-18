

const HomeOption = ( props ) => {
    return (
        <div className="home-option" onClick={props.onClick}>
            <p>{props.text}</p>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default HomeOption
