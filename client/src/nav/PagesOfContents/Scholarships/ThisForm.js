import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addItem} from './../../../Actions/itemActions';
import axios from 'axios';

class ThisForm extends Component {

    state = {
        title: '',
        description: '',
        filesUpload: [],
    }
    onChange= (e) => {
        this.setState({ 
            [e.target.name]: e.target.value,
        });
       
    };
    onChangeHere= (e) => {
        let filesUpload = e.target.files;
        this.setState({ filesUpload: filesUpload });
    };



    onSubmit = (e) => {
        e.preventDefault();
        const newVariable = {
            description: this.state.description,
            title: this.state.title
        }
        this.props.addItem(newVariable)

       

        const sendFile = new FormData();

        for(let i = 0; i<=this.state.filesUpload.length;i++){
            sendFile.append('file', this.state.filesUpload[i]);
        }
      
        axios.post('//localhost:8000/upload', sendFile)
        .then((e) => {
            alert('File Uploaded')
            
        })
        .catch(e => {
            alert('File was not uploaded')
        })

    }
    render() {
        return (
            <div>
                 <form data-aos = "fade-in" onSubmit = {this.onSubmit}>
                    <label>Title:</label>
                    <textarea className = 'inputTitle' 
                        type = 'text' 
                        placeholder = 'Write the title'
                        name = "title"
                        id = "item1"
                        onChange = {this.onChange}
                    ></textarea>
                     <label>Description:</label>
                    <textarea  className = 'inputDescription' 
                        type = 'text' 
                        placeholder = 'Write the description associated to the title'
                        name = "description"
                        id = "item2"
                        onChange = {this.onChange}
                    ></textarea>
                    <input type = 'file'
                     multiple 
                     onChange = {this.onChangeHere}/>
                    <button className = "addNewsBtn">SAVE</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    item: state.item
})
export default connect(mapStateToProps, {addItem}) (ThisForm)

