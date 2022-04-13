import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchTerm = useRef('')

  const searchCocktail = () => {
    setSearchTerm(searchTerm.current.value)
  }
  useEffect(() => {
    searchTerm.current.focus()
  }, [])

  return (
    <section className="section search">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div className="form-control">
          <label htmlFor="name">搜尋你最愛的雞尾酒</label>
          <input
            type="text"
            id="name"
            ref={searchTerm}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
