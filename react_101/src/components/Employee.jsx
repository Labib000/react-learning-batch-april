function Employee(props) {
    return (
        <div>
            <h2>Employee</h2>
            <p>Name: {props.name}</p>
            <p>Position: {props.position}</p>
        </div>
    );

}

export default Employee;