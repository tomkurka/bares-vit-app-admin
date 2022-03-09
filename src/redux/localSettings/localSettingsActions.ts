import { Post } from "../posts/postsDefinitions"
import LocalSettingsActionsTypes from "./localSettingsTypes"

export interface LocalSettingsToggleNavbarActive {
  type: LocalSettingsActionsTypes.LOCAL_SETTINGS_TOGGLE_NAVBAR_ACTIVE
}

export interface LocalSettingsShowPopUpCard {
  type: LocalSettingsActionsTypes.LOCAL_SETTINGS_SHOW_POP_UP_CARD
  payload: LocalSettingsShowPopUpCardPayload
}
export interface LocalSettingsShowPopUpCardPayload {
  action: PopUpCardActions
}

export type PopUpCardActions = CardDeletePostType | CardLeaveEditPage | null

interface CardDeletePostType {
  type: "deletePost"
  post: Post
}

interface CardLeaveEditPage {
  type: "leaveEditPage"
  post: Post
}

export interface LocalSettingsHidePopUpCard {
  type: LocalSettingsActionsTypes.LOCAL_SETTINGS_HIDE_POP_UP_CARD
}

export type LocalSettingsActions =
  | LocalSettingsToggleNavbarActive
  | LocalSettingsShowPopUpCard
  | LocalSettingsHidePopUpCard
