const fs = require('fs');
const variants = require('./countryVariants.js');
const countryInfo = require('./countryInfo.js');

const getCountry = (name) => {
    if (!name) return undefined;
    const index = variants.findIndex(v => v.includes(name.trim().toLowerCase()));
    return index >= 0 && countryInfo[index] || undefined
}

module.exports = { getCountry }