import React, { FC, useState } from "react"
import styled from "styled-components"

type Props = {
  defaultActiveTabIndex?: number
  children: JSX.Element[]
}

export const Tabs: FC<Props> = ({ defaultActiveTabIndex, children }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTabIndex ?? 0)

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex)
  }

  // Encapsulate <Tabs/> component API as props for <Tab/> children
  const renderChildrenWithTabsApiAsProps = () => {
    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        onClick: handleTabClick,
        tabIndex: index,
        isActive: index === activeTab,
      })
    })
  }

  // Render current active tab content
  const renderActiveTabContent = () => {
    if (children[activeTab]) {
      return children[activeTab].props.children
    }
  }

  return (
    <div className="tabs">
      <ul className="tabs-nav nav navbar-nav navbar-left">
        {renderChildrenWithTabsApiAsProps()}
      </ul>
      <div className="tabs-active-content">{renderActiveTabContent()}</div>
    </div>
  )
}
