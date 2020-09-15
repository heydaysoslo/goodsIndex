import { getFrontpage, getArticles, getGlossary, getTags } from '../lib/sanity'
import TemplateResolver from '../components/resolvers/TemplateResolver'
import useSWR from 'swr'

const getAllData = async () => {
  console.log('fetching data')
  try {
    const data = await Promise.all([getFrontpage(), getGlossary(), getTags()])
    return {
      ...data[0][0].frontpage,
      glossary: data[1],
      tags: data[2]
    }
  } catch (err) {
    return err
  }
}

function Home({ frontpage, tags, glossary }) {
  console.log('Home -> frontpage, tags, glossary', frontpage, tags, glossary)
  // const { data, error } = useSWR('hello', getAllData, {
  //   refreshInterval: 5000
  // })
  // console.log('Home -> data', data)
  // if (error) {
  //   return (
  //     <div>
  //       Something went wrong <pre>{JSON.stringify(error, null, 2)}</pre>
  //     </div>
  //   )
  // }
  // if (!data) {
  //   return <div>Loading...</div>
  // }

  return <TemplateResolver page={{ ...frontpage, tags, glossary }} />
}

Home.getInitialProps = async () => {
  const frontpage = await getFrontpage()
  const glossary = await getGlossary()
  const tags = await getTags()

  return {
    ...frontpage[0],
    tags,
    glossary
  }
}

export default Home
