import { createSelector } from "reselect"
import { RootState } from "../rootReducer"

const selectLocalSettings = (state: RootState) => state.localSettings

export const selectLocalSettingsNavbarActive = createSelector(
  [selectLocalSettings],
  localSettings => localSettings.navbarActive
)

export const selectLocalSettingsPopUpCard = createSelector(
  [selectLocalSettings],
  localSettings => localSettings.popUpCard
)

export const selectLocalSettingsPopUpCardShow = createSelector(
  [selectLocalSettingsPopUpCard],
  card => card.show
)

export const selectLocalSettingsPopUpCardAction = createSelector(
  [selectLocalSettingsPopUpCard],
  card => card.action
)
