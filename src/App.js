import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import withStyles from '@mui/material/core/styles'

const customers = [{
  'id':1,
  'image':'https://placeimg.com/64/64/any/1',
  'name':'홍길동',
  'birthday':'961222',
  'gender':'남자',
  'job':'대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/any/2',
  'name':'정여름',
  'birthday':'920115',
  'gender':'남자',
  'job':'JS웹개발자'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/any/3',
  'name':'김나라',
  'birthday':'980714',
  'gender':'여자',
  'job':'회계사'
}
]

class App extends Component {
  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {customers.map((index)=>{
                return(
                  <Customer
                    key={index.id}
                    id={index.id}
                    image={index.image}
                    name={index.name}
                    birthday={index.birthday}
                    gender={index.gender}
                    job={index.job}
                  />);})}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;