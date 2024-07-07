document.getElementById('doubtForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const doubtText = document.getElementById('doubtText').value;
    if (doubtText.trim() === '') {
        alert('Please enter a question.');
    } else {
        alert('Your doubt has been recorded, we will getting back to you soon with an answe');
        document.getElementById('doubtText').value = '';
    }
});
