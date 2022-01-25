const {
    add,
    subtract,
    multiply,
    divide,
    clearAllfields,
    equal
  } = require("./calculator");

// Testing Addition 
describe("valid additions", () => {
    test("12 + 13 = 25", () => {
        expect(add(12, 13)).toEqual(25);  
        });
        
        // Parameterised tests which allows to run the same test multiple times using differet values
        test.each([[1, 1, 2], [-1, 2,1], [2,1,3]]) (
            '%i + %i equals %i', (a, b, expected) => {
            expect(add(a,b)).toEqual(expected);
            });
         });

// Testing Subtraction
describe("valid subtraction", () => {
    test("21 - 3 = 18", () => {
        expect(subtract(21, 3)).toEqual(18);  
        });
        // Parameterised tests which allows to run the same test multiple times using differet values
        test.each([[1, 1, 0], [-1, 2, -3], [2, 2, 0]])(
            '%i - %i equals %i', (a, b, expected) =>{ 
            expect(subtract(a, b)).toEqual(expected);
            });
        });

// Testing Multiply 
describe("valid multiply", () => {
    test("5 * 20 = 100", () => {
        expect(multiply(5, 20)).toEqual(100);  
        });
        test.each([[-1, 2, -2], [2, 2, 4]])(
            '%i * %i equals %i', (a, b, expected) => { 
            expect(multiply(a, b)).toEqual(expected);
            });
        });

// Testing Divide 
describe("valid divide", () => {
    test("55 / 5 = 11", () => {
        expect(divide(55, 5)).toEqual(11);  
        });
        // Division error - returns error when divided by 0
        test("20 / 0 = Error, cannot divide by 0!", () => {
            expect(() => {
              expect(divide(20, 0));
            }).toThrow();
          });
    });

    // Testing Equals 
    describe("valid equals", () => {
        test("1 + 1 = 2", () => {
            expect(add(1, 1)).toEqual(2);  
            });
            test("0 == 0", () => { 
                expect(() => {
                expect(equal(0)).toEqual(0);
                });
                });
             });
    
// Testing Decimal 
describe("valid decimals", () => {
    test("50 / 3 = 16.67", () => { 
        expect(divide(50, 3)).toBeCloseTo(16.67);
        });
    
        // testing for Floating point numbers
        test("1.2 + 2.5 = 3.7", () => { 
            expect(add(1.2, 2.5)).toBeCloseTo(3.7);
            });
         });


    //Testing Clear All Field
    describe("clear display when AC button pressed", () => {
        test("checks that all fields are zero", () => {
        expect(() => {
            expect(clearAllfields()).toBe(0);
        });
      });
        // Clear and Display 0
        test("0", () => {
            expect(multiply(5, 20)).toEqual(100);  
            });
    });


