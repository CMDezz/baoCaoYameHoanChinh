import React, { Component } from 'react';
import './HotProduct.css';

import {Link} from 'react-router-dom'

import Modal from './../Modal/Modal'
import ChiTietSanPham from '../../Pages/ChiTietSanPham'


export class HotProduct extends Component {
    componentDidMount() {
        let command = '';
        let content = this.props.sale ? `<strike>${this.props.price}</strike><p class="text-danger m-0 pl-3">${this.props.sPrice}</p>` : `<p>${this.props.price}</p>`;
        this.props.src.map(sr => command += `<img class="subHotProduct" src=${sr}></img>`);
        this.el.innerHTML = `${command}`;     //DOM get subHotProduct then inner HTML
        this.pr.innerHTML = `${content}`;     //DOM get price then if sale inner specific HTML

    }

    someFunc=()=>{
        this.props.callBackFromParent(this.props.full)
    }
    render() {
        return (
            <div className="HotProduct ">
                <Link to={"chi-tiet-san-pham/"+this.props.full.url} onClick={()=>this.someFunc()}> <img className="hotProductMain" src={this.props.main}></img></Link>
                <div ref={el => this.el = el} className="sub-HotProductList">
                </div>
                <div ref={pr => this.pr = pr} className="price" >
                    <p>{this.props.price}</p>
                </div>
                
                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"."+this.props.url}>Extra large modal</button> */}

        {/* <div className={"modal fade "+this.props.url} tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <ChiTietSanPham name={this.props.name} main={this.props.main} src={this.props.src} price={this.props.price} sale={this.props.sale} sPrice={this.props.sPrice}></ChiTietSanPham>
                            </div>
                    </div>
                </div> */}

            </div>

        );
    }
}

export default HotProduct;
