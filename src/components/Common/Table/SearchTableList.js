import React from 'react';
import { Table } from 'reactstrap';

export function SearchTableList({data}) {
    if(!data){
        return (
            <section>
                <p className="text-center text-muted">--- null ---</p>
            </section>
        )
    }
    return(
        <section>
            <Table striped>
                <thead>
                <tr>
                    <th>#</th>
                    <th className="text-capitalize">herbal</th>
                    <th className="text-capitalize">nature</th>
                    <th className="text-capitalize">properties</th>
                    <th className="text-capitalize">side effect</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((row, index) => (
                        <tr key={index}>
                            <th scope="row">{row.id}</th>
                            <td>{row.herbal}</td>
                            <td>{row.properties}</td>
                            <td>{row.nature}</td>
                            <td>{row.effect}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </section>
    )
}