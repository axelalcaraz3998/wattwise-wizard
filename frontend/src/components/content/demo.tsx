import * as mockupChartData from "text!../../data/mockupChartData.json";
import * as mockupStatisticsData from "text!../../data/mockupStatisticsData.json";
import MutableArrayDataProvider = require("ojs/ojmutablearraydataprovider");
import "ojs/ojchart";
import { ojChart } from "ojs/ojchart";
import { useState } from "preact/hooks";

type ChartItem = {
  id: number;
  startPeriod: string;
  endPeriod: string;
  kwh: number;
  cost: number;
  value: number;
  labelKwh: string;
  labelCost: string;
};

type StatisticsData = {
  avgKwh: number;
  avgCost: number;
  lowestKwh: number;
  highestKwh: number;
  lowestCost: number;
  highestCost: number;
};

export function Demo() {
  const statisticsData = useState<StatisticsData>(
    JSON.parse(mockupStatisticsData)
  );

  const chartData = new MutableArrayDataProvider(JSON.parse(mockupChartData), {
    keyAttributes: "id",
  });

  const kwhChartItem = (
    item: ojChart.ItemTemplateContext<ChartItem["id"], ChartItem>
  ) => {
    return (
      <oj-chart-item
        value={item.data.kwh}
        groupId={[`${item.data.startPeriod} - ${item.data.endPeriod}`]}
        seriesId={item.data.labelKwh}
      ></oj-chart-item>
    );
  };

  const costChartItem = (
    item: ojChart.ItemTemplateContext<ChartItem["id"], ChartItem>
  ) => {
    return (
      <oj-chart-item
        value={item.data.cost}
        groupId={[`${item.data.startPeriod} - ${item.data.endPeriod}`]}
        seriesId={item.data.labelCost}
      ></oj-chart-item>
    );
  };

  return (
    <div
      id="demo"
      class="oj-flex oj-sm-flex-direction-column oj-sm-align-items-center oj-sm-justify-content-center oj-sm-padding-12x"
    >
      <h2 class="oj-text-color-primary oj-typography-heading-lg oj-sm-margin-12x-bottom custom-text-align-center">
        WattWise Wizard in Action
      </h2>

      <div class="chartWrapper">
        <oj-chart
          id="khw-chart"
          type="bar"
          orientation="vertical"
          stack="off"
          animationOnDisplay="auto"
          animationOnDataChange="auto"
          hoverBehavior="dim"
          data={chartData}
        >
          <template slot="itemTemplate" render={kwhChartItem}></template>
        </oj-chart>

        <oj-chart
          id="cost-chart"
          type="bar"
          orientation="vertical"
          stack="off"
          animationOnDisplay="auto"
          animationOnDataChange="auto"
          hoverBehavior="dim"
          data={chartData}
        >
          <template slot="itemTemplate" render={costChartItem}></template>
        </oj-chart>
      </div>
    </div>
  );
}
