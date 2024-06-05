const { Builder, By, until } = require("selenium-webdriver");

let driver;

test("neue Elemente hinzufügen", async () => {
    
    driver = await new Builder().forBrowser("chrome").build();

    
    await driver.get("http://localhost:3002");

    
    const inputName = await driver.findElement(By.id("inputName"));
    const inputEmail = await driver.findElement(By.id("inputEmail"));
    const sendButton = await driver.findElement(By.xpath('//button[@type="submit"]'));


    await inputName.sendKeys("John Doe");
    await inputEmail.sendKeys("john.doe@example.com");
    await sendButton.click();

    

    
    await driver.quit();
});
