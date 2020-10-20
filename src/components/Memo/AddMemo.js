import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import { memoList } from 'reducers/memoList'
import { Button } from 'lib/Button'

//Form to add a memo

export const AddMemo = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  //Sends memo text to Redux and resets the input
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
            placeholder='Type your memo!' />
        </MemoNote>
        <Button
          buttonType='submit'
          buttonName='Add memo'
          isDisabled={!inputValue} />
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

  @media (min-width: 500px) {
    padding: 20px;
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

  @media (min-width: 500px) {
    font-size: 1.2em;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`