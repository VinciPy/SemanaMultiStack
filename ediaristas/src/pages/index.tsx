import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SafeEnviroment from 'ui/components/feedback/SafeEnviroment/SafeEnviroment'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'

const Home: NextPage = () => {
  return (
   <div>
      <SafeEnviroment />
      <PageTitle title={"Conheça os Profissionais!"} subtitle={"Preencha o seu endereço e veja todos profissionais da sua localidade"} />
   </div>
  )
}

export default Home
