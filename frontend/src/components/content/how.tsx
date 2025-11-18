import { h } from "preact";

export function How() {
  return (
    <div
      id="how"
      class="oj-divider-bottom oj-flex oj-sm-flex-direction-column oj-sm-align-items-center oj-sm-justify-content-center oj-sm-padding-12x-vertical oj-sm-padding-2x-horizontal"
    >
      <h2 class="oj-text-color-primary oj-typography-heading-lg oj-sm-margin-12x-bottom custom-text-align-center">
        How Does it Work?
      </h2>

      <div class="oj-flex oj-sm-flex-direction-column oj-sm-align-items-center oj-sm-justify-content-center">
        <div
          class="oj-flex oj-sm-align-items-center oj-sm-justify-content-space-between oj-sm-margin-8x-bottom
                 oj-md-only-flex-direction-column oj-md-justify-content-center
                 oj-sm-only-flex-direction-column oj-sm-justify-content-center"
        >
          <div
            class="how-number-div oj-flex oj-sm-align-items-center oj-sm-justify-content-center oj-sm-margin-12x-end
                      oj-md-only-margin-0-end oj-md-only-margin-6x-bottom
                      oj-sm-only-margin-0-end oj-sm-only-margin-6x-bottom"
          >
            <span class="oj-typography-heading-lg">1</span>
          </div>
          <div
            class="how-content-div
                   custom-md-only-text-align-center oj-md-only-width-4/5
                   custom-sm-only-text-align-center oj-sm-only-width-4/5"
          >
            <h3 class="oj-sm-margin-0 oj-typography-heading-md">
              Enter Your Location
            </h3>
            <p class="oj-sm-margin-0 oj-typography-body-lg custom-md-only-typography-body-lg">
              Let us know which city you are in, we will calculate the average
              usable sunlight per year.
            </p>
          </div>
        </div>

        <div
          class="oj-flex oj-sm-align-items-center oj-sm-justify-content-space-between oj-sm-margin-8x-bottom
                 custom-md-only-flex-direction-column-reverse oj-md-justify-content-center
                 custom-sm-only-flex-direction-column-reverse oj-sm-justify-content-center"
        >
          <div
            class="how-content-div
                   custom-md-only-text-align-center oj-md-only-width-4/5
                   custom-sm-only-text-align-center oj-sm-only-width-4/5"
          >
            <h3 class="oj-sm-margin-0 oj-typography-heading-md">
              Fill Some Information
            </h3>
            <p class="oj-sm-margin-0 oj-typography-body-lg custom-md-only-typography-body-lg">
              Enter your average power consumption in kWh, we will estimate how
              many solar panels you need based on your consumption and average
              usable sunlight in your area.
            </p>
          </div>
          <div
            class="how-number-div oj-flex oj-sm-align-items-center oj-sm-justify-content-center oj-sm-margin-12x-start
                   oj-md-only-margin-0-start oj-md-only-margin-6x-bottom
                   oj-sm-only-margin-0-start oj-sm-only-margin-6x-bottom"
          >
            <span class="oj-typography-heading-lg">2</span>
          </div>
        </div>

        <div
          class="oj-flex oj-sm-align-items-center oj-sm-justify-content-space-between
                 oj-md-only-flex-direction-column oj-md-justify-content-center
                 oj-sm-only-flex-direction-column oj-sm-justify-content-center"
        >
          <div
            class="how-number-div oj-flex oj-sm-align-items-center oj-sm-justify-content-center oj-sm-margin-12x-end
                      oj-md-only-margin-0-end oj-md-only-margin-6x-bottom
                      oj-sm-only-margin-0-end oj-sm-only-margin-6x-bottom"
          >
            <span class="oj-typography-heading-lg">3</span>
          </div>
          <div
            class="how-content-div
                   custom-md-only-text-align-center oj-md-only-width-4/5
                   custom-sm-only-text-align-center oj-sm-only-width-4/5"
          >
            <h3 class="oj-sm-margin-0 oj-typography-heading-md">
              See Your Potential Savings!
            </h3>
            <p class="oj-sm-margin-0 oj-typography-body-lg custom-md-only-typography-body-lg">
              See how much you could save by transitioning to solar power, as
              well as seeing how much it could cost you to go full solar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
