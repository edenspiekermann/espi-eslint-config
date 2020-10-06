module.exports = {
  basic: {
    foo: true,
    bar: false,
  },
  redundant: {
    foo: true,
    'bar': false,
    baz: null,
  },
  inconsistent: {
    foo: true,
    'bar baz': false,
  },
  numeric: {
    '7411': true,
    0x815: false,
    42: null,
  },
};
