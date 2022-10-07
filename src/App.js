/**
 * @type { HTMLCanvasElement }
 */

import { useEffect, useRef, useState } from "react";
import { dummyData } from "./dummyData";

function App() {
  const canvas = useRef(null);
  const save = useRef(null);
  let ctx;

  const test = () => {
    const height = drawText();
    canvas.current.height = height + 100;
    drawText();
  };

  const drawText = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);
    ctx.fillStyle = "black";
    let heightCount = 0;
    let padding = 0;
    const arrayedBoardName = arrayText(48, dummyData.name, padding);
    arrayedBoardName.forEach((text) => {
      heightCount += 50;
      ctx.font = "48px serif";
      ctx.textAlign = "center";
      ctx.fillText(text, canvas.current.width / 2, heightCount);
    });
    dummyData.categories.forEach((category) => {
      heightCount += 30;
      const arrayedCategoryName = arrayText(30, category.name, padding);
      padding = 40;
      arrayedCategoryName.forEach((text) => {
        ctx.font = "30px serif";
        ctx.textAlign = "start";
        heightCount += 30;
        ctx.fillText(text, padding, heightCount);
      });

      padding = 60;
      category.tasks.forEach((task) => {
        heightCount += 20;
        const arrayedTaskName = arrayText(20, task.name, padding);
        arrayedTaskName.forEach((text) => {
          ctx.font = "20px serif";
          ctx.textAlign = "start";
          heightCount += 20;
          ctx.fillText(text, padding, heightCount);
        });
      });
    });
    return heightCount;
  };

  const arrayText = (px, text, padding) => {
    ctx.font = `${px}px serif`;
    let result = [""];
    let row = 0;
    if (ctx.measureText(text).width + padding + 50 >= canvas.current.width) {
      [...text].forEach((t, i) => {
        if (
          ctx.measureText(result[row] + " ").width + padding + 50 <
          canvas.current.width
        ) {
          result[row] += t;
        } else {
          row++;
          result.push(t);
        }
      });
      return result;
    } else {
      return [text];
    }
  };

  useEffect(() => {
    ctx = canvas.current.getContext("2d");
    canvas.current.height = 600;
    canvas.current.width = 500;

    test();
    save.current.href = canvas.current.toDataURL("image/png");
    save.current.download = "image/png";
  }, []);

  return (
    <div className="m-5">
      <canvas
        ref={canvas}
        className="border"
        width={"500px"}
        height={`600px`}
      ></canvas>
      <a ref={save}>
        <button className="btn btn-primary">保存</button>
      </a>
      <button className="btn btn-secondary" onClick={test}>
        テスト
      </button>
    </div>
  );
}

export default App;
