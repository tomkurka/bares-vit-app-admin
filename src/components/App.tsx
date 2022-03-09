import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { auth, firestore } from "../firebase/firebaseUtils"
import { authInitialProcessCompleted, authSignInSuccess } from "../redux/auth/authActionsCreators"
import { CurrentUser } from "../redux/auth/authDefinitions"
import { selectAuthInitialProcessCompleted } from "../redux/auth/authSelectors"
import { postsFetchPostsStart } from "../redux/posts/postsActionsCreators"
import AppRoutes from "../routes/AppRoutes"
import LoadingAnimation from "./animations/loadingAnimation/LoadingAnimation"
import LoadingAnimationOnEvent from "./animations/loadingAnimation/LoadingAnimationOnEvent"
import CustomPopUpCard from "./custom/customPopUpCard/CustomPopUpCard"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user && typeof user.email === "string") {
        const userProfileRef = firestore.doc(`users/${user.uid}`)
        const snapshot = await userProfileRef.get()

        // @ts-ignore
        const userProfile: CurrentUser = snapshot.data()
        dispatch(authSignInSuccess({ currentUser: userProfile }))
      }
      dispatch(authInitialProcessCompleted())
      dispatch(postsFetchPostsStart())
    })
    // eslint-disable-next-line
  }, [])

  const processCompleted = useSelector(selectAuthInitialProcessCompleted)
  if (!processCompleted) return <LoadingAnimation />

  return (
    <div>
      <LoadingAnimationOnEvent />
      <CustomPopUpCard />
      <AppRoutes />
    </div>
  )
}

export default App
