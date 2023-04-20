import React from 'react'
import { useParams } from 'react-router-dom'

import { IParams } from '../../utils/Type'

import CreateBlog from '../create_blog'

const UpdateBlog = () => {
  const { slug } = useParams()

  return <CreateBlog id={slug} />
}

export default UpdateBlog