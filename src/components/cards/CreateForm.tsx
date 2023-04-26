import React from 'react'
import { useSelector } from 'react-redux'

import { RootStore, IBlog, InputChange } from '../../utils/Type'


interface IProps {
  blog: IBlog,
  setBlog: (blog: IBlog) => void
}

const CreateForm: React.FC<IProps> = ({blog, setBlog}) => {
  const { categories } = useSelector((state: RootStore) => state)

  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target
    setBlog({...blog, [name]:value})
  }

  // const handleChangeThumbnail = (e: InputChange) => {
  //   const target = e.target as HTMLInputElement
  //   const files = target.files
  //   if(files){
  //     const file = files[0]
  //     setBlog({...blog, thumbnail: file})
  //   }
  // }
  // const handleChangePdf = (e: InputChange) => {
  //   const target = e.target as HTMLInputElement
  //   const files = target.files
  //   if(files){
  //     const file = files[0]
  //     setBlog({...blog, pdf: file})
  //   }
  // }

  return (
    <form>
      <div className="form-group position-relative">
        
        <input type="text" className="form-control" placeholder="Title"
        value={blog.title} name="title" 
        onChange={handleChangeInput} />

        <small className="text-muted position-absolute"
        style={{ bottom: 0, right: '3px', opacity: '0.3'}}>
          {blog.title.length}/50
          title
        </small>
      </div>

      {/* <div className="form-group my-3">
        <input type="file" className="form-control"
        accept="image/*" onChange={handleChangeThumbnail} />
      </div> */}
      {/* <div className="form-group my-3">
        <input type="file" className="form-control" placeholder='select pdf'
        accept="pdf/*" onChange={handleChangePdf} />
      </div> */}

      <div className="form-group my-3">
        <textarea className="form-control" placeholder='Article Description' rows={4}
        value={blog.description} style={{resize: 'none'}}
        name="description" onChange={handleChangeInput} />

        <small className="text-muted position-absolute"
        style={{ bottom: 0, right: '3px', opacity: '0.3'}}>
          {blog.description.length}/200 description
        </small>
        
      </div>

      <div className="form-group my-3">
        
        <input type="text" className="form-control" placeholder="Article Type"
        value={blog.type} name="type" 
        onChange={handleChangeInput} />

        <small className="text-muted position-absolute"
        style={{ bottom: 0, right: '3px', opacity: '0.3'}}>
          {blog.type.length}/100
          type
        </small>
      </div>

      <div className="form-group my-3">
        
        <input type="pages" className="form-control" placeholder="Article Pages"
        value={blog.pages} name="pages" 
        onChange={handleChangeInput} />

        <small className="text-muted position-absolute"
        style={{ bottom: 0, right: '3px', opacity: '0.3'}}>
          {blog.pages}
          pages
        </small>
      </div>
      

      <div className="form-group my-3">
        <select className="form-control text-capitalize"
        value={blog.category} name="category"
        onChange={handleChangeInput}>
          <option value="">Choose a category</option>
          {
            categories.map(category => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))
          }
        </select>
      </div>
    </form>
  )
}

export default CreateForm