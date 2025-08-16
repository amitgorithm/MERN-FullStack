import Child1 from './Child1'
import {UserContext} from './UserContext'

const MainData = () => {
  const user = "checking passthrough of data"

  return (
    <div>
      
      <h2> MainData File  </h2>
      <UserContext.Provider value = {user}>
      <Child1 />
      </UserContext.Provider>
      </div>
  )
}

export default MainData

// provide context 