function debounce(func, ms) {
    let timerId;
    function wrapper(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            return func.apply(this, args);
        }, ms);
    };

    wrapper.calls = [];

    return wrapper;
}

let f = debounce(alert, 1000);

f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);
// debounced function waits 1000ms after the last call and then runs: alert("c")