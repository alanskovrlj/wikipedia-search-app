export async function measurePerfomance(fun, monitorLabel) {
    let time1 = performance.now();
    const resultSet = await fun();
    let time2 = performance.now();
    return {
      resultSet,
      time: Math.round(time2 - time1)
    }
  }