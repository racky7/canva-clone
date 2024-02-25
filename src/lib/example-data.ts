import { LayerConfig, LayerType } from './layer'

type DesignData = {
  _id: string
  name: string
  layers: Record<string, LayerConfig>
}

export const data: DesignData = {
  _id: '65686b17593a9c18ecca7ed7',
  name: 'Untitled Design',
  layers: {
    ROOT: {
      props: {
        type: 'root',
        position: {
          x: 0,
          y: 0,
        },
        boxSize: {
          width: 600,
          height: 600,
        },
      },
      children: ['9bff0ff0-caa4-442c-a103-2f5136213544'],
      parent: null,
    },
    '9bff0ff0-caa4-442c-a103-2f5136213544': {
      props: {
        type: 'text',
        text: '<p style="font-size: 64px; line-height: 1.4;"><span style="font-weight: 700; font-style: normal; color: rgb(0, 0, 0); text-decoration: none;">Add a heading</span></p>',
        position: {
          x: 50,
          y: 100,
        },
        boxSize: {
          width: 449,
          height: 89.59375,
          x: 50,
          y: 50,
        },
        rotate: 0,
        opacity: 100,
        fontSize: 42,
      },
      children: [],
      parent: 'ROOT',
    },
  },
}
