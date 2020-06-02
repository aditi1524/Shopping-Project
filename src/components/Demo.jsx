import React, { Component } from "react";
//import ComposeComponent from "./ComposeComponent";
export default class Demo extends Component {
  /*  This is controlled component  and it will get all data whenever need from ComposeComponnent class therefor we have to remove props.counter  
  props.counter = {
    count: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    tag: ["tag1", "tag2", "tag3", "tag4"],
  };

  getListItems() {
    if (this.props.counter.tag.length === 0) return "No tags For now in list";
    return (
      <ul>
        {this.props.counter.tag.map((tags) => (
          <li key={tags}>{tags}</li>
        ))}
      </ul>
    );
  } */

  /** Passing Argument in event handler
   *
   * doHandleEvent() {
   *    this.handleIncrement({id : 1})
   *       };
   *
   * Instead of making this extra function just to wrap up function we can make Anonymous function in onclick .
   * */
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  abc() {
    const { value } = this.props.counter;
    const x = <h3>Zero</h3>;
    return value === 0 ? x : value;
  }
  render() {
    return (
      <React.Fragment>
        {/** <img src={this.props.counter.imageUrl} alt="akckf" />     
        <span className="badge badge-primary">{this.props.counter.count}</span>  
        <span className="badge badge-primary m-2">{this.abc()}</span>        here we can use bootstarp classes in variables instead of 
        hardcoding and can change styles dynamically 

          onClick={this.handleIncrement}         // Function call without argument

        */}

        <span className={this.getBadgeClasses()}>{this.abc()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className=" btn btn-success btn-sm"
        >
          Increment
        </button>
        {/** Now as we know that there is no  onClick= {this.handleDelete} to which we refer therfor as we have made Deletehandler() in 
                 ComposeComponent class  that can be access using this.props.onDelete because this is the name of attribute which 
                 handle this event */}

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>

        {/**
           {this.getListItems()}
        
        {this.props.counter.count === 0 && "aditi this is right condition" && (
          <h1>help</h1>
        )} */}
      </React.Fragment>
    );
  }
}

/**
 *  This is the controlled complonent because it relies on other component
 *   1) It does not has its local props.counter it recieves data via props and raise the events whenever data needs to change
 *   2) This component is internally controlled by its parent .
 *   3 ) so we have to do refactoring here .
 */
