import {
  GlobeAltIcon,
  BoltIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <LightBulbIcon className='h-10 w-10 rotate-[10deg]' />
      <p className='text-[44px]'>TankSlim</p>
    </div>
  )
}
