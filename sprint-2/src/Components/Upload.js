import React, { Component } from 'react'
import './Upload.css';

export default class UploadVid extends Component {
  render() {
    return (
      <div className="upload-background margin">
        <div className="uploadImage">
            {/* <img className="upload" src="./Assets/Icons/Large Upload.svg"/> */}
            <form className="uploadForm">
                <ul className="ulListForm">
                    <li>Title:</li>
                    <input className="title" size='30'></input>
                    <li>Description:</li>
                    <textarea rows="9" cols="100" className="description"></textarea>
                </ul>
                <button className="pub-button">Publish</button>
            </form>
        </div>
      </div>
    )
  }
}
