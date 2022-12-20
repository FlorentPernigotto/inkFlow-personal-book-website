window.addEventListener('resize', function() {
    if (window.innerWidth < 600) {
      document.querySelector('nav').classList.add('hidden');
    } else {
      document.querySelector('nav').classList.remove('hidden');
    }
  });