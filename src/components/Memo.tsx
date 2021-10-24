import { memo, ReactNode } from "react"

export type MemoProps = {
  deps?: any[]
  children?: ReactNode | ReactNode[]
}

const Children = (props: MemoProps) => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const { deps = [], children } = props

  return <>{children}</>
}

export const Memo = memo(
  Children,
  (oldProps, newProps) => JSON.stringify(oldProps.deps) === JSON.stringify(newProps.deps)
)
