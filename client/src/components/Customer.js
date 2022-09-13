import React from 'react';
import {TableRow, TableCell} from '@mui/material';

class Customer extends React.Component{
  render() {
    return(
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell><img src={this.props.image} alt='profile'/></TableCell>
        <TableCell>{this.props.birthday}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
        <TableCell>{this.props.job}</TableCell>
      </TableRow>
    );
  }
}

export default Customer;