import { useState } from 'react';

export default function FilterButtons({ estudiantes }) {
  const [verModo, setVerModo] = useState('todos');

  const estudiantesFiltrados = estudiantes.filter((estudiante) =>
    verModo === 'aprobados'
      ? estudiante.nota >= 60
      : verModo === 'reprobados'
      ? estudiante.nota < 60
      : true
  );

  return (
    <section>
      <h2>Ejercicio 4: Filtrar Estudiantes</h2>
      <div>
        <button
          onClick={() => setVerModo('todos')}
          style={{
            fontWeight: verModo === 'todos' ? 'bold' : 'normal',
            backgroundColor: verModo === 'todos' ? '#333' : '#eee',
            color: verModo === 'todos' ? '#fff' : '#000',
          }}
        >
          Todos
        </button>
        <button
          onClick={() => setVerModo('aprobados')}
          style={{
            fontWeight: verModo === 'aprobados' ? 'bold' : 'normal',
            backgroundColor: verModo === 'aprobados' ? '#333' : '#eee',
            color: verModo === 'aprobados' ? '#fff' : '#000',
          }}
        >
          Aprobados
        </button>
        <button
          onClick={() => setVerModo('reprobados')}
          style={{
            fontWeight: verModo === 'reprobados' ? 'bold' : 'normal',
            backgroundColor: verModo === 'reprobados' ? '#333' : '#eee',
            color: verModo === 'reprobados' ? '#fff' : '#000',
          }}
        >
          Reprobados
        </button>
      </div>

      {estudiantesFiltrados.length === 0 ? (
        <p>Sin resultados</p>
      ) : (
        <ul>
          {estudiantesFiltrados.map((estudiante) => (
            <li key={estudiante.id}>
              {estudiante.nombre} - Nota: {estudiante.nota} (
              {estudiante.nota >= 60 ? 'Aprobado' : 'Reprobado'})
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
