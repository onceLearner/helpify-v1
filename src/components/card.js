import React, { Component } from 'react'
import {BsTrash} from 'react-icons/bs'

export default class Card extends Component {
    render() {
        return (
            <div className="card" id={"CardNum"+this.props.ID} >
                  <div className="card_inner">
                    <p className="text-primary-p">Carte {this.props.ID }  <BsTrash onClick={()=>{
                        document.getElementById("CardNum"+this.props.ID).remove()
                    }}/> </p>
                  <span className="font-bold text-title">dhh</span>
                  </div>
                </div>
        )
    }
}

