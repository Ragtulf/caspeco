import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { memoList } from 'reducers/memoList'

export const AddMemo = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleAddMemo = event => {
    event.preventDefault()

    dispatch(memoList.actions.addMemoNote(inputValue))

    setInputValue('')
  }

  return (
    <div>
      <form onSubmit={handleAddMemo}>
        <input
          type='text'
          onChange={event => setInputValue(event.target.value)}
          value={inputValue} />
        <button
          type='submit'
          value='Add memo'
          disabled={!inputValue}
        >Add memo</button>
      </form>
    </div>
  )
}