import withAuth from "@/Auth/withAuth"
import DashboardPageComponent from "@/PagesComponents/Dashboard"

const DashboardPage = () => {
    return <DashboardPageComponent />
}

export default withAuth(DashboardPage);