import React from 'react';
import style from './Textarea.module.css';

const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {input.type === "textarea" 
                ? <textarea {...input}{...props} /> 
                : <input {...input}{...props} /> }
            </div>
            { hasError && <span className={style.errorSpan}>{meta.error}</span>}
        </div>
    )
}

export default Textarea;