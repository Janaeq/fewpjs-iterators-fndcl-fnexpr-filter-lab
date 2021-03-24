// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase()[0] === str.toLowerCase()[0])
}

function matchName(drivers, str) {
    return drivers.filter( driver => driver.name === str)
}