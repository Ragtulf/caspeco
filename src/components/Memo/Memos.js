import React from 'react'
import styled from 'styled-components/macro'

import { ListedMemos } from './ListedMemos'
import { AddMemo } from './AddMemo'

//Shows exsisting memos and a form to add a memo

export const Memos = () => {
  return (
    <WidgetDiv>
      <ListedMemos />
      <AddMemo />
    </WidgetDiv>
  )
}

const WidgetDiv = styled.div`
  margin: 10px;
  background: rgba(255, 255, 255, 0.5);
  border: 4px solid black;

  @media (min-width: 500px) {
    width: 50%;
  }
`