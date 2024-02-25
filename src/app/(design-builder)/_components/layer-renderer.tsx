'use client'

import { data } from '@/lib/example-data'
import { P, match } from 'ts-pattern'
import TextRenderer from './text-renderer'

type LayerRendererProps = {
  layerId: string
}

export default function LayerRenderer({ layerId }: LayerRendererProps) {
  const element = data.layers[layerId]
  return match(element)
    .returnType<React.ReactNode>()
    .with({ props: { type: 'root' } }, ({ props: { boxSize } }) => {
      return (
        <div
          className="bg-white"
          style={{
            width: boxSize.width,
            height: boxSize.height,
          }}
        >
          {element.children.map((child) => (
            <LayerRenderer key={child} layerId={child} />
          ))}
        </div>
      )
    })
    .with({ props: { type: 'text' } }, () => {
      return <TextRenderer key={layerId} id={layerId} />
    })
    .with(P._, () => null)
    .exhaustive()
}
