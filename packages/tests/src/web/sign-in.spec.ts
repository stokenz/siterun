import { test, expect } from "@playwright/test";

test("automatic redirect to sign-in page", async ({ page }) => {
  await page.goto("/");

  // Expect automatic redirection to sign-in page.
  await expect(page).toHaveURL(
    "/sign-in?redirect=http%3A%2F%2Flocalhost%3A3001%2F",
  );

  await expect(page).toHaveTitle(/SiteRun/);
  await expect(page.getByText("Please sign in to continue")).toBeVisible();
  // await expect(page).toHaveScreenshot();
});

test("sign in with invalid credentials", async ({ page }) => {
  await page.goto("/sign-in");

  // Fill in the sign-in form.
  await page.getByLabel("Email").fill("jamie@stoke.nz");
  await page.getByLabel("Password").fill("wrong-password");

  // Click the submit button.
  await page.getByRole("button", { name: "Sign in" }).click();

  await expect(page.getByText("Something went wrong")).toBeVisible();
  // await expect(page).toHaveScreenshot();
});

test("sign in with valid credentials", async ({ page }) => {
  await page.goto("/sign-in");

  // Fill in the sign-in form.
  await page.getByLabel("Email").fill("jamie@stoke.nz");
  await page.getByLabel("Password").fill("password");

  // Click the submit button.
  await page.getByRole("button", { name: "Sign in" }).click();

  await expect(page).toHaveURL(
    "/maps/default?base=streets&layers=%5B%5D&zoom=10&lat=-36.848461&lng=174.763336",
  );
  // await expect(page).toHaveScreenshot();
});
