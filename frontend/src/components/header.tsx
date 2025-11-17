/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { h } from "preact";
import "oj-c/button";

type Props = Readonly<{
  appName: string;
}>;

function handleScroll() {
  window.location.hash = "cta";
}

export function Header({ appName }: Props) {
  return (
    <header
      id="header"
      role="banner"
      class="oj-web-applayout-header oj-sm-padding-4x-vertical"
    >
      <div class="oj-web-applayout-max-width oj-flex-bar oj-sm-align-items-center">
        <div class="oj-flex-bar-middle oj-sm-align-items-baseline">
          <img
            class="header-logo"
            src="https://i.ibb.co/PvPr9wXV/logo.png"
            alt="WattWise Wizard Logo"
          />
          <h1
            class="oj-sm-only-hide oj-web-applayout-header-title"
            title="Application Name"
          >
            {appName}
          </h1>
        </div>
        <div class="oj-flex-bar-end">
          <oj-c-button
            id="cta-header"
            label="Try It Out"
            chroming="callToAction"
            onojAction={handleScroll}
          ></oj-c-button>
        </div>
      </div>
    </header>
  );
}
