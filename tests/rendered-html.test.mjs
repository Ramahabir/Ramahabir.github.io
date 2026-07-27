import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

test("exports the complete portfolio structure", () => {
  for (const id of ["about", "projects", "experience", "credentials", "contact"]) {
    assert.match(html, new RegExp(`id="${id}"`));
    assert.match(html, new RegExp(`href="#${id}"`));
  }
  assert.match(html, /Machines that/);
  assert.match(html, /Solar Panel Telemetry/);
  assert.match(html, /STM32 ↔ ESP32/);
  assert.match(html, /Hardy IoT Platform/);
  assert.doesNotMatch(html, /Sentinelle/);
});

test("includes navigation and accessibility affordances", () => {
  assert.match(html, /class="skip-link"/);
  assert.match(html, /id="mobile-navigation"/);
  assert.match(html, /aria-controls="mobile-navigation"/);
  assert.match(html, /aria-label="Primary navigation"/);
});

test("includes portfolio social metadata without starter copy", () => {
  assert.match(html, /Rama Habir — Robotics &amp; Telecommunications/);
  assert.match(html, /og-v2\.png/);
  assert.doesNotMatch(html, /codex-preview|Starter Project|Your site is taking shape/);
});
