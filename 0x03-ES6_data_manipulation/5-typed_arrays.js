// 5-typed_arrays.js

/**
 * Creates an ArrayBuffer with an Int8 value at a specific position.
 * @param {Number} length - The length of the ArrayBuffer.
 * @param {Number} position - The position in the ArrayBuffer to set the Int8 value.
 * @param {Number} value - The Int8 value to set at the specified position.
 * @returns {DataView} A DataView of the ArrayBuffer with the Int8 value set.
 * @throws {Error} Throws an error if the position is outside the range of the ArrayBuffer.
 */
 export default function createInt8TypedArray(length, position, value) {
   const buffer = new ArrayBuffer(length);
   const dataView = new DataView(buffer);
   if (position >= length || position < 0) {
     throw new Error('Position outside range');
   } else {
     dataView.setInt8(position, value);
     return dataView;
   }
 }
