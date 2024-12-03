export const peek = (input) => input[0];
export const pop = (input) => input.shift();
export const pipe =
    (...funcs) =>
    (value) => {
        return funcs.reduce((value, func) => {
            if (typeof func !== 'function') {
                throw new TypeError('Expected a function');
            }
            return func(value);
        }, value);
    };
