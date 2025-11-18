import { h, createContext } from "preact";
import * as mockupStatisticsData from "text!../data/mockupStatisticsData.json";

type StatisticsData = {
  kwh: number;
  roofArea: number;
  solarPotentialKwhYear: number;
  estimatedSavingsUsdYear: number;
  co2ReductionTonsYear: number;
};

const statisticsData: StatisticsData = JSON.parse(mockupStatisticsData);
const setStatisticsData = () => {};

export const StatisticsDataContext = createContext<any>({
  statisticsData,
  setStatisticsData,
});
