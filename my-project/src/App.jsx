import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <Card
        name={"Radha"}
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2s-MyfBM-HsLtj64kKbT6xBp62MI-La4FA6omBlBv0g&s=10"
        }
      />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;


