import './App.css';
import { DataExample } from './components/DataExample';

function App() {
  return (
    <div>
      <DataExample endpoint="data" title="Успешное получение данных" />
      <DataExample endpoint="error" title="Получение 500 ошибки" />
      <DataExample endpoint="loading" title="Индикатор загрузки" />
    </div>
  );
}

export default App;