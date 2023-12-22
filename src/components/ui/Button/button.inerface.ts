export interface IBtn {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    active?: boolean
    disabled?: boolean
}