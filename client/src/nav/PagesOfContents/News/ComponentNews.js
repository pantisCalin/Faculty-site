
import Aos from "aos";

const ComponentNews = ( {onDelete, id, description, title} ) => {

        Aos.init({duration: 1000})
    let showDescription = description.split('\n').map((item, keys) => <p key = {keys}>{item}</p>)
    let showTitle = title.split('\n').map((item, keys) => <div className = 'titleMarginNews' key = {keys}>{item}</div>)

    return (
            <div className = 'component'  data-aos = "fade-up">
                <div className = 'titleWithButtons'>
                    <h1 className = 'componentTitle'>{showTitle}</h1>
                        <button 
                            className = 'btnRemove'
                            onClick = {() => onDelete(id)}
                        >REMOVE</button>
                </div>
                <div className = 'componentText'>
                    {showDescription}
                    </div>
            </div>
    )
}


export default ComponentNews


