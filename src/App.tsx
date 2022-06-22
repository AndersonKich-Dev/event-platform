import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

type LessonData = {
  id: string
  title: string
}

export function App() {
 const { data } = useQuery<{lessons: LessonData[]}>(GET_LESSONS_QUERY)
 console.log(data)

  return (
    <div>
      {data?.lessons.map(lesson => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </div>
  )
}


