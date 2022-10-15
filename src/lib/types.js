/**@typedef {svelteHTML.MouseEventHandler<EventTarget>} MouseEventHandler */

/**@typedef {(event : MouseEventHandler) => void}  Handler*/

/**
 * @typedef CardContent
 * @prop {string} name
 * @prop {string} soundFile
 * @prop {string} color
 * @prop {number} id
 * @prop {string} icon
 * @prop {number=} clicks
 * @prop {(import("./models/categories.js").CardCategory)[]=} category
 * @prop {HTMLAudioElement=} audioElement
 * */

/**
 * @typedef BigCard @prop {string} name
 * @prop {string} content
 * @prop {string} color
 * @prop {string} image}*/

/**
 * @typedef CustomCategory
 * @prop  {number } customId
 * @prop {number []} cardsIds
 * @prop {string} name
 *
 */
