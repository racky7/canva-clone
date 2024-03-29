import { z } from 'zod'

export const layerType = z.enum(['root', 'shape', 'text', 'image'])
export type LayerType = z.infer<typeof layerType>

const positionConfig = z.object({
  x: z.number(),
  y: z.number(),
})

const boxConfig = z.object({
  width: z.number(),
  height: z.number(),
  x: z.number().optional(),
  y: z.number().optional(),
})

export const rootLayerProps = z.object({
  type: z.literal('root'),
  position: positionConfig,
  boxSize: boxConfig,
})

export const textLayerProps = z.object({
  type: z.literal('text'),
  text: z.string(),
  position: positionConfig,
  boxSize: boxConfig,
  fontSize: z.number(),
  rotate: z.number(),
  opacity: z.number(),
})

export const layerProps = z.discriminatedUnion('type', [rootLayerProps, textLayerProps])

export type LayerProps = z.infer<typeof layerProps>

export type LayerConfig = {
  icon?: React.ReactElement
  name?: string
  props: LayerProps
  children: string[]
  parent: string | null
}
