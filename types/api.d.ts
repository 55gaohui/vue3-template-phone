declare namespace Page {
  interface PageQuery {
    current: number
    size: number
  }
  interface ListParams<T> {
    params: T
    page: PageQuery
  }
  interface pageResult<T> {
    rows: T
    total: number
  }
}
