import { ReactNode } from 'react'
import Head from 'next/head'

interface AppHeadProps {
  title: string
  children?: ReactNode
}

export function AppHead({ title, children }: AppHeadProps): JSX.Element {
  return (
    <Head>
      <title>{title} | Jonatan Frederico</title>
      {children}
    </Head>
  )
}
