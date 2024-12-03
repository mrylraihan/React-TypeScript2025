import './App.css'
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';

function App() {
console.log("App")
  return (
    <>
      <h1>Forms With React Typescript</h1>
        <div>
          {/* Form Data with New Form Data no State */}
          <Form1/>
          {/* State and onChange */}
          <Form2/>
          {/* with Refs */}
          <Form3/>
        </div>
    </>
  )
}

export default App