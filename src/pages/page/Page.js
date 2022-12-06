import React from 'react'
import NavMain from 'components/nav-main/NavMain'

import './sass/main.sass'
import Home from 'pages/home/Home'
import Group1 from 'pages/group-1/Group1'
import { Routes, Route } from 'react-router-dom'

export default class Page extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (<>
            <NavMain />
            <div id="container-main">
                <Routes>
                    <Route
                        path="/"
                        element={ <Home /> } />
                    <Route
                        path="/group-1"
                        element={ <Group1 /> } />
                </Routes>
                
            </div>
        </>)
    }
}