import { useState } from 'react';

export default function ThemeSwitch() {
  const [oscuro, setOscuro] = useState(false);

  return (
    <section
      style={{
        backgroundColor: oscuro ? '#1e1e1e' : '#f4f4f4',
        color: oscuro ? '#ffffff' : '#111111',
        padding: '20px',
        borderRadius: '8px',
        border: oscuro ? '1px solid #333' : '1px solid #ddd',
        margin: '15px 0',
        transition: 'all 0.3s ease',
      }}
    >
      <h2 style={{ color: oscuro ? '#ffffff' : '#111111' }}>
        Ejercicio 1: Theme Switch
      </h2>
      <button
        onClick={() => setOscuro(!oscuro)}
        style={{
          padding: '8px 16px',
          cursor: 'pointer',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: oscuro ? '#ffffff' : '#222222',
          color: oscuro ? '#111111' : '#ffffff',
          fontWeight: 'bold',
        }}
      >
        {oscuro ? 'Modo claro' : 'Modo oscuro'}
      </button>
      <p style={{ marginTop: '10px' }}>
        Tema actual: {oscuro ? 'Oscuro' : 'Claro'}
      </p>
    </section>
  );
}
