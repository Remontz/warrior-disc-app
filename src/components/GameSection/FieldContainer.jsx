import React, { useRef, useState } from 'react';
import '../../styles/field.css'; // Still pulls from global styles folder
import FieldCanvas from './FieldCanvas';

export default function FieldContainer() {
  const containerRef = useRef(null);
  const [zoom, setZoom] = useState(1);

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = 0.1;
    const delta = e.deltaY > 0 ? -zoomFactor : zoomFactor;
    const newZoom = Math.min(2.5, Math.max(0.5, zoom + delta));
    setZoom(newZoom);
  };

  return (
    <div
      className="field-wrapper"
      ref={containerRef}
      onWheel={handleWheel}
    >
      <div
        className="field-viewport"
        style={{ transform: `scale(${zoom})` }}
      >
        <FieldCanvas />
      </div>
    </div>
  );
}
