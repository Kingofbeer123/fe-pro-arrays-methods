import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
   return goods.filter(item => item.brand === brand);
}
 
/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  return goods.filter(item => item.color === color);
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  return goods.filter(item => item.model === model);
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  return goods.filter(item => item.memory === memory);
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  return goods.filter(item => item.price === price);
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  return goods.filter(item => item.country === country);
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  return goods.filter(item => item.os === os);
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  return goods.filter((item) => item.price >= from && item.price <= to);
};

const minPriceReducer = () => {
  return goods.reduce((accumulator, good) => Math.min(accumulator, good.price), goods[0].price);
};

const maxPriceReducer = () => {
  return goods.reduce((accumulator, good) => Math.max(accumulator, good.price), goods[0].price);
};

const toMaxSorter = () => {
  return goods.sort((firstItem, secondItem) => {
    if (firstItem < secondItem) 
    return 1;
    if (firstItem > secondItem) 
    return -1;
  })
};
const toMinSorter = () => {};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
