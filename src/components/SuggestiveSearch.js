import { useState } from 'react'

const SuggestiveSearch = ( props ) => {

    const [suggestiveText, setSuggestiveText] = useState("")

    const onTextChange = (e) => {
        let suggestedText = props.getSuggestedText(e.currentTarget.value)
        props.setSearchText(e.currentTarget.value)
        //if the input text is overflowing...
        if(document.getElementById("searchInput").scrollWidth > document.getElementById("searchInput").clientWidth){
            //hide the suggestive text because it is no longer useful and doesnt display correctly
            setSuggestiveText("")
        }
        //otherwise...
        else{
            setSuggestiveText(suggestedText)
        }
    }

    return (
        <div className="search-container">
            <input type="text" id="searchInput" className="search-input" autoCapitalize="off" autoComplete="off" autoCorrect="off" value={props.searchText} onChange={onTextChange} />
            {/* <input type="text" id="suggestiveText" className="suggestive-text" readOnly={true} autoCapitalize="off" autoComplete="off" autoCorrect="off" value={suggestiveText} /> */}
            <span id="suggestiveText" className="suggestive-text">{suggestiveText}</span>
            {/* NOTE: This must be a span, otherwise when you hit enter, nothing happens */}
        </div>
    )
}

export default SuggestiveSearch
