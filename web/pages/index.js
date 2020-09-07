import { getFrontpage, getArticles, getGlossary, getTags } from '../lib/sanity'
import useFetch from '@heydays/useFetch'
import TemplateResolver from '../components/resolvers/TemplateResolver'

export const getStaticProps = async () => {
  const data = await getFrontpage()
  const articles = await getArticles()
  const glossary = await getGlossary()
  console.log('getStaticProps -> glossary', glossary)
  const tags = await getTags()
  console.log('getStaticProps -> tags', tags)
  return {
    props: {
      frontpage: data[0].frontpage,
      articles,
      glossary,
      tags
    }
  }
}

export default function Home({ frontpage, articles, tags, glossary }) {
  const { response: res, error, isLoading } = useFetch('/api/hello')
  console.log('Home -> res', res)

  return <TemplateResolver page={{ ...frontpage, tags, glossary }} />
}
