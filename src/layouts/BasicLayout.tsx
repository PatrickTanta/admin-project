import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router'

interface Props {
    title: string
    children: ReactNode
}

export const BasicLayout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    )
}
