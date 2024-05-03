var _a;
(_a = document.querySelector('.btn__dark-blue')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var textContent = 'This is a test text, created for the exercise purposes, you can add a lot of bullsh*t here :)!\n';
    var blob = new Blob([textContent], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'test.txt';
    link.click();
    URL.revokeObjectURL(url);
});
