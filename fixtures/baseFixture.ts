import { test as base } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';

type Fixture = {
    calculatorPage: CalculatorPage;
};

export const test = base.extend<Fixture>({
    calculatorPage: async ({ page }, use) => {
        const calculatorPage = new CalculatorPage(page);
        await use(calculatorPage);
    }
});
