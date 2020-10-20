import React from 'react'
import { useSelector } from 'react-redux'
import { Memo } from './Memo'

//Maps through exsisting memos

export const ListedMemos = () => {
  const allMemos = useSelector((store) => (store.memoList.memos))

  return (
    <div>
      {allMemos.map((memo) => (
        <Memo key={memo.id} id={memo.id} text={memo.text} />
      ))}
    </div>
  )
}