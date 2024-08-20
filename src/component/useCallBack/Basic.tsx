import React, { useCallback, useMemo, useState } from 'react'
import { Item } from './Item';


// 說明: 在React中也很常將function當作props傳給子元件,React.Memo同樣不同處理,
//      一樣需要使用useMemo來解決,但這樣會導致可讀性很低,所以這時候就需要用到useCallBack。

// Syntax: const cachedFn = useCallback(fn, dependencies)
//  fn:一個希望React幫我們記住的function(不會執行),讓你在想使用的地方呼叫,可以接受和回傳任何參數。
//  dependencies: 一個array,需放fn裡面有使用到的外部變數,當外部變數變化的時候會建立新的function。
//                注意:這個dependencies並不是用來控制fn執行時間,而是用來改變fn,因為fn只是傳給cachedFn,並不是執行。
//  cachedFn: 初次render的時候放入你的Fn,re-render的時候透過dependencies裡的變數從新渲染function。

// 使用時機
//  將function當作props傳給子元件時Memo無法處理,useMemo不好看,就使用useCallBack。
//  當useCallback回傳的function是其他react hook的dependencies時。

// 與useMemo的差異(以下面為例)
// const memoizedValue = useMemo/useCallBack(() => {
//     console.log("Calculating value...");
//     return expensiveCalculation();
// }, [dependency]);
//  useMemo       "會"執行傳入的function,"只有"依賴項改變，這個函數才會被重新執行。
//  useCallback "不會"執行傳入的function,"即使"依賴項沒有改變，這個函數也會被重新執行。

// 注意:
// useCallback只是在依賴項改變時生成新的函數引用，但這個函數不會在依賴項改變時自動執行。
//  這是一種優化,避免不必要的渲染,所以傳入function當props是建議用useCallBack而不是用useMemo!!!
//  也就是所謂的函數記憶化(Memoization):記住（memoize）一個函數，並確保只有當依賴項發生變化時，這個函數才會被重新創建。
// dependencies並不是用來控制fn執行時間,而是用來改變fn,因為fn只是傳給cachedFn,並不是執行。


export default function Basic() {
    const [item1, setItem1] = useState<number>(0);
    const [item2, setItem2] = useState<number>(0);

    const handleItem1 = useCallback(() => {
        console.log(`handleItem1 --> item1:${item1}, item2:${item2}`)
        setItem1((prep) => prep + 1);
    }, [item1]);
    const handleItem2 = useCallback(() => {
        console.log(`handleItem2 --> item1:${item1}, item2:${item2}`)
        setItem2((prep) => prep + 1);
    }, [item2]);

    console.log("--------Basic render--------");

    return (
        <div>
            <Item name="item1" value={item1} onClick={handleItem1} /><br /><br />
            <button onClick={() => setItem1((prev) => prev + 1)}>Basic add item1</button>
            <Item name="item2" value={item2} onClick={handleItem2} />
        </div>
    )
}
