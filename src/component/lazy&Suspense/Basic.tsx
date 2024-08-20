import React, { lazy, Suspense, useState } from 'react'
import Loading from './Loading';
// import PageOne from './PageOne';
// import PageTwo from './PageTwo';
const PageOne = lazy(() => import("./PageOne"));
const PageTwo = lazy(() => import("./PageTwo"));

// Lazy
// Syntax: const SomeComponent = lazy(load)
//  load:一個function且回傳promise物件或其他thenable物件
//  SomeComponent:回傳可以被非同步載入的react元件。

// 注意事項:
// 1. lazy 並不是 react hook，請不要在元件內部使用，在元件外使用，當作在引入一個 react 元件。
// 2. 引入的元件必須要是那個js檔default export的內容。
// 3. 改變成非同步引入之後會需要處理 pending、fulfilled 跟 rejected 時候畫面應該如何處理，
//    所以通常會搭配 react 提供的 Suspense 元件。


// Suspense Component
// Syntax:<Suspense fallback={}><children /></Suspense>
//  Suspense: 屬於一個標籤(tag),讓我們在元件在載入的過程中有預設的內容可以顯示。
//  children: 希望可以非同步載入的元件跟內容，如果元件還在解析的話會先顯示 fallback 的內容。
//  fallback: 一個備用的元件，讓我們在 children 還在載入的過程時可以保持正常的 render 流程，
//            Suspense元件會自動的在這兩個 props 中進行切換。

export default function Basic() {
    const [page, setPage] = useState<string>('');

    return (
        <div>
            <button onClick={() => setPage("PageOne")}>pageOne</button>
            <button onClick={() => setPage("PageTwo")}>pageOne</button>
            {
                {
                    "": <>Home</>,
                    PageOne: (<Suspense fallback={<Loading />}><PageOne /></Suspense>),
                    PageTwo: (<Suspense fallback={<Loading />}><PageTwo /></Suspense>),
                }[page]
            }
        </div>
    )
}
