import { createArray } from "../src/functions.js";

describe('Array', function() {
   describe('createArray', function() {
     it('should return [0,0,0]', function() {
       expect(createArray(3)).toEqual([0,0,0]);
     });
   });
  });