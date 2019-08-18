import React from 'react';
import RandomCat from "./RandomCat";

class CatList extends React.Component {
    render() {
      return (
        <section className="section-cats">
          <h1>All Cats Are Beautiful</h1>
          <ul className="section-cats_list">
            <li><RandomCat height="200px" width="200px"/></li>
            <li><RandomCat height="400px" width="200px"/></li>
            <li><RandomCat /></li>
          </ul>
        </section>
      );
    }
  }

export default CatList;