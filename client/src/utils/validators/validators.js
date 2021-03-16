export const required = value => {
    if(value) return undefined;

    return "Field is required"
}

export const maxLength = (maxlength) => (value = 0) => {
    if( value.length > maxlength ) return `Max length is ${maxlength} symbols`;
    return undefined;
}

export const minValue = (min) => (value = 0) => {
    if( value.length <= min ) return `Should be greater than ${min} characters`;
    return undefined;
}