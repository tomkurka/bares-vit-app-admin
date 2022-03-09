import { createSelector } from "reselect"
import { RootState } from "../rootReducer"

const selectPostEditState = (state: RootState) => state.postEdit

export const selectPostEdit = createSelector([selectPostEditState], state => state.post)

export const selectPostEditTags = createSelector([selectPostEdit], state => state?.tags)

export const selectPostEditContent = createSelector([selectPostEdit], state => state?.content)

export const selectPostEditIsSave = createSelector([selectPostEditState], state => state.isSave)

export const selectPostEditIsLoading = createSelector(
  [selectPostEditState],
  state => state.isLoading
)
