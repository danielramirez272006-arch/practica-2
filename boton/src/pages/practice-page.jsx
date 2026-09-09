import ThemeSwitch from '../components/theme-switch';
import StudentsList from '../components/students-list';
import ApprovedList from '../components/approved-list';
import FilterButtons from '../components/filter-buttons';
import FavoritesCart from '../components/favorites-cart';

const ESTUDIANTES = [
  { id: 1, nombre: 'Ana García', nota: 85 },
  { id: 2, nombre: 'Carlos López', nota: 52 },
  { id: 3, nombre: 'María Rodríguez', nota: 90 },
  { id: 4, nombre: 'Juan Pérez', nota: 58 },
  { id: 5, nombre: 'Lucía Fernández', nota: 74 },
];

export default function PracticePage() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Práctica de Laboratorio</h1>
      <ThemeSwitch />
      <hr />
      <StudentsList estudiantes={ESTUDIANTES} />
      <hr />
      <ApprovedList estudiantes={ESTUDIANTES} />
      <hr />
      <FilterButtons estudiantes={ESTUDIANTES} />
      <hr />
      <FavoritesCart />
    </main>
  );
}
