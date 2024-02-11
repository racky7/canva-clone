import { Button } from '@/components/ui/button'
import SidePanel from './side-panel'

export default function DesignBuilder() {
  return (
    <div className='flex h-full'>
      <SidePanel />
      <div className='flex flex-col flex-1 h-full bg-muted'>
        <div className='w-full h-12 bg-white px-2 flex items-center shadow-sm'>
            <Button variant="ghost" className='px-2'>Position</Button>
        </div>
        <div className='flex flex-1 items-center justify-center text-sm'>Design Renderer</div>
      </div>
    </div>
  )
}
