import React from "react";
import {connect} from 'react-redux';
import { addProduct } from "../../actions";

class Header extends React.Component {
  render() {
    //console.log(this.props);
   const {store} = this.props;
   console.log(store);
    const {cart} = store;
    //console.log(cart);
    const values = Object.values(cart)
    // console.log(values);
   
    const cartNum = values.map(element => (
     element.quantity
   ));
  let totalSum = cartNum.reduce((a,b) => a+b,0);
  //let diff = cartNum - totalSum;
  
  
  return (
    <nav>
      <div className="logo">
        <p>Swish</p>
      </div>

      <div className="filters-box">
        <div className="title">Filters</div>
        <div className="filters">
          <div className="filter1">#0-10 $</div>
          <div className="filter2">#over 10 $</div>
          <div className="filter3">Glutenfree</div>
        </div>
      </div>

      <div className="cart">
        <i className="fas fa-concierge-bell"></i>
        <div className="order-status">ORDER STATUS</div>
        <div className="items-no">
          {/* {addProduct ? <p>{totalSum}</p>: <p>{diff}</p> } */}
          {totalSum}
          </div>
      </div>
    </nav>
  );
};
}
const mapStateToProps = (store)=>{
  return{
    store,
  }
}
export default connect(mapStateToProps)(Header);