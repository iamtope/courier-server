exports.extractObject = (obj, keys) => {
    const returnObj = {};
    keys.forEach(key => {
        returnObj[key] = obj[key]
    });
}

exports.calculatePercentage = (amount, percentage) => {
    if (!percentage) return amount
    return ((percentage / 100) * amount).toFixed(2)
}