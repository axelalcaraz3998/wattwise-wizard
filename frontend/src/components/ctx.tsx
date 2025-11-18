import { h, createContext } from "preact";
import * as mockupStatisticsData from "text!../data/mockupStatisticsData.json";

type StatisticsData = {
  kwh: number;
  roofArea: number;
  avgUsableSunlight: number;
  numOfPanels: number;
  totalCost: number;
};

type ContextType = {
  statisticsData: StatisticsData;
  setStatisticsData: () => void;
};

const statisticsData: StatisticsData = JSON.parse(mockupStatisticsData);
const setStatisticsData = () => {};

export const StatisticsDataContext = createContext<any>({
  statisticsData,
  setStatisticsData,
});
