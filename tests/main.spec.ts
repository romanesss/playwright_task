import { test } from '../fixtures/baseFixture';
import { expect } from '@playwright/test';
const divideTestData: { title: string; numbersArray: [number, number]; result: string }[] = [
    { title: 'Divide Test', numbersArray: [2, 2], result: '1' },
    { title: 'Division by Zero Test', numbersArray: [2, 0], result: 'Not a Number' }
];

test.beforeEach(async ({ calculatorPage }) => {
    await calculatorPage.navigateToParCalculatorPage();
    await calculatorPage.resetCalculator();
});

test('Verify that clearing the last entry does not affect the new computation', async ({ calculatorPage }) => {
    await calculatorPage.logicOperation({ numbers: [2, 2], operation: 'Sum' });
    await calculatorPage.clickOnPlusButton();
    await calculatorPage.clickOnNumber(1);
    await calculatorPage.clearLastAction();
    await calculatorPage.clickOnNumber(2);
    await calculatorPage.clickOnCalculateButton();
    expect(await calculatorPage.getAnswerValue()).toContain('6');
});

test('Ensure that using the full reset clears all previous calculations completely', async ({ calculatorPage }) => {
    await calculatorPage.logicOperation({ numbers: [2, 2], operation: 'Sum' });
    await calculatorPage.clickOnPlusButton();
    await calculatorPage.clickOnNumber(1);
    await calculatorPage.resetCalculator();
    await calculatorPage.clickOnNumber(2);
    await calculatorPage.clickOnCalculateButton();
    expect(await calculatorPage.getAnswerValue()).toContain('2');
    expect(await calculatorPage.getAnswerValue()).not.toContain('6');
});

test('Verify the calculator can accurately sum two numbers', async ({ calculatorPage }) => {
    await calculatorPage.logicOperation({ numbers: [2, 2], operation: 'Sum' });
    expect(await calculatorPage.getAnswerValue()).toContain('4');
});

test('Ensure the calculator can accurately subtract one number from another', async ({ calculatorPage }) => {
    await calculatorPage.logicOperation({ numbers: [2, 2], operation: 'Subtract' });
    expect(await calculatorPage.getAnswerValue()).toContain('0');
});

test('Multiply Test', async ({ calculatorPage }) => {
    await calculatorPage.logicOperation({ numbers: [2, 2], operation: 'Multiply' });
    expect(await calculatorPage.getAnswerValue()).toContain('4');
});

for (const { numbersArray, title, result } of divideTestData) {
    test(`${title}`, async ({ calculatorPage }) => {
        await calculatorPage.logicOperation({ numbers: numbersArray, operation: 'Divide' });
        expect(await calculatorPage.getAnswerValue()).toContain(result);
    });
}
