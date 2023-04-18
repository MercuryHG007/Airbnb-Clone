'use client'

import { useEffect, useState } from 'react'

interface ClientOnlyProps {
    children: React.ReactNode
}

{/* 
    ClientOnly FUNCTION SOLVES THE 
    PURPOSE OF ELEMINATING PROBLEMS 
    OF HYDRATION CAUSED BY CLIENT 
    COMPONENTS.
*/}

const ClientOnly:React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if(!hasMounted){
        return null
    }

  return (
    <>
        {children}
    </>
  )
}

export default ClientOnly