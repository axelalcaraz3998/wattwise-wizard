import { h } from "preact";
import { useContext } from "preact/hooks";
import { StatisticsDataContext } from "../ctx";
import * as mockupStatisticsData from "text!../../data/mockupStatisticsData.json";
import "oj-c/meter-circle";

type StatisticsData = {
  kwh: number;
  roofArea: number;
  avgUsableSunlight: number;
  numOfPanels: number;
  totalCost: number;
};

export function Demo() {
  const { statisticsData, setStatisticsData } = useContext(
    StatisticsDataContext
  );

  const referenceLinesWithLabels = [
    {
      value: 500,
      color: "success",
      label: "Low",
    },
    {
      value: 1200,
      color: "warning",
      label: "Medium",
    },
    {
      value: 2000,
      color: "danger",
      label: "High",
    },
  ];

  return (
    <div
      id="demo"
      class="oj-flex oj-sm-flex-direction-column oj-sm-align-items-center oj-sm-justify-content-center oj-sm-padding-12x-vertical oj-sm-padding-2x-horizontal"
    >
      <h2 class="oj-text-color-primary oj-typography-heading-lg oj-sm-margin-12x-bottom custom-text-align-center">
        WattWise Wizard in Action
      </h2>

      <div class="chartWrapper oj-flex oj-sm-flex-direction-column oj-sm-align-items-center oj-sm-justify-content-center">
        <oj-c-meter-circle
          aria-labelledby="semi-circular readonly referenceLinesWithLabels"
          min={0}
          max={2400}
          value={statisticsData.kwh}
          size="lg"
          inner-radius="0.5"
          start-angle="180"
          angle-extent="180"
          referenceLines={referenceLinesWithLabels}
          readonly
        ></oj-c-meter-circle>
      </div>
      <h3 class="oj-typography-subheading-md custom-text-align-center">
        Your energy consumption: {statisticsData.kwh} kwh.
      </h3>

      <div class="oj-flex oj-sm-align-items-center oj-sm-justify-content-center oj-sm-margin-6x-top">
        <div
          class="info-panel oj-panel oj-sm-padding-8x
                 oj-sm-only-margin-6x-bottom oj-md-only-margin-6x-bottom"
        >
          <h3 class="oj-typography-subheading-md">Roof Area</h3>
          <p>
            Your roof area: <strong>{statisticsData.roofArea} m²</strong>.
          </p>
        </div>

        <div class="info-panel oj-panel oj-sm-padding-8x">
          <h3 class="oj-typography-subheading-md">Yearly Solar Potential</h3>
          <p>
            <strong>
              {statisticsData.solarPotentialKwhYear.toFixed(2)} kWh
            </strong>{" "}
            of solar potential per year.
          </p>
        </div>
      </div>

      <div class="oj-flex oj-sm-align-items-center oj-sm-justify-content-center oj-sm-margin-6x-top">
        <div
          class="info-panel oj-panel oj-sm-padding-8x
                 oj-sm-only-margin-6x-bottom oj-md-only-margin-6x-bottom"
        >
          <h3 class="oj-typography-subheading-md">Yearly Estimated Savings</h3>
          <p>
            <strong>
              ${statisticsData.estimatedSavingsUsdYear.toFixed(2)} USD
            </strong>{" "}
            per year.
          </p>
        </div>

        <div class="info-panel oj-panel oj-sm-padding-8x">
          <h3 class="oj-typography-subheading-md">Environmental Impact</h3>
          <p>
            Up to{" "}
            <strong>
              {statisticsData.co2ReductionTonsYear.toFixed(2)} tons
            </strong>{" "}
            in CO<sub>2</sub> reductions yearly.
          </p>
        </div>
      </div>
    </div>
  );
}
