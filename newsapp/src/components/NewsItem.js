import React, { Component } from 'react'

export class NewsItem extends Component {
       
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/3f59/live/b4cc3cf0-dfd4-11f0-8f37-51273813293d.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a rel='noreferrer'  href={newsUrl} target='_blank' className="btn btn-sm btn-dark  ">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
