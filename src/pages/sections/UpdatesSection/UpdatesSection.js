import React from 'react'
import LatestUpdates from '../../../components/Changelog/changelog.js'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link'
import styles from './UpdatesSection.module.css'
import ViewAll from '../../../components/ViewAll/ViewAll'

const UpdatesSection = () => {
  const { siteConfig } = useDocusaurusContext()
  const release = JSON.parse(JSON.stringify(siteConfig.customFields.events))
  const lastRelease = release[0].fileName
  
  return (
    <section className={styles.updatesSection}>
      <div className="container">
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <div>
              <h3>Stay up-to-date with our latest releases</h3>
              <ViewAll message="View all" linkTo="/releases" />
            </div>
          </div>
          <div className={styles.releases}>
            <LatestUpdates />
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpdatesSection
