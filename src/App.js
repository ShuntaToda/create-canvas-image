import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const canvas = useRef(null);
  const [ctx, setCtx] = useState();

  const test = () => {
    // console.log(ctx);
    ctx.font = "48px serif";
    ctx.fillText("Hello world", 10, 50);
  };

  useEffect(() => {
    setCtx(canvas.current.getContext("2d"));
  }, []);
  return (
    <div className="m-5">
      <canvas ref={canvas}></canvas>
      <a download={""}>
        <button className="btn btn-primary">保存</button>
      </a>
      <button className="btn btn-secondary" onClick={test}>
        テスト
      </button>
    </div>
  );
}

export default App;
