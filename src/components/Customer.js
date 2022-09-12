import React from 'react';

class Customer extends React.Component {
  render() {
    return(
      <div>
        <CustomerProfile image={this.props.image} name={this.props.name} id={this.props.id}/>
        <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
      </div>
    );
  }
}

class CustomerProfile extends React.Component {
  render() {
    return(
      <div>
        <img src={this.props.image} alt='img'/>
        <p>{this.props.name}({this.props.id})</p>
      </div>
    );
  }
}

class CustomerInfo extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}

export default Customer;