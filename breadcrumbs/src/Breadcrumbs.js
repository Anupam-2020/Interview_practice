import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Breadcrumbs = () => {
    
    const {pathname} = useLocation();
    const pathName = pathname.split("/").filter(x => x);

  return (
    <div>
        {pathName.length > 0 && <Link to="/">Home</Link>}
        {pathName.map((name, index) => {
            const isLast = index === pathName.length - 1;
            return (
                <span key={index}>
                    {isLast ? (
                        <span> > {name}</span>
                    ) : (
                        <Link to="/products"> > {name}</Link>
                    )}
                </span>
            )
        })}
    </div>
  )
}

export default Breadcrumbs