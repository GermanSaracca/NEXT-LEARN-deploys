import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import DarkLayout from '../components/layout/DarkLayout'

const AboutPage = () => {
  return (
    <>
        <h1>About page</h1>
    </>
  )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}

export default AboutPage