export const hasTruthyValue = (obj) => {
    return Object.values(obj).some(value => value !== null && value !== false && value !== "");
};