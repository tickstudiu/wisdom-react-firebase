import React, {useState} from 'react';
import { Col, Row, Button, FormGroup, Input } from 'reactstrap';

export function SearchForm({searchData, title}){
    const [s, setS] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!s) return;
        searchData(s);
    };

    return (
        <section>
            <h5>{title}</h5>
            <Row>
                <Col md={5}>
                    <FormGroup>
                        <Input type="text" placeholder="enter herbal name..." value={s} onChange={(e) => setS(e.target.value)}/>
                    </FormGroup>
                </Col>
                <Col md={1}>
                    <Button color="primary" onClick={handleSubmit}>search</Button>
                </Col>
            </Row>
        </section>
    )
}