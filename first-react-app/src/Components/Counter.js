import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
            super(props);
            this.state={
                count:1,
            };
            this.clickHandle=this.clickHandle.bind(this)

    }
    clickHandle(){
        // alert('点了一下');
        this.setState(
            {
                count:this.state.count+this.props.step,
            },
            function () {
                this.props.changeParentCount(this.state.count)
            }
        )

    }
  render() {
    return (
      <div>
          <h5>{this.props.title}</h5>
        <button onClick={this.clickHandle}>点一下({this.state.count})</button>
      </div>
    )
  }
}
