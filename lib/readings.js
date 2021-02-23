// 温度の一連の測定結果を見て、動作環境範囲外になるデータがないか判定するコード

const station = {
  name: "ZB1",
  readings:[
    {temp: 47, time: "2016-11-10 09:10"},
    {temp: 53, time: "2016-11-10 09:20"},
    {temp: 58, time: "2016-11-10 09:30"},
    {temp: 53, time: "2016-11-10 09:40"},
    {temp: 51, time: "2016-11-10 09:50"},
  ]
};

let alerts = readingsOutsideRange(station, operatingPlan.tempertureFloor, operatingPlan.tempertureCeiling);

function readingsOutsideRange(station, min, max) {
  return station.readings.filter(r => r.temp < min || r.temp > max);
}
