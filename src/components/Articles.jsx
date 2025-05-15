import React from "react";

const Articles = ({ articles }) => {
  console.log("article component", articles);

  return (
    <div className="row">
      <h4>this is articles</h4>
      {articles.map((item) => {
        return (
          <div key={item.source.id} className="col-md-3">
            <div class="card">
              <img
                src={item.urlToImage}
                height={300}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{item.title.slice(0, 40)}...</h5>
                <p class="card-text">{item.description.slice(0, 100)}...</p>
                <a href={item.url} target="_blank" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
