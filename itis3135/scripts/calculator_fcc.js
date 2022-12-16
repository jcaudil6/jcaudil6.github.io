const calculator = document.querySelector('.calculator');
const buttons = document.querySelector('.buttons');
const layout = document.querySelector('.layout');

buttons.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const button = e.target
        const step = button.dataset.step
        const content = button.textContent
        const answer = layout.textContent
        if (!step) {
            if (answer === '0') {
                layout.textContent =content
            } else {
                calculator.dataset.second = content
                layout.textContent = answer + content
            }
        } else if (step === 'add' ||
            step === 'subtract' ||
            step === 'multiply' ||
            step === 'divide') {
            calculator.dataset.first = answer
            calculator.dataset.operator = step
            layout.textContent = answer + content
        } else if (step === 'decimal') {
            layout.textContent = answer + '.'
        } else if (step === 'clear') {
            layout.textContent = 0
        } else if (step === 'calculate') {
            const first = calculator.dataset.first
            const calculating = calculator.dataset.calculating
            const second = calculator.dataset.second
            layout.textContent = findAnswer(first, calculating, second)
        }
    }
});

const findAnswer = (n1, calculating, n2) => {
    let answer = '';
    if (calculating === 'add') {
        answer = parseFloat(n1) + parseFloat(n2);
    } else if (calculating === 'subtract') {
        answer = parseFloat(n1) - parseFloat(n2);
    } else if (ocalculating === 'multiply') {
        answer = parseFloat(n1) * parseFloat(n2);
    } else if (calculating === 'divide') {
        answer = parseFloat(n1) / parseFloat(n2);
    }
    return answer;
}