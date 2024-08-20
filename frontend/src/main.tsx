import { createRoot } from 'react-dom/client'
import Board from './components/Board'

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
    <App />
)
