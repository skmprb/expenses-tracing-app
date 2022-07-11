import React, { useContext } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { GlobalContext } from '../context/GlobalState';


function Charts() {
    const { transactions } = useContext(GlobalContext);


    return (
        <>
        <h1 className='chart-heading'>Line Chart</h1>

        <ResponsiveContainer width="100%" aspect={2}>
            <LineChart data={transactions} height={200} >
                <CartesianGrid />
                <XAxis  dataKey="text" interval={'preserveStartEnd'}/>
                <Line dataKey="amount" />
                <YAxis />
            </LineChart>
        </ResponsiveContainer>
        </>
    );
}

export default Charts;