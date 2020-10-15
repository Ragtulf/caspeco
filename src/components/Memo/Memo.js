import React from 'react'
import styled from 'styled-components/macro'
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
    <MemoNote>
      <MemoText>{text}</MemoText>
      <XButton onClick={handleRemove}>
        <XIcon src='/X.svg' alt='delete memo' />
      </XButton>
    </MemoNote>
  )
}

const MemoNote = styled.div`
  background-color: #ffa6da;
  padding: 30px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
`

const MemoText = styled.p`
  font-size: 1.3em;
`

const XButton = styled.button`
  background-color: #ffa6da;
  border: none;
  margin: 5px;
  width: none;
  height: none;
`

const XIcon = styled.img`
  width: 10px;
  padding: 5px;
  background-color: #fc49b2;

  &:hover {
    background-color: #e3148e;
  }
`