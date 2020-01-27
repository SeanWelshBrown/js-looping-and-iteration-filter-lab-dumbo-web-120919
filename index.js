function findMatching(drivers, string) {
  let matchedDrivers;
  matchedDrivers = drivers.filter(function (driver) {
    return driver.toUpperCase() === string.toUpperCase(); 
  });
  return matchedDrivers;
};

function fuzzyMatch(drivers, string) {
  let lengthOfName = string.length;
  return drivers.filter(function (driver) {
    return driver.slice(0, lengthOfName) === string;
  });
};

function matchName(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name === string;
  });
};