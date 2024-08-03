// 8-clean_set.js

/**
 * Returns a string of all set values that start with a specific string, excluding the start string.
 * @param {Set} set - The set of values to filter.
 * @param {String} startString - The string to check for at the start of each value.
 * @returns {String} A string of filtered values separated by '-'.
 */
 export default function cleanSet(set, startString) {
   let text = '';
   const array = [];

   if (startString && typeof startString === 'string') {
     for (const element of set) {
       if (element && element.startsWith(startString)) {
         array.push(element.slice(startString.length));
       }
     }
     text = array.join('-');
   }
   return text;
 }
