import React from 'react';
import './App.css';
import Customer from './components/Customer';
import {Table, TableBody, TableHead, TableRow, TableCell} from'@mui/material';

const customers = [{
  id:1,
  image:'https://www.placeimg.com/64/64/any/1',
  name:'홍길동',
  birthday:'19961222',
  gender:'남자',
  job:'대학생'
},
{
  id:2,
  image:'https://www.placeimg.com/64/64/any/2',
  name:'김여름',
  birthday:'19970112',
  gender:'남자',
  job:'웹디자이너'
},
{
  id:3,
  image:'https://www.placeimg.com/64/64/any/3',
  name:'홍장미',
  birthday:'19980617',
  gender:'여자',
  job:'간호사'
}
]

class App extends React.Component {
  render() {
    return(
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>사진</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>            
          </TableHead>
          <TableBody>
            {customers.map((index)=>{return(<Customer name={index.name} id={index.id} birthday={index.birthday} image={index.image} gender={index.gender} job={index.job}/>);})}
          </TableBody>
        </Table>
    );
  }
}


export default App;