import { h } from "preact";
import "oj-c/button";

export function Hero() {
  return (
    <div class="oj-divider-bottom oj-flex oj-sm-flex-direction-column oj-sm-align-items-center oj-sm-justify-content-center oj-sm-padding-12x">
      <div class="oj-flex oj-sm-flex-direction-column oj-sm-align-items-center oj-sm-justify-content-center oj-sm-margin-12x-bottom">
        <div
          class="oj-flex oj-sm-align-items-center oj-sm-justify-content-center
               oj-sm-padding-8x oj-sm-margin-1x-bottom oj-bg-neutral-30"
        >
          Logo
        </div>
        <h1 class="oj-sm-margin-1x-bottom oj-text-color-primary oj-typography-heading-2xl">
          WattWise Wizard
        </h1>
        <p class="oj-sm-margin-0 oj-text-color-secondary oj-typography-subheading-md">
          Cast a Brighter Future With Solar
        </p>
      </div>

      <oj-c-button
        id="cta-hero"
        label="Try It Out"
        chroming="callToAction"
        size="lg"
      ></oj-c-button>
    </div>
  );
}
