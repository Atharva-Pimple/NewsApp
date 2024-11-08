import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, discription, imgUrl, newsUrl, author, date ,source} = this.props;
    let altImg =
      "data:image/jpeg;base64,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";
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger"
                style={{ zIndex:"1"}}>
            {source}
          </span>
          <img
            src={imgUrl ? imgUrl : altImg}
            className="card-img-top"
            alt="loading..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <p className="card-text">
              <small className="text-muted">
                by {author ? author : "Unknown"} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
