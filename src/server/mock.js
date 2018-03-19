const Mock = require('mockjs');

Mock.mock('/mock?value=1', 'get', [
        '1的历史',
        '1 + 1 = ?',
        '1的相关',
        '1 balabala'
]);

Mock.mock('/mock?value=12', 'get', [
    '12的历史',
    '1 + 12 = ?',
    '12的相关',
    '12 balabala'
]);
Mock.mock('/mock?value=123', 'get', [
        '123的历史',
        '123 + 123 = ?',
        '123的相关',
        '123 balabala'
]);
Mock.mock('/mock?value=1234', 'get', [
        '1234的历史',
        '1234 + 1234 = ?',
        '1234的相关',
        '1234 balabala'
]);
Mock.mock('/mock?value=2', 'get', [
        '2的历史',
        '2 + 2 = ?',
        '2的相关',
        '2 balabala'
]);
export { Mock }