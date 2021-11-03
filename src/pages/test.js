import React, { Component } from 'react'
import Select from 'react-select'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

function Home() {
  const { siteConfig } = useDocusaurusContext()
  const release = JSON.parse(JSON.stringify(siteConfig.customFields.events))
  var options = []
  release.map((item, i) =>
    options.push({ value: item.title, label: item.title }),
  )

  
  return (
    <Layout title="Developer Portal">
      <Select 
      options={options}
       />
    </Layout>
  )
}

export default Home
