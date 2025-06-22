import React from 'react';

export default function OverlayControls() {
  return (
    <div style={{
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: '#333',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      color: '#fff',
      zIndex: 10
    }}>
      <button>Toggle Hex Grid</button>
      <button>Toggle Team Sheet</button>
    </div>
  );
}
