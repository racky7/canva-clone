'use client'

import { LayerConfig, LayerType } from '@/lib/layer'
import { P, match } from 'ts-pattern'
import { TypeIcon } from 'lucide-react'
import { useState } from 'react'
import { z } from 'zod'
import TextPanel from './text-panel'
import { cn } from '@/lib/utils'

const SIDEBAR_ITEMS: LayerType[] = ['text']

const SIDEBAR_CONFIG: Record<string, Partial<LayerConfig>> = {
  text: {
    type: 'text',
    name: 'Text',
    icon: <TypeIcon className="h-3 w-3" />,
  },
}

export default function SidePanel() {
  const [active, setActive] = useState<LayerType>('text')

  return (
    <div className="flex h-full">
      <div className="flex h-full w-[72px] flex-col items-center text-secondary">
        {SIDEBAR_ITEMS.map((item, idx) => (
          <button
            key={item}
            className={cn(
              'flex h-[72px] w-full flex-col items-center justify-center py-1 hover:opacity-100',
              active === SIDEBAR_CONFIG[item].type ? 'bg-black/85' : 'opacity-60',
            )}
          >
            <TypeIcon className="h-6 w-6" />
            <span className="text-[10px]">{SIDEBAR_CONFIG[item].name}</span>
          </button>
        ))}
        <div className="w-full flex-1 bg-black/95"></div>
      </div>
      <div className="h-full w-[360px] bg-black/85">
        {match(active)
          .returnType<React.ReactNode>()
          .with('text', () => <TextPanel />)
          .with(P._, () => null)
          .exhaustive()}
      </div>
    </div>
  )
}
