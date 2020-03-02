const fakeDatabase = [];
const ONE_HOUR_IN_MILLISECONDS = 1000 * 60 * 60;

function addMetric(key, value) {
  fakeDatabase.push({
    key: key,
    date: new Date(),
    value: value
  });
}
function getSum(key) {
  return fakeDatabase.reduce((accumulator, entry) => {
    if (
      entry.key === key &&
      entry.date.getTime() > Date.now() - ONE_HOUR_IN_MILLISECONDS
    ) {
      return accumulator + entry.value;
    }
    return accumulator;
  }, 0);
}
module.exports = {
  addMetric,
  getSum
};
