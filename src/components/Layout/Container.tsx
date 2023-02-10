import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

function Container({ children }: Props) {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        maxWidth: "640px",
      }}
    >
      {children}
    </div>
  )
}

export default Container
