import { ReactNode, useMemo } from "react"

export type MemoProps = {
  deps?: any[]
  children?: ReactNode | ReactNode[]
}

export const Memo = (props: MemoProps) => {
  const { deps = [], children } = props

  return useMemo(() => <>{children}</>, [...deps])
}
