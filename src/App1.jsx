import Menu from "./Menu"
import { Outlet } from "react-router-dom"

const App1 = () => {
    return (
        <>
        <Menu />
        <Outlet />
        </>
    )
}

export default App1