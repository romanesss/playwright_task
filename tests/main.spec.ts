import { test } from '../fixtures/baseFixture';
import { expect } from '@playwright/test';

const testData: { title: string; operation: 'Sum' | 'Divide' | 'Multiply' | 'Subtract'; numbers: [number, number]; result: string }[] = [
    { title: 'Verify the calculator can accurately sum two numbers', operation: 'Sum', numbers: [2, 2], result: '4' },
    { title: 'Ensure the calculator can accurately subtract one number from another', operation: 'Subtract', numbers: [2, 2], result: '0' },
    { title: 'Multiply Test', operation: 'Multiply', numbers: [2, 2], result: '4' },
    { title: 'Divide Test', operation: 'Divide', numbers: [2, 2], result: '1' },
    { title: 'Division by Zero Test', operation: 'Divide', numbers: [2, 0], result: 'Not a Number' }
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

for (const { title, operation, numbers, result } of testData) {
    test(`${title}`, async ({ calculatorPage }) => {
        await calculatorPage.logicOperation({ numbers: numbers, operation: operation });
        expect(await calculatorPage.getAnswerValue()).toContain(result);
    });
}
