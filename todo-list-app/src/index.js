let checkBtn = $('.checkBtn');

checkBtn.text('');
let checkState = true;

if (checkState === true) {
    checkBtn.on('click', () => {
        checkBtn.html('<i class="fa-solid fa-check"></i>');
    })
    checkState = false;
} else {
    checkBtn.on('click', () => {
        checkBtn.html('');
    })
    checkState = true;
}
