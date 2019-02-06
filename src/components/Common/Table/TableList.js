import React from 'react';
import { Table, Button, } from 'reactstrap';

export function TableList({data, removeData}){
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
                    <th className="text-capitalize">option</th>
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
                            <td>
                                <Button color="danger" onClick={() => removeData(index)}>remove</Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </section>
    )
}