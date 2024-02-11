'use client'

import { Button } from '@/components/ui/button'
import { MenuIcon, ShareIcon } from 'lucide-react'

export default function Navbar() {
  return (
    <div className="flex h-12 md:h-14 w-full items-center justify-between bg-gradient-to-r from-cyan-500 to-purple-700 text-secondary">
      <div className="flex space-x-2 p-2 ml-2">
        <Button
          icon={<MenuIcon />}
          className="hover:bg-background/20 hover:text-white"
          size="icon"
          type="button"
          variant="ghost"
          onClick={() => {}}
        />
        <Button variant="ghost" className="hover:bg-background/20 hover:text-secondary">
          Home
        </Button>
      </div>
      <div className='p-2'>
        <Button
          icon={<ShareIcon />}
          className="space-x-2 py-5"
          variant="secondary"
          onClick={() => {}}
        >
          Share
        </Button>
      </div>
    </div>
  )
}
