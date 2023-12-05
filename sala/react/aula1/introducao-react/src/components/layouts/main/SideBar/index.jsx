import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='w-1/6 h-full bg-gradient-to-b from-gray-100 to-gray-200'>
        <ul className="px-4 flex flex-col gap-3">
                <li className="text-lg font-semibold"><Link to="/">Home</Link></li>
                <li className="text-lg font-semibold"><Link to="/usuario">usuario</Link></li>
                <li className="text-lg font-semibold"><Link to="/produtos">Produtos</Link></li>
                <li className="text-lg font-semibold"><Link to="/clientes">Clientes</Link></li>
            </ul>
    </div>
  )
}

export default SideBar