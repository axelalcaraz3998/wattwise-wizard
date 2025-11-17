import { h } from "preact";
import "oj-c/button";

function handleScroll() {
  window.location.hash = "cta";
}

export function Hero() {
  return (
    <div
      id="hero"
      class="oj-divider-bottom oj-flex oj-sm-flex-direction-column oj-sm-align-items-center oj-sm-justify-content-center oj-sm-padding-12x-vertical oj-sm-padding-2x-horizontal"
    >
      <div class="oj-flex oj-sm-flex-direction-column oj-sm-align-items-center oj-sm-justify-content-center oj-sm-margin-12x-bottom">
        <div class="oj-flex oj-sm-align-items-center oj-sm-justify-content-center">
          <img
            class="hero-logo"
            src="https://i.ibb.co/PvPr9wXV/logo.png"
            alt="WattWise Wizard Logo"
          />
        </div>
        <h1 class="oj-sm-margin-1x-bottom oj-text-color-primary oj-typography-heading-lg custom-text-align-center">
          WattWise Wizard
        </h1>
        <p class="oj-sm-margin-0 oj-text-color-secondary oj-typography-subheading-md custom-text-align-center">
          Cast a Brighter Future With Solar
        </p>
      </div>

      <oj-c-button
        id="cta-hero"
        label="Try It Out"
        chroming="callToAction"
        size="lg"
        onojAction={handleScroll}
      ></oj-c-button>
    </div>
  );
}
