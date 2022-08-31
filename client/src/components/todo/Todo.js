function Todo({ title, description, remove, update }) {
    return (
        <div className='todo-row'>
            <div className='title'>{title}</div>
            <div className='description'>{description}</div>
            <div className='icons'>
                <i className='ri-pencil-fill' onClick={update}></i>
                <i className='ri-delete-bin-7-fill' onClick={remove}></i>
            </div>
        </div>
    )
}

export default Todo