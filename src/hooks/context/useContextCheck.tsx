import { useContext, type Context } from 'react'

type UseContextCheckProps<T> = {
  context: Context<T | undefined>
  contextName: string
}

export default function useContextCheck<T>({ context, contextName }: UseContextCheckProps<T>) {
  const value = useContext(context)
  if (!value) throw new Error(`Please wrap this context ${contextName} with the provider`)
  return value
}
