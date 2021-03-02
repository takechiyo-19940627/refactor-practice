// ハギスの移動距離を計算するロジック
const scenario = {
  primaryForce: 10,
  secondaryForce: 15,
  math: 5,
  delay: 5,
};

const time = 10;

distanceTravelled(scenario, time);

function distanceTravelled(scenario, time) {
  let result;
  let acc = scenario.primaryForce / scenario.math;
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * acc * primaryTime * primaryTime;
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    let primaryVelocity = acc * scenario.delay;
    acc = (scenario.primaryForce + scenario.secondaryForce);
    result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
  }
  return result;
}