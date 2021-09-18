import Header from "./Header"
import KibbleRecipe from "./KibbleRecipe"

const KibblePage = ( props ) => {
    return (
        <div className="flex flex-direction-col">
            <Header icons={true} myHistory={props.myHistory} setMyHistory={props.setMyHistory} setRenderComponent={props.setRenderComponent} />
            <div className="flex flex-direction-col kibble-recipe-wrapper">
                <div>
                    <h5 className="kibble-type basic-kibble kibble-page-title">Basic Kibble</h5>
                    <KibbleRecipe kibbleType="Basic" />
                </div>
                <div>
                    <h5 className="kibble-type simple-kibble kibble-page-title">Simple Kibble</h5>
                    <KibbleRecipe kibbleType="Simple" />
                </div>
                <div>
                    <h5 className="kibble-type regular-kibble kibble-page-title">Regular Kibble</h5>
                    <KibbleRecipe kibbleType="Regular" />
                </div>
                <div>
                    <h5 className="kibble-type superior-kibble kibble-page-title">Superior Kibble</h5>
                    <KibbleRecipe kibbleType="Superior" />
                </div>
                <div>
                    <h5 className="kibble-type exceptional-kibble kibble-page-title">Exceptional Kibble</h5>
                    <KibbleRecipe kibbleType="Exceptional" />
                </div>
                <div>
                    <h5 className="kibble-type extraordinary-kibble kibble-page-title">Extraordinary Kibble</h5>
                    <KibbleRecipe kibbleType="Extraordinary" />
                </div>
            </div>
        </div>
    )
}

export default KibblePage
