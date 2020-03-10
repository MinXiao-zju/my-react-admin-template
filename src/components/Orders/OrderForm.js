import React, { useState, Fragment } from "react";
import NumberInput from "../../common/components/NumberInput";
import TextInput from "../../common/components/TextInput";



function OrderForm(props) {

    const initialFormState = {
        name: { error: "", value: "" },
        product: { error: "", value: null },
        amount: { error: "", value: 0 },
        totalPrice: { error: "", value: 0 },
    };

    const [formState, setFormState] = useState(initialFormState);

    function getDisabledClass() {
        return '';
    }


    return (
        <Fragment>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-green">Create order</h6>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <TextInput id="input_name"
                                    value={formState.name.value}
                                    field="name"
                                    // onChange={hasFormValueChanged}
                                    required={true}
                                    maxLength={20}
                                    label="Name"
                                    placeholder="Name" />
                            </div>
                            <div className="form-group col-md-6">
                                <NumberInput id="input_amount"
                                    value={formState.amount.value}
                                    field="amount"
                                    // onChange={hasAmountChanged}
                                    max={1000}
                                    min={0}
                                    label="Amount" />
                            </div>

                            <div className="form-group col-md-6">
                                <NumberInput id="input_totalPrice"
                                    value={formState.totalPrice.value}
                                    field="totalPrice"
                                    // onChange={hasFormValueChanged}
                                    max={1000}
                                    min={0}
                                    label="Price" />
                            </div>
                        </div>
                        <button className="btn btn-danger" onClick={() => {}}>Reset</button>
                        <button type="submit" className={`btn btn-success left-margin ${getDisabledClass()}`}>Create</button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default OrderForm;