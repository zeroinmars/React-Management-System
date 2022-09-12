import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

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
      <div>
        {customers.map((index)=>{
        return(
        <Customer
          key={index.id+index.name}
          id={index.id}
          image={index.image}
          name={index.name}
          birthday={index.birthday}
          gender={index.gender}
          job={index.job}
        />)})}
      </div>
    );
  }
}

export default App;