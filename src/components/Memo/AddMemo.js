import React, { useState } from 'react'
import styled from 'styled-components/macro'
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
      <StyledForm onSubmit={handleAddMemo}>
        <MemoNote>
          <StyledInput
            type='input'
            onChange={event => setInputValue(event.target.value)}
            value={inputValue}
            placeholder='Type your memo here!' />
        </MemoNote>
        <AddButton
          type='submit'
          value='Add memo'
          disabled={!inputValue}
        >Add memo</AddButton>
      </StyledForm>
    </div>
  )
}

const MemoNote = styled.div`
  background-color: #fc49b2;
  padding: 30px;
  margin: 10px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #fca103;
  }
`
const StyledInput = styled.input`
  font-family: 'Karla', sans-serif;
  font-size: 1.4em;
  background-color: transparent;
  color: #fff;
  border: none;
  width: 100%;
  outline: 0;

  &::placeholder {
    font-family: 'Karla', sans-serif;
    color: #fff;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const AddButton = styled.button`
  width: 150px;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  margin: 10px 10px 20px 10px;
  padding: 8px;
  border: none;
  align-self: center;
  color: #fff;
  background: #8226de;

  &:hover {
    background-color: #fca103;
  }
`