import React, { forwardRef, useImperativeHandle, useState } from 'react'

const HonorsAndAwardsForm = forwardRef((props, _ref) => {
    const [awards, setAwards] = useState([{ title: '', date: '' }]);

    const addHandler = () => {
        let newF = { title: '', date: '' }
        setAwards([...awards, newF]);
    }

    const removeHandler = (idx) => {
        let data = [...awards];
        data.splice(idx, 1);
        setAwards(data);
    }

    const handleFormChange = (idx, e) => {
        let data = [...awards];
        data[idx][e.target.name] = e.target.value;
        setAwards(data);
    }

    useImperativeHandle(_ref, () => ({
        getHonorsDeets: () => {
            return awards;
        },
    }));

    function submitHandler(e) {
        e.preventDefault();
        props.next(); // Proceed to the next step without validation
    }

    return (
        <div>
            <form>
                <h3>Honors And Awards Details</h3>
                {awards.map((input, idx) => (
                    <React.Fragment key={idx}>
                        <input
                            type='text'
                            placeholder='Name of Honor/Award/Grant'
                            value={input.title}
                            name='title'
                            onChange={(e) => handleFormChange(idx, e)}
                        />
                        <input
                            type='text'
                            placeholder='Date'
                            value={input.date}
                            name='date'
                            onChange={(e) => handleFormChange(idx, e)}
                        />
                        {awards.length > 1 && (
                            <button
                                className="remove"
                                onClick={(e) => {
                                    e.preventDefault();
                                    removeHandler(idx);
                                }}
                            >
                                Remove
                            </button>
                        )}
                    </React.Fragment>
                ))}
                <button
                    className="add"
                    onClick={(e) => {
                        e.preventDefault();
                        addHandler();
                    }}
                >
                    Add Honors And Awards Details
                </button>

                <input
                    className='submit-btn'
                    type='submit'
                    onClick={e => submitHandler(e)}
                />
            </form>
        </div>
    )
});

export default HonorsAndAwardsForm;
