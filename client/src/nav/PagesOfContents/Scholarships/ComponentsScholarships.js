
import { Component } from "react";
import ComponentScholarships from "./ComponentScholarships";
import TitleScholarships from "./TitleScholarships";
import AddScholarships from "./AddScholarships";
import { connect } from 'react-redux';
import {getItems, deleteItem} from '../../../Actions/itemActions';
import PropTypes from 'prop-types';


class ComponentsScholarships extends Component {

  componentDidMount() {
    this.props.getItems();
  }
  onDeleteClick = (id) => {
    this.props.deleteItem(id)
  }


    render(){
      const {items} = this.props.item
    return (
      

        <div className = 'containerNews'>
            <TitleScholarships />
             <AddScholarships/>
             {items.map(({_id, title, description}) => (
            <ComponentScholarships 
            id = {_id}
            title = {title} 
            description = {description} 
            key = {_id}
     

            onDelete = {this.onDeleteClick.bind(this,_id)}/>
              ))}
        </div>
    )
}
}
ComponentsScholarships.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  item: state.item
})
export default connect(mapStateToProps, { getItems, deleteItem })(ComponentsScholarships);
