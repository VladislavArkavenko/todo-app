import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js'
import TodoInput from './components/todoInput.js'
import TodoItem from './components/todoItem.js'


class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			todos: [
				{id: 1, text: "Get up."},
				{id: 2, text: "Have a breakfast."},
				{id: 3, text: "Have s shower."},
			],
			nextId: 4
		};

		this.addTodo = this.addTodo.bind(this);	
		this.removeTodo = this.removeTodo.bind(this);
	}

	removeTodo(id){
		this.setState({
			todos: this.state.todos.filter((todo, index) => todo.id !== id)
		})
	}

	addTodo(todoText){
		let todos = this.state.todos.slice();
		todos.push({id: this.state.nextId, text: todoText});
		this.setState((prevState) => ({
			todos,
			nextId: ++prevState.nextId
		}));
	}	

  render() {
    return (
      <div className="App">
        <div className = "todo-wrapper">
        	<Header />
        	<TodoInput todoText="" addTodo={this.addTodo} />
        	<ul>
        		{
        			this.state.todos.map((todo)=>{
        				return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
        			})
        		}
        	</ul>
        </div>	
      </div>
    );
  }
}

export default App;
