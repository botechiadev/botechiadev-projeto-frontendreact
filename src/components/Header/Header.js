import React from 'react'
import { ContainerHeader } from './styled'
import { FaCircleUser } from "react-icons/fa6";
export default function Header() {
  return (
    <ContainerHeader>
        <div>
            <h1>Site Name</h1>
        </div>
        <nav>
            <button>PAGE-1</button>
            <button>PAGE-2</button>
            <button>PAGE-3</button>

            <button><FaCircleUser/></button>

        </nav>
    </ContainerHeader>
  )
}
