Test Suite: Calculator Sanity Tests
https://www.theonlinecalculator.com/

Prerequisites:
Access to a web-based calculator application.
All tests begin at the application's homepage.

Setup Steps:
1. Navigate to the homepage ('/').
2. Clear all previous entries and reset the calculator to a default state.

-----------------------------------------------------------------------

Test Case 1: Clear Entry Data Test
Objective: Verify that clearing the last entry does not affect the new computation.

Steps:
1. Input '2 + 2' and perform calculation.
2. Start a new addition with '1', but do not calculate yet.
3. Clear the last entry.
4. Input '2' and perform the calculation.

Expected Result:
- The calculator displays '6'.

-----------------------------------------------------------------------

Test Case 2: Clear All Data Test
Objective: Ensure that using the full reset clears all previous calculations completely.

Steps:
1. Input '2 + 2' and perform calculation.
2. Add '1' to the previous result, but do not calculate yet.
3. Use full reset to clear all data.
4. Input '2' and perform calculation.

Expected Result:
- The calculator does NOT display '6'.
- The calculator displays '2'.

-----------------------------------------------------------------------

Test Case 3: Sum Test
Objective: Verify the calculator can accurately sum two numbers.

Steps:
1. Input '2 + 2' and perform calculation.

Expected Result:
- The calculator displays '4'.

-----------------------------------------------------------------------

Test Case 4: Subtract Test
Objective: Ensure the calculator can accurately subtract one number from another.

Steps:
1. Input '2 - 2' and perform calculation.

Expected Result:
- The calculator displays '0'.

-----------------------------------------------------------------------

Test Case 5: Multiply Test
Objective: Verify that the multiplication function works as expected.

Steps:
1. Input '2 * 2' and perform calculations.

Expected Result:
- The calculator displays '4'.

-----------------------------------------------------------------------

Test Case 6: Divide Test
Objective: Check the division function for a non-zero divisor.

Steps:
1. Input '2 / 2' and perform calculation.

Expected Result:
- The calculator displays '1'.

-----------------------------------------------------------------------

Test Case 7: Division by Zero Test
Objective: Ensure that dividing by zero is handled correctly and shows an error or a specific message.

Steps:
1. Input '2 / 0' and perform calculation.

Expected Result:
- The calculator displays 'Not a Number' or an appropriate error message.

-----------------------------------------------------------------------
