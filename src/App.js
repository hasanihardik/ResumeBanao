import FormContainer from "./Components/FormContainer";
import {useEffect} from "react"
function App() {
  useEffect(()=>{
    document.title="ResumeBanao"
  })
  return (
    <div className="App">
      <FormContainer />
    </div>
  );
}

export default App;
