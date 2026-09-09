export default function StudentsList({ estudiantes }) {
  return (
    <section>
      <h2>Ejercicio 2: Lista de Estudiantes</h2>
      <ul>
        {estudiantes.map((estudiante) => (
          <li key={estudiante.id}>
            {estudiante.nombre} - Nota: {estudiante.nota} - Estado:{' '}
            {estudiante.nota >= 60 ? 'Aprobado' : 'Reprobado'}
          </li>
        ))}
      </ul>
    </section>
  );
}
