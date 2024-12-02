export const peek = (input) => input[0];
export const pop = (input) => input.shift();
export const pipe =
    (...funcs) =>
    (value) => {
        console.log('Functions passed to pipe:', funcs); // Debugging line
        return funcs.reduce((value, func) => {
            if (typeof func !== 'function') {
                throw new TypeError('Expected a function');
            }
            return func(value);
        }, value);
    };
