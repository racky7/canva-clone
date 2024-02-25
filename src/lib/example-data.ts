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
      children: ['9bff0ff0-caa4-442c-a103-2f5136213544', '9bff0ff0-caa4-442c-a103-2f5136213545'],
      parent: null,
    },
    '9bff0ff0-caa4-442c-a103-2f5136213544': {
      props: {
        type: 'text',
        text: '<p style="font-size: 64px;"><span style="font-weight: 700; font-style: normal; color: rgb(0, 0, 0); text-decoration: none;">Add a heading</span></p>',
        position: {
          x: 50,
          y: 100,
        },
        boxSize: {
          width: 536,
          height: 98,
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
    '9bff0ff0-caa4-442c-a103-2f5136213545': {
      props: {
        type: 'text',
        text: '<p style="font-size: 42px;">Another Untitled Text</p>',
        position: {
          x: 100,
          y: 300,
        },
        boxSize: {
          width: 536,
          height: 98,
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
