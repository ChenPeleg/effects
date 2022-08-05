import * as Interfaces from './interfaces'



/**@typedef  {Interfaces.AnotherType} AnotherType */

/**@typedef CardContent
 * Returns a reaference
 * @prop {string} name @prop {string} content @prop {string} color 
 * @description 'asdfasfd'
 * @description The all the content of the card that the user can press
 * */

/**@typedef BigCard @prop {string} name 
 * @prop {string} content 
 * @prop {string} color
 * @prop {string} image}*/





/**@typedef {CardContent & BigCard} TYPES  */
/**@typedef {string | number} SIMPLE_TYPE  */

export const Types = {

    ...Interfaces

};