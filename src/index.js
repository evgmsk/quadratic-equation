module.exports = function solveEquation(equation) {
    const _equation = equation.replace(/\s/g, '');
    const _params = _equation.replace(/x(\^2)?/g, '').split("*");
    const test_params = /^(-|\+)?\d*$/.test(_params[0]) &&
                        /^(-|\+)?\d*$/.test(_params[1]) &&
                        /^(-|\+)?\d*$/.test(_params[2]);
    const test_equation = _equation.indexOf('x^2') > 0 &&
                          _equation.indexOf("x", _equation.indexOf('x^2') + 1) > 0;
    if(test_params && test_params){
        const a = parseInt(_params[0]);
        const b = parseInt(_params[1]);
        const c = parseInt(_params[2]);
        const D = Math.round(Math.sqrt(b * b - 4 * a * c));
        return a > 0?
            [(- b - D) / (2 * a), (- b + D) / (2 * a)]:
            [(- b + D) / (2 * a), (- b - D) / (2 * a)]
    }
    console.log('invalid equation');
    return false
};
