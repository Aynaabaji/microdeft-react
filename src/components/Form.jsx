import React from 'react'

const Form = () => {
  return (
    <div className='container'>
      <form action="" className='form'>
        <label htmlFor="">Product Name</label>
        <input className='form-control' type="text" />
        <label htmlFor="">Description</label>
        <input className='form-control' type="text" />
        <label htmlFor="">Image URL</label>
        <input className='form-control' type="text" />
        <label htmlFor="">Category</label>
        <select className='form-control' name="" id="">
            <option value="1">Electronics</option>
            <option value="1">Jewelery</option>
            <option value="1">Men's Clothingg</option>
            <option value="1">Women's Cloathing</option>
        </select>
        <label htmlFor="">Product Name</label>
        <input className='form-control' type="text" /><br />
        <input className='form-control' type="submit" value="Add Products" />
      </form>
    </div>
  )
}

export default Form
