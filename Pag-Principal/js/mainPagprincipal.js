document.getElementById('notif-toggle').addEventListener('click', function(e) {
    e.preventDefault();
    const panel = document.getElementById('notif-panel');
    panel.classList.toggle('hidden');
  });