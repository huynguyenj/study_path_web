import { InstagramIcon } from '@/assets/icons/mui-icon'
import { Input } from '@/components/ui/input/Input'
import { useRef } from 'react'

export default function HomePage() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      Home
      <div className="w-50 flex items-center">
        <Input name='login' ref={inputRef} type='text' variant="filled" size="md" placeHolder="email">
          <InstagramIcon/>
        </Input>
      </div>
    </div>
  )
}
