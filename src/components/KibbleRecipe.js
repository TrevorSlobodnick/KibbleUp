import { FOCAL_CHILI, KIBBLE, LAZARUS_CHOWDER } from "../Constants"


const KibbleRecipe = ( props ) => {

    const getIngredients = () => {
        let kibbleRecipe = KIBBLE[props.kibbleType]
        let ingredients = []
        let counter = 1
        kibbleRecipe.forEach(element => {
            let ingredient
            if (element === "1x Lazarus Chowder") {
                let lcIngredients = LAZARUS_CHOWDER.map(item => {
                    return <li key={LAZARUS_CHOWDER.indexOf(item) + 1}>{item}</li>
                })
                ingredient = <li key={counter}>{element}<ul className="sub-ingredients">{lcIngredients}</ul></li>
            }
            else if(element === "1x Focal Chili"){
                let fcIngredients = FOCAL_CHILI.map(item => {
                    return <li key={FOCAL_CHILI.indexOf(item) + 1}>{item}</li>
                })
                ingredient = <li key={counter}>{element}<ul className="sub-ingredients">{fcIngredients}</ul></li>
            }
            else if(kibbleRecipe.indexOf(element) === (kibbleRecipe.length - 1) && props.infoType === "egg"){
                //special entry for last index, AKA the egg, when viewing from the dino info page
                //ex. 1x Small Egg => 1x {Insert Dino Name} Egg
                ingredient = <li key={counter}>1x {props.dinoName} Egg</li>
            }
            else{
                ingredient = <li key={counter}>{element}</li>
            }
            ingredients.push(ingredient)
            counter++
        });
        return ingredients
    }

    return (
        <div className="kibble-recipe">
            <p className="recipe">RECIPE</p>
            <ul className="ingredients">{getIngredients()}</ul>
        </div>
    )
}

export default KibbleRecipe
