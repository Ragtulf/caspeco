import React from 'react'

import { ListedMemos } from './ListedMemos'
import { AddMemo } from './AddMemo'

export const Memos = () => {
  return (
    <div>
      <ListedMemos />
      <AddMemo />
    </div>
  )
}