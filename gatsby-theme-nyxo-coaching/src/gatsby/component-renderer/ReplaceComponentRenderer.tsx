import { navigate, PageProps } from "gatsby"
import { get } from "lodash"
import React, { Component } from "react"
import Modal, { Props as ModalProps } from "react-modal"
import ModalRoutingContext from "./modal-routing-context"

const withoutPrefix = (path: string) => {
  const prefix =
    typeof __BASE_PATH__ !== `undefined` ? __BASE_PATH__ : __PATH_PREFIX__

  return path.slice(prefix ? prefix.length : 0)
}

type Props = {
  modalProps: ModalProps
}

type State = {
  prevProps: PageProps<Props> | null
  lastModalProps: ModalProps | null
  props: PageProps<Props> | null
  pathname: string | null
}

export class ReplaceComponentRenderer extends Component<
  PageProps<Props>,
  State
> {
  state: State = {
    prevProps: null,
    lastModalProps: null,
    props: null,
    pathname: null,
  }

  modalContentRef = null

  constructor(...args) {
    super(...args)
  }

  static getDerivedStateFromProps(
    props: PageProps<Props>,
    state: State
  ): null | PageProps<Props> {
    if (props.location.pathname !== state.pathname) {
      return {
        pathname: props.location.pathname,
        props: props,
        ...(get(state, "props.location.state.modal")
          ? {
              lastModalProps: state.props,
            }
          : {
              prevProps: state.props,
            }),
      }
    }

    return null
  }

  componentDidUpdate(prevProps: PageProps<Props>): void {
    if (
      get(prevProps, "location.pathname") !==
        get(this.props, "location.pathname") &&
      get(this.props, "location.state.modal") &&
      this.modalContentRef
    ) {
      this.modalContentRef.scrollTop = 0
    }
  }

  handleRequestClose = () => {
    navigate(withoutPrefix(this.state.prevProps.location.pathname), {
      state: {
        noScroll: true,
      },
    })
  }

  render() {
    // render modal if props location has modal
    const { pageResources, location, modalProps } = this.props
    const { prevProps, lastModalProps } = this.state
    const isModal = prevProps && get(location, "state.modal")

    const resources = isModal ? prevProps.pageResources : pageResources

    // the page is the previous path if this is a modal, otherwise it's the current path
    const pageElement = isModal
      ? React.createElement(prevProps.pageResources.component, {
          ...prevProps,
          key: prevProps?.pageResources.page.path,
        })
      : React.createElement(pageResources.component, {
          ...this.props,
          key: pageResources.page.path,
        })

    let modalElement = null

    if (isModal) {
      modalElement = React.createElement(pageResources.component, {
        ...this.props,
        key: pageResources.page.path,
      })
    } else if (lastModalProps) {
      modalElement = React.createElement(
        get(lastModalProps, "pageResources.component"),
        {
          ...lastModalProps,
          key: get(lastModalProps, "pageResources.page.path"),
        }
      )
    }

    return (
      <>
        {pageElement}
        <Modal
          onRequestClose={this.handleRequestClose}
          contentRef={(node) => (this.modalContentRef = node)}
          {...modalProps}
          isOpen={!!isModal}>
          {modalElement ? (
            <React.Fragment key={this.props.location.key}>
              <ModalRoutingContext.Provider
                value={{
                  modal: true,
                  closeTo: prevProps
                    ? withoutPrefix(prevProps.location.pathname)
                    : "/",
                }}>
                {modalElement}
              </ModalRoutingContext.Provider>
            </React.Fragment>
          ) : null}
        </Modal>
      </>
    )
  }
}
