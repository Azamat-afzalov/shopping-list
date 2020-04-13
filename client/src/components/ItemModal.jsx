import React , {useState} from 'react';
import {
    Button ,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
}   from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions.js';


const ItemModal = (props) => {
    const [modal , setModal] = useState(false);
    const [name , setName] = useState('')
    const toggle = () => setModal(modal => (!modal));
    const onChange = (e) => {
        setName(e.target.value);
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        const newItem = {
            name
        }

        // Add Item via addItem action
        props.addItem(newItem);
        toggle();
        setName('');
    }
    return (
        <div>
            <Button
                color="dark"
                className="mb-2"
                onClick={toggle}
            >Add Item</Button>
            <Modal
                isOpen={modal}
                toggle={toggle}
            >
                <ModalHeader
                    toggle={toggle}
                >
                    Add to Shopping List
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={submitHandler}>
                        <FormGroup>
                            <Label for="item"> Item </Label>
                            <Input
                                type="text"
                                name="name"
                                id="item"
                                placeholder="add shopping item"
                                onChange={onChange}
                                value={name}
                            />
                            <Button
                                color="dark"
                                className="mt-3"
                                block
                            >
                                Add Item
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}
const mapStateToProps = (state) => ({
    item : state.item
})

export default connect(mapStateToProps , {addItem})(ItemModal);