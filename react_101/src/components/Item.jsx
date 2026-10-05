function Item(props) {

return (
    <div>
        {
            props.Item.map((value,index)=>{
             return (<h1>{index}:{value}</h1>)
          }
        )
        }
    </div>
  )


}

export default Item;
