import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

test("exports the complete portfolio structure", () => {
  for (const id of ["about", "projects", "skills", "experience", "credentials", "contact"]) {
    assert.match(html, new RegExp(`id="${id}"`));
    assert.match(html, new RegExp(`href="#${id}"`));
  }
  assert.match(html, /Robotics &amp; Embedded Firmware Engineer/);
  assert.match(html, /Machines that/i);
  assert.match(html, /5-DOF Robotic Arm/);
  assert.match(html, /LA-Braille/);
  assert.match(html, /AgriNode: Modular Greenhouse IoT (&amp;|&) Telemetry System/);
  assert.match(html, /IoT Introduction to Senior High School/);
  assert.match(html, /Bone Bolango/);
  assert.match(html, /brawijaya-ee-cohort-1\.jpg/);
  assert.match(html, /devel-ai\.ub\.ac\.id\/agrinode/);
  assert.match(html, /hardy-iot-pcb-isometric\.png/);
  assert.match(html, /Azure AI Fundamentals/);
  assert.match(html, /Getting Started with Azure Cloud/);
  assert.doesNotMatch(html, /Sentinelle/);
});

test("includes navigation and accessibility affordances", () => {
  assert.match(html, /class="skip-link"/);
  assert.match(html, /id="mobile-navigation"/);
  assert.match(html, /aria-controls="mobile-navigation"/);
  assert.match(html, /aria-label="Primary navigation"/);
  assert.match(html, /theme-toggle-btn/);
  assert.match(html, /CV-Rama-Rizky-Belrouzy-Habir\.pdf/);
  assert.match(html, /Copy Email/);
});

test("includes portfolio social metadata without starter copy", () => {
  assert.match(html, /Rama Habir — Robotics &amp; Telecommunications/);
  assert.match(html, /og-v2\.png/);
  assert.doesNotMatch(html, /codex-preview|Starter Project|Your site is taking shape/);
});
