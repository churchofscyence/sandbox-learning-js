const defaults = { color: 'red', size: 'medium' };
const userSettings = { color: 'blue', model: 'train' };

const combinedSettings = { ...defaults, ...userSettings };
console.log(combinedSettings);