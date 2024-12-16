document.getElementById('exploreBtn').addEventListener('click', () => {
    window.scrollTo({
      top: document.getElementById('rent').offsetTop,
      behavior: 'smooth'
    });
  });
  
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
  });
  
  document.querySelectorAll('.about-card').forEach((card) => {
    card.addEventListener('click', () => {
      alert(`More details about: ${card.querySelector('h3').innerText}`);
    });
  });
  