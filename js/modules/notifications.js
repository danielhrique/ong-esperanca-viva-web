const toastTheme = {
  success: '#166534',
  error: '#b91c1c',
  info: '#2563eb',
};

export function showToast(message, type = 'info') {
  if (!window.Toastify) {
    return;
  }

  window.Toastify({
    text: message,
    duration: 3200,
    gravity: 'top',
    position: 'right',
    close: true,
    stopOnFocus: true,
    style: {
      background: toastTheme[type] || toastTheme.info,
      borderRadius: '0.75rem',
      boxShadow: '0 1rem 2rem rgba(15, 23, 42, 0.18)',
      fontWeight: '700',
    },
  }).showToast();
}
