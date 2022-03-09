import {
  LocalSettingsHidePopUpCard,
  LocalSettingsShowPopUpCard,
  LocalSettingsShowPopUpCardPayload,
  LocalSettingsToggleNavbarActive,
} from "./localSettingsActions"
import LocalSettingsActionsTypes from "./localSettingsTypes"

export const localSettingsToggleNavbarActive = (): LocalSettingsToggleNavbarActive => ({
  type: LocalSettingsActionsTypes.LOCAL_SETTINGS_TOGGLE_NAVBAR_ACTIVE,
})

export const localSettingsShowPopUpCard = (
  payload: LocalSettingsShowPopUpCardPayload
): LocalSettingsShowPopUpCard => ({
  type: LocalSettingsActionsTypes.LOCAL_SETTINGS_SHOW_POP_UP_CARD,
  payload,
})

export const localSettingsHidePopUpCard = (): LocalSettingsHidePopUpCard => ({
  type: LocalSettingsActionsTypes.LOCAL_SETTINGS_HIDE_POP_UP_CARD,
})
