import React from "react";
import "./Ticket.css";

export default class Ticket extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            countriesData: {
                Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
                Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
                US: ["Los Angles", "San Diego", "Chicago"],
            },
            mainCountryCities: []
        }
        this.selectHandler =this.selectHandler.bind(this)
    }
   selectHandler (event){
   let mainCountry= event.target.value
   let mainCountryCt =this.state.countriesData[mainCountry]
  if(mainCountry==='-1'){
    this.setState({mainCountryCities:[]})
  }else{
   this.setState({mainCountryCities:mainCountryCt})
   console.log(this.state.mainCountryCities);
   }}

    render() {
        return (
            <div className="container">
                <div className="col-md-6 box">
                    <input className="fnameInput" placeholder="First Name" />
                </div>

                <div className="col-md-6 box">
                    <input className="lnameInput" placeholder="Last Name" />
                </div>
                <div className="col-md-6 box">
                    <input className="phoneInput" placeholder="Phone Number" />
                </div>
                <div className="col-md-6 box">
                    <input className="emailInput" placeholder="Email" />
                </div>
                <div className="col-md-6 box">
                    <select className="countrySelect" onChange={this.selectHandler}>
                        <option value="-1">Please Select ...</option>
                        <option className="option" value="Iran">Iran</option>
                        <option className="option" value="Turkey">Turkey</option>
                        <option className="option" value="US">United State</option>
                    </select>
                </div>
                <div className="col-md-6 box">
                    <select className="citySelect">
                            {this.state.mainCountryCities.length  ? this.state.mainCountryCities.map((city)=>{
                                return <option key={city.lenghh} value={city} className="option">{city}</option>
                            }):
                            <option value='-1' className="option">pls select contry..</option>
                            
                            }
                    </select>
                </div>
                <div className="col-md-12 box">
                    <button className="btn">Book a ticket</button>
                </div>
            </div>

        )
    }
}
