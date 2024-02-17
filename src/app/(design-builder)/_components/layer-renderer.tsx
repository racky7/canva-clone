'use client'

import { data } from '@/lib/example-data'
import invariant from 'tiny-invariant'
import { P, match } from 'ts-pattern'
import TextEditor from './text-editor'

type LayerRendererProps = {
  layerId: string
}

export default function LayerRenderer({ layerId }: LayerRendererProps) {
  return match(data.layers[layerId].type)
    .returnType<React.ReactNode>()
    .with('root', () => {
      const element = data.layers[layerId]
      invariant(element.type === 'root', 'element must be root')

      return (
        <div
          className="relative bg-white"
          style={{
            width: element.props.boxSize.width,
            height: element.props.boxSize.height,
          }}
        >
          {element.children.map((child) => (
            <LayerRenderer key={child} layerId={child} />
          ))}
        </div>
      )
    })
    .with('text', () => {
      const element = data.layers[layerId]
      invariant(element.props.type === 'text', 'element must be text')

      return (
        <div
          className="absolute cursor-default"
          style={{
            maxWidth: element.props.boxSize.width,
            top: element.props.position.y,
            left: element.props.position.x,
          }}
        >
          <TextEditor value={element.props.text} />
        </div>
      )
    })
    .with(P._, () => null)
    .exhaustive()
}
