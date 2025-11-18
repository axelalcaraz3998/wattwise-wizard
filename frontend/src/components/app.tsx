/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { registerCustomElement } from "ojs/ojvcomponent";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import Context = require("ojs/ojcontext");
import { Footer } from "./footer";
import { Header } from "./header";
import { Content } from "./content/index";
import { StatisticsDataContext } from "./ctx";
import * as mockupStatisticsData from "text!../data/mockupStatisticsData.json";

type StatisticsData = {
  kwh: number;
  roofArea: number;
  avgUsableSunlight: number;
  numOfPanels: number;
  totalCost: number;
};

type Props = Readonly<{
  appName?: string;
  userLogin?: string;
}>;

const mockupStatisticsDataObj: StatisticsData =
  JSON.parse(mockupStatisticsData);

export const App = registerCustomElement(
  "app-root",
  ({ appName = "WattWise Wizard" }: Props) => {
    useEffect(() => {
      Context.getPageContext().getBusyContext().applicationBootstrapComplete();
    }, []);

    const [statisticsData, setStatisticsData] = useState(
      mockupStatisticsDataObj
    );

    return (
      <StatisticsDataContext.Provider
        value={{ statisticsData, setStatisticsData }}
      >
        <div id="appContainer" class="oj-web-applayout-page">
          <Header appName={appName} />
          <Content />
          <Footer />
        </div>
      </StatisticsDataContext.Provider>
    );
  }
);
