import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.style.css"

const cityForm = props => {
    return (
        <div className="container">
            <div>
                {props.error ? error(): null}
            </div>

            <form onSubmit={props.loadWeather} >
            <div className="row">
                <div className="col-md-3"><input type="text" className="form-control offset-md-2" name="city" placeholder="city" autoComplete="off"/></div>
                <div className="col-md-3"><input type="text" className="form-control" name="country" placeholder="country" autoComplete="off"/></div>
                <div className="col-md-3"><button className="btn btn-warning mt-md-0 temt-md-left">Get weather</button></div>
            </div>
            </form>
        </div>
    );
};

function error(){
    return (
        <div className="alert alert-danger mt-5" role="alert">
            This is error 
        </div>
    )
}

export default cityForm