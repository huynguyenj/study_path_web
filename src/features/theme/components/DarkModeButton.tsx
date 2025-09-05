import { saveTheme } from '@/features/theme/redux-slice/theme-slice'
import { useAppDispatch, useAppSelector } from '@/hooks/redux/redux-hooks'
import { DarkModeIcon, SunnyIcon } from '@/assets/icons/mui-icon'
import { THEME_ICON_SIZE } from '@/const/icon-size/mui-icon'

export default function DarkModeButton() {
  const theme = useAppSelector((state) => state.theme.value)
  const dispatch = useAppDispatch()
  const handleChangeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(saveTheme(e.target.checked ? 'dark' : 'light'))
  }
  return (
      <label htmlFor='check' className={`relative h-8 w-8 px-8 py-1.5 lg:h-8 lg:w-10 ${theme === 'dark' ? 'bg-white' : 'bg-black'} rounded-2xl cursor-pointer`}>
            <input checked={theme === 'dark'} type="checkbox" id='check' className='sr-only peer' onChange={handleChangeTheme} />
            <span className='bg-gray-500 absolute inset-y-1 w-[40%] rounded-full peer-checked:translate-x-[0%] -translate-x-[100%] transition-all duration-300'>
                  <div className='w-full h-full flex items-center justify-center'>
                        {theme === 'dark'? <DarkModeIcon sx={{ color: 'white', fontSize: THEME_ICON_SIZE }}/> : <SunnyIcon sx={{ color: 'white', fontSize: THEME_ICON_SIZE }}/>}
                  </div>
            </span>
    </label>
  )
}
