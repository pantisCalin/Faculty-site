
import { Component } from "react";
import ComponentNews from "./ComponentNews";
import TitleNews from "./TitleNews";
import AddNews from "./AddNews";
import { connect } from 'react-redux';
import {getItems, deleteItem} from './../../../Actions/itemActions';
import PropTypes from 'prop-types';


class ComponentsNews extends Component {

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
            <TitleNews />
             <AddNews/>
             {items.map(({_id, title, description}) => (
            <ComponentNews 
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
ComponentsNews.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  item: state.item
})
export default connect(mapStateToProps, { getItems, deleteItem })(ComponentsNews);
