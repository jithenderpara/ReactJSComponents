import "./App.css";
import Tabs from "./Components/Tabs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs
          isNumber={true}
          active={0}
          items={[
            { heading: "Account Details", text: "Account Setup" },
            { heading: "Profile Details", text: "Profile Setup" },
            { heading: "Credit Card details", text: "Belling Setup" },
          ]}
        />
      </header>
    </div>
  );
}

export default App;
