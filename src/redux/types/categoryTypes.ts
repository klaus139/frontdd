import { ICategory } from '../../utils/Type'

export const CREATE_CATEGORY = 'CREATE_CATEGORY'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'


export interface ICreateCategory{
  type: typeof CREATE_CATEGORY
  payload: ICategory
}

export interface IGetCategory{
  type: typeof GET_CATEGORIES
  payload: ICategory[]
}

export interface IUpdateCategory{
  type: typeof UPDATE_CATEGORY
  payload: ICategory
}
export interface IDeleteCategory{
  type: typeof DELETE_CATEGORY
  payload: string
}
export type ICategoryType = ICreateCategory | IGetCategory | IUpdateCategory
| IDeleteCategory