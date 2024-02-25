import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function ToolBar() {
  return (
    <div className="flex h-12 w-full items-center bg-white px-2 shadow-sm">
      <Button
        variant="ghost"
        // className={cn('px-3 text-lg', editor.isActive('bold') ? 'bg-background/90' : null)}
        // onClick={() => editor.chain().focus().toggleBold().run()}
        // disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        <strong>B</strong>
      </Button>
      <Button variant="ghost" className="px-2">
        Position
      </Button>
    </div>
  )
}
