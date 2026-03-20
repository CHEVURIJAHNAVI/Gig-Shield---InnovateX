import React, { useEffect } from 'react';

function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bg = type === 'success' ? '#1a3d1a' : type === 'error' ? '#3d0f1a' : '#3d2f0a';
  const border = type === 'success' ? '#39d353' : type === 'error' ? '#f85149' : '#e3b341';
  const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : '⚠️';

  return (
    <div className="toast" style={{ backgroundColor: bg, borderColor: border }}>
      <span style={{ marginRight: '8px' }}>{icon}</span> {message}
    </div>
  );
}

export default Toast;
