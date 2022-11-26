// Code your solution here
[1, 2, 3, 4, 5].filter(function (num) { return num > 3; });

function findMatching(drivers, attribute) {
  return drivers.filter(function (driver) { return driver.toLowerCase() === attribute.toLowerCase() })
}

function fuzzyMatch(drivers, attribute) {
  return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
}

function matchName(drivers, argument) {
  return drivers.filter(function (driver) { return driver.name === argument })
}

