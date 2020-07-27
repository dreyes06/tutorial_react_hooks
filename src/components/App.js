import React, {useState} from "react";

import Users from './Users'
import ResourceList from "./ResourceList";

const App = () => {
  const [resourceName, setResourceName] = useState('posts')

  //resourceName === currentState of resourceName
  //setResourceName === function that changes resourceName
  //useState === function(param === initialState)
  
  return (
    <React.Fragment>
      <Users/>
      <button onClick={() => setResourceName("posts")}>
        Posts
      </button>
      <button onClick={() => setResourceName("todos")}>
        Todos
      </button>
      <ResourceList resourceName={resourceName} />
    </React.Fragment>
  );
};

// class App extends React.Component {
//   state = {
//     resourceName: 'posts'
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <button onClick={() => this.setState({ resourceName: 'posts' })}>Posts</button>
//         <button onClick={() => this.setState({ resourceName: 'todos' })}>Todos</button>
//         <ResourceList resourceName={this.state.resourceName}/>
//       </React.Fragment>
//     )
//   }
// }
export default App;
