import Header from "./Header";
import SuggestiveSearch from "./SuggestiveSearch"
import SearchResult from "./SearchResult"
import * as Constants from '../Constants'
import { useState } from 'react'


const InfoPage = ( props ) => {

    const [searchText, setSearchText] = useState("")
    const [searchDisplay, setSearchDisplay] = useState([<div key="empty-1"></div>])

    let titleText, dinoNamesArr, dinoNicknamesArr

    if (props.infoType === "dino"){
        titleText = Constants.TITLE_DINO
        dinoNamesArr = Constants.DINONAMES_DINO
        dinoNicknamesArr = Constants.DINONICKNAMES_DINO
    }
    else{
        titleText = Constants.TITLE_EGG
        dinoNamesArr = Constants.DINONAMES_EGG
        dinoNicknamesArr = Constants.DINONICKNAMES_EGG
    }

    /**
     * 
     * @param {string} nickname 
     * @returns {string} string
     */
    const getDinoNameFromNickname = (nickname) => {
        nickname = nickname.trim().toLowerCase()
        if(nickname === "triceratops"){
            return "Trike"
        }
        else if(nickname === "seagull"){
            return "Ichthyornis"
        }
        else if(nickname === "thief" || nickname === "pickpocket" || nickname === "robber"){
            return "Pegomastax"
        }
        else if(nickname === "camelsaurus"){
            return "Morellatops"
        }
        else if(nickname === "turtle"){
            return "Carbonemys"
        }
        else if(nickname === "tyrannosaurus" || nickname === "t-rex"){
            return "Rex"
        }
        //Dino page exclusive nicknames
        else if(props.infoType === "dino"){
            if(nickname === "deer" || nickname === "stag" || nickname === "buck" || nickname === "elk" || nickname === "caribou" || nickname === "moose"){
                return "Megaloceros"
            }
        }
        return false
    }

    /**
     * Get the suggested text based on user input
     * @param {string} input 
     * @returns {string} string
     */
    const getSuggestedText = (input) => {
        let inputLowerCase = input.toLowerCase()
        if(input.trim() === ""){
            return ""
        }
        for (let i = 0; i < dinoNamesArr.length; i++) {
            let dinoName = dinoNamesArr[i].toLowerCase()
            if (dinoName.startsWith(inputLowerCase)){
                //no sorting required because the dinoNamesArr is already alphabetically sorted, therefor the most accurate name is always appear first
                let endOfStr = dinoNamesArr[i].substr(inputLowerCase.length);
                return input + endOfStr
            }
        }
        //if dino suggestion not found, search for a nickname
        for (let i = 0; i < dinoNicknamesArr.length; i++) {
            let dinoNickname = dinoNicknamesArr[i].toLowerCase()
            if (dinoNickname.startsWith(inputLowerCase)){
                let endOfStr = dinoNicknamesArr[i].substr(inputLowerCase.length);
                return input + endOfStr
            }
        }
        return ""
    }

    /**
     * Filter the search results found to simplify them, remove any unnecesary words (tek, bionic, etc)
     * @param {Array.<string>} arr The array of dino names to filter
     * @returns {Array.<string>}
     */
    const filterSearchResults = (arr) => {
        return arr.map(element => {
            let elementLowerCase = element.toLowerCase()
            let dinoName
            if(elementLowerCase.startsWith("tek")){
                dinoName = element.substr(4) //"tek ".length is where the 4 comes from
                return element + " (" + dinoName + ")"
            }
            else if(elementLowerCase.startsWith("bionic")){
                dinoName = element.substr(7) //"bionic ".length is where the 4 comes from
                return element + " (" + dinoName + ")"
            }
            else if(elementLowerCase.includes("wyvern")){
                dinoName = "Wyvern"
                return element + " (" + dinoName + ")"
            }
            else if (elementLowerCase.includes("hesperornis")){
                return element + " (Golden)"
            }
            return element
        })
    }

    /**
     * Get the search results based on user input
     * @param {string} input 
     * @returns {Array.<string>} array
     */
    const getSearchResults = (input) => {
        let results = []
        let inputLowerCase = input.toLowerCase()
        if(input.trim() === ""){
            return []
        }
        for (let i = 0; i < dinoNamesArr.length; i++) {
            let dinoName = dinoNamesArr[i].toLowerCase()
            if (dinoName.startsWith(inputLowerCase)){
                //the dinoNamesArr is already alphabetically sorted
                results.push(dinoNamesArr[i])
            }
        }
        if (results.length > 0){
            //if suggestion was found...
            return filterSearchResults(results)
        }
        else{
            //otherwise, look for nickname
            for (let i = 0; i < dinoNicknamesArr.length; i++) {
                let dinoNickname = dinoNicknamesArr[i].toLowerCase()
                if (dinoNickname.startsWith(inputLowerCase)){
                    results.push(getDinoNameFromNickname(dinoNicknamesArr[i]))
                }
            }
        }
        // check for dino variants and remove / add them to the array
        if(results.length > 0){
            return filterSearchResults(results)
        }
        return []
    }

    /**
     * Used to get the original dino name or egg, removing any brackets added for clarification
     * Ex. Fire Wyvern (Wyvern) => Fire Wyvern
     * @param {string} modifiedName 
     * @returns {string} unmodified name of dino or egg
     */
    const getOriginalDinoText = (modifiedName) => {
        const bracketIndex = modifiedName.indexOf(" (")
        if (bracketIndex !== -1) {
            modifiedName = modifiedName.substr(0, bracketIndex).trim()
        }
        const eggIndex = modifiedName.indexOf(" Egg")
        if (eggIndex !== -1) {
            modifiedName = modifiedName.substr(0, eggIndex).trim()
        }
        return modifiedName
    }

    /**
     * Called when the user presses enter
     * @param {*} e 
     */
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const results = getSearchResults(searchText)
        document.getElementById("searchInput").blur() //this line will remove focus from the text input, which lowers/hides the keyboard, removing this line means the keyboard will remain up after hitting enter on mobile devices
        setSearchDisplay(displaySearchResults(results))
    }

    /**
     * 
     * @returns (Array.<JSX>)
     */
    const displaySearchResults = (resultsArr) => {
        if (resultsArr.length === 0 && searchText === ""){
            return ([<div key="empty-1"></div>])
        }
        else if(resultsArr.length === 0){
            return (
                [
                    <div key="no-results-1">
                        <p>No Results Found For Search "{searchText}"</p>
                    </div>
                ]
            )
        }
        else{
            let counter = 0
            let returnArr = resultsArr.map(result => {
                counter++
                let customKey = "result-" + counter
                let originalResultText = getOriginalDinoText(result)
                let dinoData = Constants.DINOINFO[originalResultText]
                let src, alt
                if (props.infoType === "dino") {
                    src = "images/dinos/" + dinoData.image.src
                    alt = dinoData.image.alt
                }
                else{
                    src = "images/eggs/" + dinoData.egg.image.src
                    alt = dinoData.egg.image.alt
                }
                return <SearchResult key={customKey} dinoName={originalResultText} text={result} src={src} alt={alt} setDinoName={props.setDinoName} setRenderComponent={props.setRenderComponent} />
            })
            return returnArr
        }
    }

    return (
        <div className="flex flex-direction-col">
            <Header icons={true} myHistory={props.myHistory} setMyHistory={props.setMyHistory} setRenderComponent={props.setRenderComponent} />
            <div className="info-page flex flex-direction-col" onSubmit={handleFormSubmit}>
                <h3>{titleText}</h3>
                <form className="search-form">
                    <SuggestiveSearch infoType={props.infoType} searchText={searchText} setSearchText={setSearchText} getSuggestedText={getSuggestedText} />
                </form>
                <div id="suggestionBox" className="suggestion-box flex-child">
                    {searchDisplay}
                </div>
            </div>
        </div>
    )
}

export default InfoPage
