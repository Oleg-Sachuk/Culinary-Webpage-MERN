import React from 'react';
import style from './NewRecipt.module.css';
import Section from './Partials/Section';

const NewRecipt = (props) => {
    debugger;
    console.log("Data from props",props.data);
    return (
        <div className={style.titleblock}>
            <h1 className={style.font}><b> Never tame your creativity!</b> </h1>
            <div>
                <Section />
            </div>
        </div>
    )
}

export default NewRecipt;