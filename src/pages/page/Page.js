import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NavMain from 'components/nav-main/NavMain'
import Home from 'pages/home/Home'
import Group1 from 'pages/group-1/Group1'
import BlockRunner from 'components/block-runner/BlockRunner'

import './sass/main.sass'
import Group2 from 'pages/group-2/Group2'
import Group3 from 'pages/group-3/Group3'

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
                        path="group-1">
                        <Route index={true} element={<Group1 />}></Route>
                        <Route
                            path="block-runner"
                            element={ <BlockRunner /> }/>
                    </Route>
                    <Route
                        path="/"
                        element={ <Home /> } />
                    <Route
                        path="group-2">
                        <Route index={true} element={<Group2 />}></Route>
                    </Route>
                    <Route
                        path="group-3">
                        <Route index={true} element={<Group3 />}></Route>
                    </Route>
                </Routes>
                
            </div>
        </>)
    }
}