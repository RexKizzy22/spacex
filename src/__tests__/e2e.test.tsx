import { test, expect } from "@playwright/test";

test.describe("SpaceX Launches Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("displays the list of upcoming launches", async ({ page }) => {
    // Check if the heading is displayed
    await expect(page.locator("h1")).toHaveText("Upcoming SpaceX Launches");

    // Wait for launches to load and be displayed
    const mission = await page.locator("text=Mission Starlink 15");
    await expect(mission).toBeVisible({ timeout: 50000 });
  });

  test("can filter launches by mission name", async ({ page }) => {
    // Wait for launches to load
    await page.waitForSelector("text=Mission Starlink 15");

    // Type "Crew-2" in the search box
    await page.fill(
      "input[placeholder='Search by mission or launch site']",
      "Crew-2"
    );

    // Ensure the filtered mission appears and the other one is hidden
    await expect(page.locator("text=Mission Starlink 15")).toBeHidden();
    await expect(page.locator("text=Mission Crew-2")).toBeVisible({
      timeout: 50000,
    });
  });

  test("handles API errors gracefully", async ({ page }) => {
    // Force an error scenario by intercepting the API request and failing it
    await page.route("**/graphql", (route) =>
      route.fulfill({
        status: 500,
        body: JSON.stringify({
          errors: [{ message: "Internal Server Error" }],
        }),
      })
    );

    // Reload page to trigger request
    await page.reload();

    // Check if error message is displayed
    await expect(page.locator("text=Error: Internal Server Error")).toBeVisible(
      { timeout: 50000 }
    );
  });
});
