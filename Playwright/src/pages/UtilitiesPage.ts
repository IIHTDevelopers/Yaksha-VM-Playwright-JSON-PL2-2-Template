export default class UtilitiesPage {

  readonly page: Page;
  public utilities: {
    utilitiesModule: Locator;
    ChangeBillingCounter: Locator;
    counters: Locator;
    counterItem: Locator;
    schemeRefund: Locator;
    newSchemeRefundEntry: Locator;
    saveButton: Locator;
    warningPopup: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.utilities = {
      utilitiesModule: page.locator(""),
      ChangeBillingCounter: page.locator(''),
      counters: page.locator(""),
      counterItem: page.locator(""),
      schemeRefund: page.locator('').nth(1),
      newSchemeRefundEntry: page.locator(""),
      saveButton: page.locator(''),
      warningPopup: page.locator(""),
    };
  }

  /**
   * This method verifies that the appropriate warning popup is displayed
   * when attempting to save a "Scheme Refund Entry" without filling in
   * the mandatory fields. It navigates to the Utilities module, selects
   * the "Scheme Refund" section, clicks on a counter item, and proceeds
   * to the "New Scheme Refund Entry" form. Without entering any data,
   * it clicks the save button to trigger and validate the warning popup.
   */

  /** 
   *
   * @Test11 Verify Warning Popup for Mandatory Fields in Scheme Refund
   * 
   * 
   * 1.	Navigate to Utilities module and select "Scheme Refund" tab.
   * 2.	If required, please select any counter value and then select “Scheme Refund” tab.
   * 3.	Click on "New scheme Refund Entry" button.
   * 4.	Now click on save without entering value in any field.

   */

  async verifyWarningPopupForMandatoryFiels() {
  }
}
