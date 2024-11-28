document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.background = 'linear-gradient(90deg, #ff758c, #ff7eb3)';
    });
    
    link.addEventListener('mouseout', () => {
      link.style.background = 'linear-gradient(90deg, #6a11cb, #2575fc)';
    });
  
    link.addEventListener('click', () => {
      link.classList.add('clicked');
      setTimeout(() => link.classList.remove('clicked'), 300);
    });
  });
  