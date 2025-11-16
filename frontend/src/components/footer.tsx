/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { h } from "preact";

export function Footer() {
  return (
    <footer
      class="oj-web-applayout-footer oj-flex-bar oj-sm-padding-8x-vertical"
      role="contentinfo"
    >
      <div class="oj-web-applayout-footer-item oj-web-applayout-max-width oj-flex-bar-start oj-sm-align-items-center">
        WattWise Wizard
      </div>
      <div
        class="oj-web-applayout-footer-item oj-web-applayout-max-width oj-text-color-secondary 
               oj-typography-body-sm oj-flex-bar-end oj-sm-justify-content-flex-end oj-sm-align-items-center"
      >
        WattWise Wizard 2025
      </div>
    </footer>
  );
}
