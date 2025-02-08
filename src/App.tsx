"use client";

import { Application, Assets, Sprite } from "pixi.js";

async function App() {
  const app = new Application();
  await app.init({ background: "#1099bb", resizeTo: window });

  // Append the application canvas to the document body
  document.body.appendChild(app.canvas);

  // Load the bunny texture
  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");

  // Create a bunny Sprite
  const bunny = new Sprite(texture);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
