import React from 'react'

const SideBar = () => {
  return (
    <div className='w-1/6 h-full bg-gradient-to-b from-gray-100 to-gray-200'>
        <ul className="px-4 flex flex-col gap-3">
                <li className="text-lg font-semibold">Home</li>
                <li className="text-lg font-semibold">Produtos</li>
                <li className="text-lg font-semibold">Clientes</li>
            </ul>
    </div>
  )
}

export default SideBar