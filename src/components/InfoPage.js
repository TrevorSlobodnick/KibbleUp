import Header from "./Header"
import KibbleRecipe from "./KibbleRecipe";
import { DINOINFO } from '../Constants';

const InfoPage = ( props ) => {

    let kibbleType, text1, text2, tameMethodSpan, kibbleTypeClasses
    const dinoInfo = DINOINFO[props.dinoName]

    if(props.infoType === "dino"){
        if (dinoInfo.tamingmethod === "Forceful"){
            tameMethodSpan = <span>Forcefully</span>
        }
        else{
            tameMethodSpan = <span>Passively</span>
        }
        text1 = "The following kibble is used to "
        text2 = " tame the " + props.dinoName + ":"
        kibbleType = dinoInfo.kibble
    }
    else{
        text1 = "The " + props.dinoName + " Egg can be used to make the following kibble:"
        text2 = ""
        kibbleType = dinoInfo.egg.kibble
    }

    //This must be done after setting kibbleType
    kibbleTypeClasses = "kibble-type " + kibbleType.toLowerCase() +  "-kibble"

    return (
        <div className="flex flex-direction-col">
            <Header icons={true} myHistory={props.myHistory} setMyHistory={props.setMyHistory} setRenderComponent={props.setRenderComponent} />
            <div className="flex flex-direction-col">
                <div>
                    <p className="kibble-info">{text1}<span className="tame-method">{tameMethodSpan}</span>{text2}</p>
                    <h5 className={kibbleTypeClasses}>{kibbleType} Kibble</h5>
                    <KibbleRecipe dinoName={props.dinoName} kibbleType={kibbleType} />
                </div>
            </div>
        </div>
    )
}

export default InfoPage
