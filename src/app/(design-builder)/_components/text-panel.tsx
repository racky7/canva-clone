import { Button } from '@/components/ui/button'

export default function TextPanel() {
  return (
    <div className="h-full w-full p-4">
      <div className="space-y-2">
        <p className="text-sm text-secondary">Default text styles</p>
        <Button size="lg" variant="ghost" className='w-full text-3xl bg-white/10 text-secondary hover:bg-white/15 hover:text-secondary h-14 justify-start px-4'>Add a heading</Button>
        <Button variant="ghost" className='w-full bg-white/10 text-secondary hover:bg-white/15 hover:text-secondary h-14 justify-start px-4 text-lg'>Add a subheading</Button>
        <Button variant="ghost" className='w-full bg-white/10 text-secondary hover:bg-white/15 hover:text-secondary h-14 justify-start px-4 text-xs font-normal'>Add a little bit of body text</Button>
      </div>
    </div>
  )
}
