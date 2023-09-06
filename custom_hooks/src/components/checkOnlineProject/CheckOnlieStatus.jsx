import React from 'react'
import useOnlineStatus from '../../utils/useOnlineStatus'

function CheckOnline() {
    const online = useOnlineStatus();
  return (
    <div>
        <p>If it is green that means online else offline</p>
        <p>A - {online ? "🟢" : "🔴"}</p>
    </div>
  )
}

export default CheckOnline;