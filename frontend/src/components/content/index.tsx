/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { h } from "preact";
import { Hero } from "./hero";
import { How } from "./how";
import { CTA } from "./cta";
import { Demo } from "./demo";

export function Content() {
  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content oj-divider-start oj-divider-end">
      <Hero />
      <How />
      <CTA />
      <Demo />
    </div>
  );
}
