import React from 'react'
import GridContent from '../../components/GridContent'

const PageNotFound = () => {
  return (
    <GridContent
      title="Erro 404"
      content='<h2>A página ue você busca não foin encontrada <a href="/">Clique aqui para voltar</a></h2>'
    />
  )
}

export default PageNotFound
