/** The main store of the app use @to inlist all the data you need
 * @typedef MainStore
 * @property  {string} user
 * @prop {number} currentCard
 * @prop { CardContent | null } currentCardContent
 */

/**@see other to notify */
const G = {};

/**@description  Example interface to use in cscode*/

/** with typescript you cant **see** the comments near the properties themselfs but you can writ comments in the file and: line breaks
 *  <br> but only one, peaces of code like this `thisIsMyCode()`
 * <br> and also imojies 🍎 section breaks
 * 
 * ***  
 * #### header  with Aditional info 
 *  `justAstring` - Just an empty or full string\
 * `currentCardContent` - The contentt of the card or null
*- Third item
 * you blockouts
 * >fasdfadf
 
 * 
 
 * @typedef  Example for writing explenation in js docs
 * @prop  {string} justAstring    
 * @prop { CardContent } currentCardContent
 *   
*/

/**@typedef {(action: ActionModel) => void} ReactDispatcher */

/**@typedef {Record<string,any>} StoreModel */

/**@typedef {{type : any, payload? : any}} ActionModel */

/**@typedef {(state: StoreModel, action : ActionModel) => StoreModel} Reducer */
