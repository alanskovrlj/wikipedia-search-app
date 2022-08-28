import { ResultSet } from "../global/types";

export async function measurePerfomance(fn : () => Promise<any>) {
    let time1 = performance.now();
    const resultSet = await fn();
    let time2 = performance.now();
    return {
      resultSet,
      time: Math.round(time2 - time1)
    }
  }