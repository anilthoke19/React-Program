
import React from 'react';
import ReactDom from 'react-dom'


 class EventJs extends React.Component
{

    constructor(props)
    {
        super(props);
        this.functionApply= this.functionApply.bind(this);

        this.state={
            count:1
        }
        
    }
    


    functionApply()
    {

        this.setState({count:this.state.count+2})
    }



    render()
    {
return <> 
<h1>Value count is{this.state.count}</h1>
<button type='submit' onClick={this.functionApply} >Submit</button></>

    }

}

export default EventJs;