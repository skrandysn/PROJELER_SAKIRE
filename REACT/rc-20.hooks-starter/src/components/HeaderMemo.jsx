import React, { memo } from 'react'
//! 1. yöntem
// const HeaderMemo = memo( ({user}) => {
//   console.log("Render => HeaderMemo componenti");
//   return (
//     <div className='text-center text-success'>HeaderMemo Componenti: {user}
//     </div>
//   )
// })

// export default HeaderMemo;

//! 2. yöntem
const HeaderMemo =  ({count}) => {
  console.log("Render => HeaderMemo componenti");
  return (
    <div className='text-center text-success'>HeaderMemo Componenti: {count }
    </div>
  )
}

export default memo (HeaderMemo);