import React,{Component,PrivateRoute} from 'react';
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

import Execution from "./CommandExecution";

export function updateState(text,flag){
    this.setState({text})
    this.setState({flag})
    //alert(flag); alert("text is "+text)
        this.setState({formfilled: true})

}

export class BlankForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
    formfilled: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();

    this.setState({formfilled: "true"})


  }
updateChild(text) {
    this.setState({formfilled: "true"})

        updateState(this.state.value,"true")

    }

  render() {

    return (
    <div>
      <form  onSubmit={(e) => this.updateChild()}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>




      </div>
    );
  }
}


  export  class BcommmandExecution extends Component {

/*
      constructor(props) {
         super(props);
         this.state = {
           error: null,
           isLoaded: false,
           items: []
         };
       }*/
        constructor(props) {
               super(props);
               this.state = {value: '' , oldcommand:''};

                           updateState = updateState.bind(this)


               this.handleChange = this.handleChange.bind(this);
               this.handleSubmit = this.handleSubmit.bind(this);
         }


      /*render() {
        return (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Steve Jobs</h5>
              <h6 class="card-subtitle mb-2 text-muted">steve@apple.com</h6>
              <p class="card-text">Stay Hungry, Stay Foolish</p>
            </div>
          </div>
        );
      }*/

       temp(command) { alert("did mount"+this.state.flag)

              this.state.oldcommand=this.state.text;

                           // alert("check for old and new txt "+ this.state.oldcommand +"---"+this.state.text)


            let headers = new Headers();
             headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin','http://localhost/*');
            var request = 'http://127.0.0.1:8080/api/v2/getString?command=ls';

            fetch('http://localhost:8080/api/v2/getString?command='+command)
            .then(res => res.json())
                  .then(
                    (result) => {
                      this.setState({
                        isLoaded: true,
                        items: result[command]
                      });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                      this.setState({
                        isLoaded: true,
                        error
                      });
                    }
                  )

            }

         handleChange(event) {
            this.setState({value: event.target.value});
          }

          handleSubmit(event) {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();
          }

        componentWillUnmount_makeitnormal()
        {
        alert("unmounted ...")
        }

        disableflag()
        { alert ("disable flag")
        }

        render() {             const { error, isLoaded, items } = this.state;
                let renderCount = 0;
                this.isLoaded=false;
                //alert("flag in execution"+this.state.flag)
                //alert ("isloaded "+isLoaded)

             //   alert("check for old and new txt "+ this.state.oldcommand +"---"+this.state.text)

               let finalflag =this.state.oldcommand==this.state.text
                //alert("final flag is "+ finalflag)

                if(this.state.flag !== undefined){
                 if (error) {
                                                return <div>Error: {error.message}</div>;
                                              } else if ( !finalflag ) {
                                                {this.temp(this.state.text)}
                                                return <div>Loading command...</div>;
                                              } else {
                                                return (
                                                <div>
                                          <h3> Result for command {this.state.text} => </h3>

                                           {/* <div >{this.state.text}</div>
                                            <div > ok {this.state.text} </div> */}
                                            <ul>
                                                    {items.map(item => (
                                                      <li key={item}>
                                                          {item}
                                                      </li>

                                                ))}
                              </ul>
                                                  </div>


                                                );
                                              }
                                       } else {return <div> <h3> No command triggered </h3></div>; }
                                      {this.state.disableflag}
          }




    }


         export function App1() {
            return (
              <div className="App">
                <h1> hello react</h1>
              </div>
            );
          }

class temp1 extends Component
{
  render(){ alert('1 ')
  return ( <div className="card card-plain">
    <h1> how are you man</h1>
      </div>
     ) }
}


