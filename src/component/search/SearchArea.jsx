import React from 'react'

function SearchArea() {
  return (
    <div class="search-area">
      <div class="container">
        <button type="button" class="close-searchbox">
          <i class="bx bx-x"></i>
        </button>
        <form action="#" class="search-form">
          <div class="form-group">
            <input type="search" placeholder="Search Here" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchArea
