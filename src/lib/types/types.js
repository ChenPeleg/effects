import * as Interfaces from './interfaces'

/**@typedef  {Interfaces.AnotherType} Another1 */
/**@typedef CardContent @prop {string} name @prop {string} content @prop {string} color*/
/**@typedef BigCard @prop {string} name 
 * @prop {string} content 
 * @prop {string} color
 * @prop {string} image}*/





/**@typedef {CardContent & BigCard} TYPES  */
/**@typedef {string | number} SIMPLE_TYPE  */

export const Types = {

    ...Interfaces

};