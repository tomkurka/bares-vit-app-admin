import { LocalSettingsActions, PopUpCardActions } from "./localSettingsActions"
import LocalSettingsActionsTypes from "./localSettingsTypes"

interface InitialState {
  navbarActive: boolean
  popUpCard: {
    show: boolean
    action: PopUpCardActions
  }
}

const initialState: InitialState = {
  navbarActive: false,
  popUpCard: { show: false, action: null },
}

const localSettingsReducer = (state = initialState, action: LocalSettingsActions): InitialState => {
  switch (action.type) {
    case LocalSettingsActionsTypes.LOCAL_SETTINGS_TOGGLE_NAVBAR_ACTIVE:
      return { ...state, navbarActive: !state.navbarActive }
    case LocalSettingsActionsTypes.LOCAL_SETTINGS_SHOW_POP_UP_CARD:
      return { ...state, popUpCard: { show: true, action: action.payload.action } }
    case LocalSettingsActionsTypes.LOCAL_SETTINGS_HIDE_POP_UP_CARD:
      return { ...state, popUpCard: { show: false, action: null } }
    default:
      return state
  }
}

export default localSettingsReducer
