import React from "react"
import { useDispatch } from "react-redux"
import { ICONMenuOutline } from "../../../icons/icons"
import { localSettingsToggleNavbarActive } from "../../../redux/localSettings/localSettingsActionsCreators"

interface Props {
  className: string
}

const NavbarActiveToggle: React.FC<Props> = ({ className }) => {
  const dispatch = useDispatch()

  return (
    <ICONMenuOutline
      className={className}
      onClick={() => dispatch(localSettingsToggleNavbarActive())}
    />
  )
}

export default NavbarActiveToggle
