import AvatarImage from '../components/AvatarImage';
import Content from '../components/Content';
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title='Olá, meu nome é Yuri'>
      <AvatarImage />
      <Content />
    </Layout>
  )
}
