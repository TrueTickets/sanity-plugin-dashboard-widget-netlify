import React from 'react'
import DefaultButton from 'part:@sanity/components/buttons/default'
import styles from './SiteItem.css'
import { DeployAction, Site } from '../types'

interface Props {
  site: Site
  onDeploy: DeployAction
}

export default class SiteItem extends React.Component<Props> {
  handleDeployButtonClicked = (_: MouseEvent) => {
    this.props.onDeploy(this.props.site)
  }

  private renderLinks() {
    const { site } = this.props
    if (!(site.url || site.adminUrl)) {
      return null
    }
    return (
      <>
        {' ('}
        {site.url && (
          <span>
            <a href={site.url}>view</a>
          </span>
        )}
        {site.adminUrl && (
          <span>
            , <a href={site.adminUrl}>admin</a>
          </span>
        )}
        {')'}
      </>
    )
  }

  render() {
    const { site } = this.props
    return (
      <li className={styles.root}>
        <div className={styles.status}>
          <h4 className={styles.title}>
            {site.title}
            {this.renderLinks()}
          </h4>
        </div>
        {site.buildHookId && (
          <div className={styles.actions}>
            <DefaultButton inverted onClick={this.handleDeployButtonClicked}>
              Deploy
            </DefaultButton>
          </div>
        )}
      </li>
    )
  }
}
