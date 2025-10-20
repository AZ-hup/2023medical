document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('helloBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      window.location.href = '/next';
    });
  }
  console.log('Main JS loaded: click to navigate to /next');
});