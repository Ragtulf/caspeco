import React from 'react'
import { useDispatch } from 'react-redux'
import { memoList } from 'reducers/memoList'

export const Memo = ({ id, text}) => {
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(
      memoList.actions.removeMemo(id)
    )
  }

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleRemove}>x</button>
    </div>
  )
}