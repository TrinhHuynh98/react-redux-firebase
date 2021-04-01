import React, { Component } from 'react'
import { addProject} from '../../store/action/projectAction';
import { connect } from 'react-redux';

export class CreateProject extends Component {
    state = {
       title:'',
       content:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.addProject(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create New Project</h5>
                <div className="input-field">
                    <label>Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                </div>

                <div className="input-field">
                    <label>Content Project</label>
                    <input type="text" id="content" className="materialize-textare" onChange={this.handleChange}/>
                </div>

                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addProject: (project) => dispatch(addProject(project))
    }
}
export default connect(null, mapDispatchToProps)(CreateProject);
