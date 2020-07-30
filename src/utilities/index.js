exports.extractObject = (obj, keys) => {
    const returnObj = {};
    keys.forEach(key => {
        returnObj[key] = obj[key]
    });
}

exports.calculatePercentage = (amount, percentage) => {
    return ((percentage / 100) * amount).toFixed(2)
}