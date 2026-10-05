function CustomButton(props) { 

const buttonStyle = {
    backgroundColor: props.color || 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'


}
return (
    <button style={buttonStyle} >
        start
    </button>
);
}

export default CustomButton;