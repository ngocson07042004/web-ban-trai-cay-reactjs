import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Router } from './data/dataRouter'
import MainLayout from './layout/MainLayout'
import OnlyLayout from './layout/OnlyLayout'
import Context from './Features/Context'

export default function App(){
    return(
        <Context>
            <BrowserRouter>
                <Routes>
                    {Router.map(router =>{
                        var Page = router.page
                        var Layout = MainLayout
                        if(router.layout === "private"){
                            Layout = OnlyLayout
                        }
                            return(
                                <Route key={router.id} path={router.path}
                                element={
                                    <Layout>
                                        <Page/>
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </BrowserRouter>
        </Context>
    )
}