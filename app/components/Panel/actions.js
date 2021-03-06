/* @flow weak */
import { createAction } from 'redux-actions'

export const PANEL_INITIALIZE = 'PANEL_INITIALIZE'
export const initializePanels = createAction(PANEL_INITIALIZE, config => config)

export const PANEL_CONFIRM_RESIZE = 'PANEL_CONFIRM_RESIZE'
export const confirmResize = createAction(PANEL_CONFIRM_RESIZE,
  (leftViewId, leftSize, rightViewId, rightSize) => ({
    leftView: { id: leftViewId, size: leftSize },
    rightView: { id: rightViewId, size: rightSize },
  })
)

export const PANEL_TOGGLE_LAYOUT = 'PANEL_TOGGLE_LAYOUT'
export const togglePanelLayout = createAction(PANEL_TOGGLE_LAYOUT, (selectors, shouldShow) => {
  if (selectors.id && typeof selectors.id === 'string') selectors.ids = [selectors.id]
  if (selectors.ref && typeof selectors.ref === 'string') selectors.refs = [selectors.ref]
  return { selectors, shouldShow }
})
