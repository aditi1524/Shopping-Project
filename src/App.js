import React, { Component } from "react";
import Nvbar from "./components/Nvbar";
import ComposeComponent from "./components/ComposeComponent";

export default class App extends Component {
  //  Methods of child class Lift up state
  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    /** We have to update state but we don't update it directly
     *  instead we should create new counter array
     * and have react update this array
     *  [...this.state.counter]; this clones the counter array and return it to
     *
     * const newUpdateArray = [...this.state.counter];
     *
     * if we have to get index of counter passed and have to update its value in array.
     */
    const newUpdateArray = [...this.state.counter];
    const index = newUpdateArray.indexOf(counter);
    newUpdateArray[index] = { ...counter };
    newUpdateArray[index].value++;
    this.setState({ newUpdateArray });
  };
  handleReset = () => {
    const newArray = this.state.counter.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counter: newArray });
  };

  handleDelete = (counterId) => {
    //  counterId.preventDefault();
    // filter the counter array and call all the id's except the id which is equal to passed id
    const newArray = this.state.counter.filter(
      (object) => object.id !== counterId
    );
    // now update the array replace counter array with this newArray
    this.setState({ counter: newArray });

    // Now we have to pass refrence of this eventhandler to Demo.jsx there we will use props for this add attribute in Demo Components
  };

  // App class
  render() {
    return (
      <React.Fragment>
        {/** filter the counter array and pass the length of elements whose value > 0 to the totalCounters */}
        <Nvbar
          totalCounters={this.state.counter.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <ComposeComponent
            counter={this.state.counter}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
