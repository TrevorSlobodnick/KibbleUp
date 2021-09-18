
// DEFINING SplitText OBJECT
/**
 * An object containing the search text split into 2 parts
 * @typedef {Object} SplitText
 * @property {string} text - the text before the parenthesis
 * @property {string} parenthesis - the parenthesis and the text inside
 */

const SearchResult = ( props ) => {

    const onSearchResultClicked = () => {
        //set dinoName
        props.setDinoName(props.dinoName)
        //set renderComponent
        props.setRenderComponent("InfoPage")
    }

    /**
     * 
     * @param {string} text 
     * @returns {SplitText} SplitText
     */
     const getSplitText = (text) => {
        const circleBracketIndex = text.indexOf("(")
        if (circleBracketIndex === -1){
            //not found
            return {
                "text" : text,
                "parenthesis" : ""
            }
        }
        const textWithoutParenthesis = text.substring(0, circleBracketIndex)
        const parenthesis = text.substring(circleBracketIndex + 1, text.length - 1)
        return {
            "text" : textWithoutParenthesis,
            "parenthesis": parenthesis
        }
    }

    let splitText = getSplitText(props.text)

    return (
        <div className="search-result" onClick={onSearchResultClicked}>
            <div className="search-result-img-container">
                <img src={props.src} alt={props.alt} />
            </div>
            <div className="search-result-text-container">
                <p>{splitText.text}
                    {(splitText.parenthesis !== "") && "("}
                    <span style={{fontWeight: "bold"}}>{splitText.parenthesis}</span>
                    {(splitText.parenthesis !== "") && ")"}
                </p>
            </div>
            <div className="forward-arrow-container">
                <img className="forward-arrow" src="images/header/arrow.png" alt="next" />
            </div>
        </div>
    )
}

export default SearchResult
