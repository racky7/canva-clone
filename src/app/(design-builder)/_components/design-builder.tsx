import { Button } from '@/components/ui/button'
import SidePanel from './side-panel'
import LayerRenderer from './layer-renderer'

export default function DesignBuilder() {
  return (
    <div className="flex h-full">
      <SidePanel />
      <div className="flex h-full flex-1 flex-col bg-muted">
        <div className="flex h-12 w-full items-center bg-white px-2 shadow-sm">
          <Button variant="ghost" className="px-2">
            Position
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-center text-sm">
          <LayerRenderer layerId={'ROOT'} />
        </div>
      </div>
    </div>
  )
}
