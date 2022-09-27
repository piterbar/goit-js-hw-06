const Input = document.querySelector('#name-input' );
const Span = document.querySelector('#name-output');

Input.addEventListener('input', newInput);

function newInput(e) {
    Span.textContent = e.currentTarget.value;

    if (e.currentTarget.value === "") {
        Span.textContent = 'Anonymous'
    }
}