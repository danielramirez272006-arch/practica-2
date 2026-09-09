export default function ApprovedList({ estudiantes }) {
  const aprobados = estudiantes.filter((estudiante) => estudiante.nota >= 60);

  return (
    <section>
      <h2>Ejercicio 3: Estudiantes Aprobados</h2>
      <p>Total de aprobados: {aprobados.length}</p>
      <ul>
        {aprobados.map((estudiante) => (
          <li key={estudiante.id}>
            {estudiante.nombre} - Nota: {estudiante.nota}
          </li>
        ))}
      </ul>
    </section>
  );
}
