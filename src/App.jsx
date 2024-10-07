import { useEffect, useState } from 'react'
import colors from './components/colors'
import './App.css'
import shuffleArray from './components/shuffle'
import swap from './components/swap'

function App() {
  const [userArr, setUserArr] = useState([])
  const [colorsArr, setColorsArr] = useState([])
  const [select, setSelect] = useState([])
  const [len, setLen] = useState(5)
  const [countRight, setCountRight] = useState(0)

  function handleNewGame() {
    console.clear()
    const a = colors.slice(colors.length - len);
    console.log(a)
    const b = shuffleArray([...a])
    console.log(b)
    setColorsArr(() => b)
    setUserArr(() => a);
  }

  useEffect(() => {
    let c = 0
    console.clear()
    console.log(`useEffect`)
    for (let a = 0; a < len; a++) {
      console.log(userArr[a], colorsArr[a]);
      if (userArr[a] == colorsArr[a]) {
        c += 1
      }
    }
    setCountRight(c)
  }, [userArr, select])
  

  return (
    <>
      <div className="">Select : {select.length > 0 && select}</div>
      <div className="">You've : {countRight} Rights</div>
      {len - 2 == countRight &&
        <div className="">You're missing : 1 Pair</div>
      }
      {countRight === len && (
        <>
          Congrat! Game Over
          <button onClick={() => setLen((l) => l + 1)}>Level +</button>
          <button onClick={() => setLen((l) => l - 1)}>Level -</button>
        </>
      )}
      <hr />
      <button onClick={handleNewGame}>New Game</button>
      <hr />
      {countRight !== len && (
        <div
          className=""
          style={{
            display: `flex`,
            width: `80vw`,
            justifyContent: `space-evenly`,
          }}
        >
          {userArr?.map((c, i) => {
            return (
              <span
                key={c}
                style={{ outline: `1px solid red`, padding: `10px 30px` }}
                onClick={(e) => {
                  // console.log(typeof select);
                  // console.log(select.length);
                  // console.log(select[0])
                  if (select.length === 0) {
                    // console.log(`if`)
                    setSelect((w) => {
                      // console.log([...w, i]);
                      return [...w, i];
                    });
                  } else if (select.length === 1 && i == select[0]) {
                    // console.log(`elif`)
                    //   console.log(`deselect`)
                    setSelect([]);
                  } else if (select.length === 1 && i != select[0]) {
                    console.log(i, select[0]);
                    const n = swap(userArr, i, select[0]);
                    console.log(n);
                    setSelect([]);
                    setUserArr(() => n);
                  }
                }}
              >
                {/* {i + 1} */}
                {c}
              </span>
            );
          })}
        </div>
      )}
      {/* <hr />
      <div
        className=""
        style={{
          display: `flex`,
          width: `80vw`,
          justifyContent: `space-evenly`,
        }}
      >
        {colorsArr?.map((c, i) => {
          return (
            <span key={c} style={{ outline: `1px solid red` }}>
              {c}
            </span>
          );
        })}
      </div> */}
    </>
  );
}

export default App
