/* @flow weak */
import React, { Component, PropTypes } from 'react'
import MenuBar from '../MenuBar'
import Breadcrumbs from '../Breadcrumbs'
import StatusBar from '../StatusBar'
import PanesContainer from '../Pane'
import FileTree from '../FileTree'
import { SideBar } from '../Bar'
import ExtensionPanelContent from './ExtensionPanelContent'

const PanelContent = ({ panel }) => {
  switch (panel.contentType) {
    case 'MENUBAR':
      return <MenuBar />
    case 'BREADCRUMBS':
      return <Breadcrumbs />
    case 'FILETREE':
      return <FileTree />
    case 'PANES':
      return <PanesContainer />
    case 'STATUSBAR':
      return <StatusBar />

    case 'EXTENSION_LEFT':
    case 'EXTENSION_RIGHT':
    case 'EXTENSION_BOTTOM':
      return <ExtensionPanelContent side={panel.contentType.toLowerCase().replace('extension_', '')} />
    default:
  }

  switch (panel.ref) {
    case 'BAR_LEFT':
    case 'BAR_RIGHT':
    case 'BAR_BOTTOM':
      return <SideBar side={panel.ref.toLowerCase().replace('bar_', '')} />
    default:
  }

  return <div>Panel Placeholder</div>
}

export default PanelContent
