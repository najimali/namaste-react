export const debounce = (callBack, delay) => {
    let timeout;

    function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            callBack(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, delay);
    };

    executedFunction.cancel = function () {
        clearTimeout(timeout);
    };

    return executedFunction;
}
