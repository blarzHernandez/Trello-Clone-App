import React,{Component} from "react";
import { Button, Form, FormControl, FormGroup, Grid, Row, Col, InputGroup } from "react-bootstrap";
const arrayList = [];
class Board extends Component {
  
    //Construct
    constructor(props){
        //override parent constructor
        super(props);

        //Initial state
        this.state = {
            showForm:false,
            listTitle:''
            
        }

        //Binding all the methods
        this.onClick = this.onClick.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        
        
    }


    //When user click add new list button
    onClick = () =>{
        this.setState({showForm:true});
    }

    //onBlur trigger

    onBlur = () =>{
        this.setState({showForm:false});
    }

    onKeyPress = (e) =>{
       
        if(e.key === "Enter"){
            //save listo into arrayList
            this.saveList(e);
        }
    }

    saveList = (e) =>{
        e.preventDefault();        
        arrayList.push(this.state.listTitle);
        console.log(arrayList);

    }

    onChange = (e) =>{
        this.setState({listTitle:e.target.value});
    }


    render(){
        return(
            <Grid>
                {!this.state.showForm ? 
                    <Button 
                        className="pull-left"
                        onClick={this.onClick}  
                        bsStyle="default" 
                        bsSize="large" >
                        <span className="fa fa-plus-circle"></span>
                         Add New List
                    </Button> :                     
                    <Form horizontal style={{ width: "200px" }}>
                        <FormGroup controlId="formInlineListTitle">
                            <InputGroup>
                                <FormControl
                                    type="text"
                                    value={this.state.listTitle}
                                    placeholder="Enter List Title"
                                    autoFocus
                                    onBlur={this.onBlur}
                                    onChange={this.onChange}
                                    onKeyPress={this.onKeyPress}
                                />
                                <InputGroup.Button>
                                    <Button 
                                    >Save</Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                    </Form>
                          
                    }

            </Grid>
            
        )

    }


}

export default Board;
