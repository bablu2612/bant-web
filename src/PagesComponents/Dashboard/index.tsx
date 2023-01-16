import LayoutWithLogin from '@/Layout'
import React from 'react'
import styles from "@/styles/Home.module.css";

function DashboardPageComponent() {
    return (
        <LayoutWithLogin>
            <main className={styles.main} id="wrapper">
                <div className="dash">Dashboard</div>
            </main>
        </LayoutWithLogin>
    )
}

export default DashboardPageComponent;