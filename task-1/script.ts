document.querySelector('.btn__dark-blue')?.addEventListener('click', () => {
  const textContent: string =
    'This is a test text, created for the exercise purposes, you can add a lot of bullsh*t here :)!\n';
  const blob: Blob = new Blob([textContent], { type: 'text/plain' });
  const url: string = URL.createObjectURL(blob);
  const link: HTMLAnchorElement = document.createElement('a');
  link.href = url;
  link.download = 'test.txt';
  link.click();
  URL.revokeObjectURL(url);
});
