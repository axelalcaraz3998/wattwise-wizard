import { h } from "preact";
import { useState, useContext } from "preact/hooks";
import { StatisticsDataContext } from "../ctx";
import "ojs/ojlabel";
import "oj-c/input-text";
import "oj-c/input-number";
import "oj-c/button";

type FormState = {
  address: string;
  kwh: number;
  area: number;
};

export function CTA() {
  const [formState, setFormState] = useState<FormState>({
    address: "",
    kwh: 0,
    area: 0,
  });

  const { statisticsData, setStatisticsData } = useContext(
    StatisticsDataContext
  );

  function updateFormState(e: any, name: string) {
    const { value } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function formSubmit() {
    // TODO: Call REST API endpoint and update the context state with response data
    setStatisticsData((prevState: any) => ({
      ...prevState,
      kwh: formState.kwh,
      roofArea: formState.area,
      avgUsableSunlight: 1280,
      numOfPanels: 1,
      totalCost: 720,
    }));

    window.location.hash = "demo";
  }

  return (
    <div
      id="cta"
      class="oj-divider-bottom oj-flex oj-sm-flex-direction-column oj-sm-align-items-center oj-sm-justify-content-center oj-sm-padding-12x-vertical oj-sm-padding-2x-horizontal"
    >
      <h2 class="oj-text-color-primary oj-typography-heading-lg oj-sm-margin-12x-bottom custom-text-align-center">
        Start Saving!
      </h2>
      <p class="oj-typography-body-lg custom-text-align-center">
        Fill up the form with the information we need, we will work our magic on
        our end.
      </p>

      <div id="form-container">
        <div class="oj-sm-12 oj-md-12 oj-lg-12">
          <oj-c-input-text
            id="address-input"
            labelHint="Address"
            placeholder="Fake Avenue 123"
            required
            onvalueChanged={(e) => updateFormState(e, "address")}
          ></oj-c-input-text>
        </div>
        <div class="oj-flex oj-sm-only-flex-direction-column">
          <div class="oj-sm-12 oj-md-6 oj-lg-6">
            <oj-c-input-number
              id="kwh-input"
              labelHint="Monthly kWh"
              placeholder="283"
              inputSuffix="kWh"
              required
              onvalueChanged={(e) => updateFormState(e, "kwh")}
            ></oj-c-input-number>
          </div>
          <div class="oj-sm-12 oj-md-6 oj-lg-6">
            <oj-c-input-number
              id="area-input"
              labelHint="Roof area (m²)"
              placeholder="64"
              inputSuffix="m²"
              required
              onvalueChanged={(e) => updateFormState(e, "area")}
            ></oj-c-input-number>
          </div>
        </div>
        <div class="oj-flex oj-sm-align-items-center oj-sm-justify-content-flex-end">
          <oj-c-button
            id="cta-submit"
            label="Submit"
            chroming="callToAction"
            size="lg"
            onojAction={formSubmit}
          ></oj-c-button>
        </div>
      </div>
    </div>
  );
}
