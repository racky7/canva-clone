import { Button } from '@/components/ui/button'
import SidePanel from './side-panel'
import LayerRenderer from './layer-renderer'
import ToolBar from './tool-bar'

export default function DesignBuilder() {
  return (
    <div className="flex h-full">
      <SidePanel />
      <div className="flex h-full flex-1 flex-col bg-muted">
        <ToolBar />
        <div className="flex flex-1 items-center justify-center text-sm">
          <LayerRenderer layerId={'ROOT'} />
        </div>
      </div>
    </div>
  )
}
