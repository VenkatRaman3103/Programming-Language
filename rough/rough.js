const all =
    (fn) =>
    (...list) =>
        list.reduce(fn);

const addition = (a, b) => a + b;

const add = all(addition);

const customAdd = (...list) => {
    console.log(list);
    list.reduce((a, b) => a + b);
};

console.log(add(1, 2, 3));
