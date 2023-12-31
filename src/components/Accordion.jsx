import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function Accordion(props){

    const [expand, setExpand] = useState(false);

    const updateIcon = () => {
        !expand ? setExpand(true) : setExpand(false);
    }

    return (
        <section className="accordion-container">
            <div className="color-bar"></div>
            <div className="content">
                <header>
                    <h3>     {props.title} </h3>
           
                    <button className="expand-button" onClick={updateIcon}>
                        <FontAwesomeIcon icon={ !expand ? faPlus : faMinus} />
                    </button>
                </header>
                <section className={`accordion${!expand ? "" : " expanded"}`}>
                   <p>{props.accordionContent}</p>
                </section>
            </div>
               
        </section>
    );
}

export default Accordion;
