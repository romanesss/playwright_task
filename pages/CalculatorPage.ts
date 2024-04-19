import { Locator, Page } from '@playwright/test';

export class CalculatorPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private readonly clearBtn = '[name="clearButton"]';
    private readonly plusBtn = '[name="add"]';
    private readonly subtractBtn = '[name="subtract"]';
    private readonly multiplyBtn = '[name="multiply"]';
    private readonly divideBtn = '[name="divide"]';
    private readonly answerWindow = '#display';
    private readonly calculateBtn = '[name="calculate"]';
    private readonly numberButton = (number: Number) => `[onclick="enterValue('${number}')"]`;

    async navigateToParCalculatorPage() {
        await this.page.goto('https://www.theonlinecalculator.com', {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });
    }

    async clearLastAction() {
        await this.page.locator(this.clearBtn).click();
    }

    async resetCalculator() {
        await this.page.locator(this.clearBtn).dblclick();
    }

    async clickOnNumber(number: Number) {
        await this.page.locator(this.numberButton(number)).click();
    }

    async clickOnPlusButton() {
        await this.page.locator(this.plusBtn).click();
    }

    async clickOnSubtractButton() {
        await this.page.locator(this.subtractBtn).click();
    }

    async clickOnMultiplyButton() {
        await this.page.locator(this.multiplyBtn).click();
    }

    async clickOndDivideButton() {
        await this.page.locator(this.divideBtn).click();
    }

    async clickOnCalculateButton() {
        await this.page.locator(this.calculateBtn).click();
    }

    async getAnswerValue() {
        return await this.page.locator(this.answerWindow).inputValue();
    }

    async logicOperation(options: logicOperationOprions) {
        const { numbers, operation, displayAnswer = true } = options;
        await this.clickOnNumber(numbers[0]);

        if (operation === 'Sum') {
            await this.clickOnPlusButton();
        } else if (operation === 'Divide') {
            await this.clickOndDivideButton();
        } else if (operation === 'Multiply') {
            await this.clickOnMultiplyButton();
        } else if (operation === 'Subtract') {
            await this.clickOnSubtractButton();
        }
        await this.clickOnNumber(numbers[1]);

        if (displayAnswer) {
            await this.clickOnCalculateButton();
        }
    }
}

export interface logicOperationOprions {
    numbers: [number, number];
    operation: 'Sum' | 'Divide' | 'Multiply' | 'Subtract';
    displayAnswer?: boolean;
}
