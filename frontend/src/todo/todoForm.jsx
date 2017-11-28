import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="todoForm">
            <div className="row">

                <Grid cols="12 7 8">
                    <input type="text" className="form-control" id="description" placeholder="Adicione uma tarefa..."
                        onKeyUp={keyHandler} onChange={props.handleChange} value={props.description} />
                </Grid>
                <Grid cols="12 5 4">
                    <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
                    <IconButton style="info" icon="search" onClick={props.handleSearch} />
                    <IconButton style="default" icon="close" onClick={props.handleClear} />
                </Grid>
            </div>
        </div>
    )
}