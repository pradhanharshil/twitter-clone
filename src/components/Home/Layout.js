import Feed from "../Feed/Feed";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children, title }) => {
    return (
        <>
            <Navbar />
            <Feed
                title={title}
                render={children} />
            <Sidebar />
        </>
    )
}

export default Layout;