import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboardd from './Dashboardd'
import AddAccount from './AddAccount'
import ViewAccount from './ViewAccount'
import ViewTransaction from './ViewTransaction'
import Header from '../../Components/Header'
import TransactionModal from './TransactionModal'

export default function Index() {
    return (
        <>
        <Header />
            <Routes>
                <Route path='/' element={<Dashboardd />} />
                <Route path='/addAccount' element={<AddAccount />} />
                <Route path='/viewAccount' element={<ViewAccount />} />
                <Route path='/transactionModal/:id' element={<TransactionModal />} />
                <Route path='/viewTransaction' element={<ViewTransaction />} />
            </Routes>
        </>
    )
}
