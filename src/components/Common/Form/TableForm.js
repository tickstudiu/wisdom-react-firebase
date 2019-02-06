import React, {useState} from 'react';
import { Col, Row, Button, FormGroup, Input } from 'reactstrap';

export function TableForm({addData, id}){
    const [h, setH] = useState('');
    const [n, setN] = useState('');
    const [p, setP] = useState('');
    const [s, setS] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!h || !p || !n || !s) return;
        addData(id+1,h,p,n,s);
        setH('');
        setP('');
        setN('');
        setS('');
    };

    return (
        <section className="text-right">
            <Row>
                <Col md={3}>
                    <FormGroup>
                        <Input type="text" placeholder="with a placeholder" value={h} onChange={e => setH(e.target.value)}/>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Input type="text" placeholder="with a placeholder" value={n} onChange={e => setN(e.target.value)}/>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Input type="text" placeholder="with a placeholder" value={p} onChange={e => setP(e.target.value)}/>
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Input type="text" placeholder="with a placeholder" value={s} onChange={e => setS(e.target.value)}/>
                    </FormGroup>
                </Col>
            </Row>
            <Button color="primary" onClick={handleSubmit}>submit</Button>
        </section>
    )
}