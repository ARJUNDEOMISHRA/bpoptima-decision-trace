// Toggle stage panels
document.querySelectorAll('.stage').forEach(stage => {
  stage.addEventListener('click', () => {
    const panel = stage.nextElementSibling;
    const isOpen = panel.classList.contains('open');
    stage.classList.toggle('open', !isOpen);
    panel.classList.toggle('open', !isOpen);
  });
});

// Role toggle
document.querySelectorAll('.role-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const role = btn.dataset.role;
    document.body.dataset.role = role;
    document.querySelectorAll('.role-copy').forEach(el => {
      el.textContent = el.dataset[role];
    });
  });
});

// Initialize role copy on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.role-copy').forEach(el => {
    el.textContent = el.dataset['cro'];
  });
});