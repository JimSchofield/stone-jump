/**
 * Takes an array and performs map.  Joins at the end because string linterals.
 */
const mapDOM = (arr: any[], f: (el: any) => any): string => {
    return arr.map(f).join("");
}

export default {
    mapDOM,
};
