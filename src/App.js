import React ,{ useState}from 'react';
import './App copy.css';
import ToDo from './ToDo';

const App = () => {
  const data_ex= [
    {title: '중간고사', content: '시험보기싫다😭' , importance: 'High', deadline: '2022-04-18'}
  ];
  
  const [inputList, setInputList] = useState({title : "", content : "", importance: "", deadline : "" });
  const [dataList, setDataList] = useState(data_ex);
  const [filter, setFilter] = useState('All');

  const {title, content, importance, deadline} = inputList;

  const changed = (data) => {
    const {value, name} = data.target;
    setInputList({...inputList,[name]: value});
  };

  const clickHandler_Add = () =>{
    setDataList(dataList.concat(inputList));
    console.log(dataList);
  };

  const clickHandler_Del = () =>{
    setDataList(dataList.shift());
    console.log(dataList);
  };

  const filter_change = (e) =>{
    setFilter(e.target.value);
    console.log(e.target.value);
  };


  return (
    <div className="App">
      <header> 
        <h1>ToDoList</h1>
        <p>Filter</p>
        <label><input type="radio" name="ListFilter" value="All" onChange={filter_change} checked={filter === "All" ? true : false}/> All</label>
        <label><input type="radio" name="ListFilter" value="High" onChange={filter_change} checked={filter === "High" ? true : false}/> High</label>
        <label><input type="radio" name="ListFilter" value="Middle" onChange={filter_change} checked={filter === "Middle" ? true : false}/> Middle</label>
        <label><input type="radio" name="ListFilter" value="Low" onChange={filter_change} checked={filter === "Low" ? true : false}/> Low</label>
      </header>
      <p>Example</p>
      {dataList.map(todo => <ToDo filter={filter} title={todo.title} content={todo.content} importance={todo.importance} deadline={todo.deadline} />)}
      <p> Input ToDoList</p>
      <input
        value={title}
        placeholder="Title"
        name="title"
        onChange={changed}
      ></input>
      <br></br>
      <input
        value={content}
        placeholder="Content"
        name="content"
        onChange={changed}
      ></input>
      <br></br>
      <input 
        value={importance}
        placeholder="Importance(High,Middle,Low)"
        name="importance"
        onChange={changed}
      ></input>
      <br></br>
      <input
        value={deadline}
        placeholder="Deadline"
        name="deadline"
        type="date"
        onChange={changed}
      ></input>
      <br></br>
      <button onClick={clickHandler_Add}>Add List</button>
      <br></br>
      <button onClick={clickHandler_Del}>Delete List</button>
    </div>
  );
};

export default App;
