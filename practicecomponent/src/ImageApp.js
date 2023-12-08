import Image from "./components/Image/Image";

function App() {
  return (
    <div className="App">
      {Array.from(new Array(20), (_, k) => k).map((i) => (
        <Image
          lazy={true}
          threshold={0.1}
          placeholder={"https://via.placeholder.com/200"}
          src={`https://picsum.photos/200?${i}`}
          block={true}
          width={400}
          height={400}
          alt={"image"}
          mode={"cover"}
          key={i}
        />
      ))}
    </div>
  );
}

export default App;
