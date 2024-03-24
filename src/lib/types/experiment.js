// my-new-type.js
/*
 * MyNewType definition
 * @typedef {MyNewType} MyNewType1
 * @param {number} first
 * @param {number} second
 * @property {function} logFirst
 * @property {function} logSecond
 * @returns MyNewType
 */

/** @typedef {(first: number, second: number) => {logFirst :(time : number)=> void,  logSecond :(time : number)=> void } } MyNewType*/

/**@type {MyNewType} */
var MyNewType = module.exports = (first, second) => {

    function logFirst(times) {
        for (let i = 0; i < times; i++) {

        }
    }
    function logSecond(times) {
        for (let i = 0; i < times; i++) {

        }
    }

    return {
        logFirst,
        logSecond
    };
};
