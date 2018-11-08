import React, { Component } from 'react'
import './Upload.css';

export default class UploadVid extends Component {
  render() {
    return (
      <div className="upload-background margin">
        <div className="uploadImage">
            {/* <img className="upload" src="./Assets/Icons/Large Upload.svg"/> */}
            <form>
                <ul>
                    <li>Title:</li>
                    <input className="title"></input>
                    <li>Description:</li>
                    <textarea className="description"></textarea>
                </ul>
                <button className="pub-button">Publish</button>
            </form>
        </div>
      </div>
    )
  }
}
