import React from 'react'
import Error from '../../components/error/Error'

const NotFound = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
},[])

  return (
    <div>
        <Error/>
    </div>
  )
}

export default NotFound