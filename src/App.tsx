import { createContext, useState } from 'react'
import Basic from './component/useContext & createContext/basic'
// import LightContext from './component/useContext & createContext/LightContext';

// 需將createContext報露, 才能給其他Component使用, export必須設定成全域變數
export const LightContext = createContext<boolean>(false);

function App() {
  const [isLight, setIsLight] = useState<boolean>(false);

  return (
    <>
      <div style={{ display: "flex" }}>
        <LightContext.Provider value={isLight}>
          <Basic />
        </LightContext.Provider>
      </div>
      <button onClick={() => { setIsLight(!isLight) }}>Toggle Light</button>
    </>
  )
}

export default App
