import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// 1. Create a initialState
const initialState = {
  fromLenguage: 'auto',
  toLenguage: 'en',
  fromText: ' ',
  result: ' ',
  loading: false
}

// 2. Create a reducer 
function reducer (state, action) {
  const {type, payload} = action

  if (type === 'INTERCHANGE_LENGUAGES') {
    return {
      ...state,
      fromLanguage: state.toLenguge,
      toLenguage: state.fromLenguage
    }
  }

  if (type === 'SET_FROM_LENGUAGES') {
    return {
      ...state,
      fromLanguage: payload
    }
  }

  if (type === 'SET_TO_LENGUAGES') { 
    return {
      ...state,
      toLenguage: payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true, 
      fromText: payload
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false, 
      result: payload
    }
  }

  return state
}
function App() {
  // 3. Usar el hook useReducer
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <h1>Google Translate</h1>
    </div>
  )
}

export default App
