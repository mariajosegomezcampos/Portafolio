import { useTheme } from '../context/ThemeContext'; // Importa el hook que creamos

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme(); // Obtenemos el estado global

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 transition-colors"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}