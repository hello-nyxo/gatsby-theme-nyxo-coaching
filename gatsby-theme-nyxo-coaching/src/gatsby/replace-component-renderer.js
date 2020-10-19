"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const gatsby_1 = require("gatsby");
const react_1 = __importDefault(require("react"));
const react_modal_1 = __importDefault(require("react-modal"));
const withoutPrefix = (path) => {
    const prefix = typeof __BASE_PATH__ !== `undefined` ? __BASE_PATH__ : __PATH_PREFIX__;
    return path.slice(prefix ? prefix.length : 0);
};
class ReplaceComponentRenderer extends react_1.default.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            prevProps: null,
            lastModalProps: null,
            props: null,
            pathname: null,
        };
        this.modalContentRef = null;
        this.handleRequestClose = () => {
            gatsby_1.navigate(withoutPrefix(this.state.prevProps.location.pathname), {
                state: {
                    noScroll: true,
                },
            });
        };
    }
    static getDerivedStateFromProps(props, state) {
        // TODO: handle history changes
        if (props.location.pathname !== state.pathname) {
            return Object.assign({ pathname: props.location.pathname, props: props }, (lodash_1.default.get(state, "props.location.state.modal")
                ? {
                    // old page was a modal, keep track so we can render the contents while closing
                    lastModalProps: state.props,
                }
                : {
                    // old page was not a modal, keep track so we can render the contents under modals
                    prevProps: state.props,
                }));
        }
        return null;
    }
    componentDidUpdate(prevProps) {
        if (lodash_1.default.get(prevProps, "location.pathname") !==
            lodash_1.default.get(this.props, "location.pathname") &&
            lodash_1.default.get(this.props, "location.state.modal") &&
            this.modalContentRef) {
            this.modalContentRef.scrollTop = 0;
        }
    }
    render() {
        // render modal if props location has modal
        const { pageResources, location, modalProps } = this.props;
        const { prevProps, lastModalProps } = this.state;
        const isModal = prevProps && lodash_1.default.get(location, "state.modal");
        const resources = isModal ? prevProps.pageResources : pageResources;
        // the page is the previous path if this is a modal, otherwise it's the current path
        const pageElement = isModal
            ? react_1.default.createElement(prevProps.pageResources.component, Object.assign(Object.assign({}, prevProps), { key: prevProps.pageResources.page.path }))
            : react_1.default.createElement(pageResources.component, Object.assign(Object.assign({}, this.props), { key: pageResources.page.path }));
        let modalElement = null;
        if (isModal) {
            // Rendering the current page as a modal, so create an element with the page contents
            modalElement = react_1.default.createElement(pageResources.component, Object.assign(Object.assign({}, this.props), { key: pageResources.page.path }));
        }
        else if (lastModalProps) {
            // Not rendering the current page as a modal, but we may be in the process of animating
            // the old modal content to close, so render the last modal content we have cached
            modalElement = react_1.default.createElement(lodash_1.default.get(lastModalProps, "pageResources.component"), Object.assign(Object.assign({}, lastModalProps), { key: lodash_1.default.get(lastModalProps, "pageResources.page.path") }));
        }
        return ({ pageElement }
            < react_modal_1.default);
        onRequestClose = { this: .handleRequestClose };
        contentRef = {}(node);
        (this.modalContentRef = node);
    }
}
{
    modalProps;
}
isOpen = {};
isModal;
 >
    { : .Fragment, key = { this: .props.location.key } >
            value };
{
    {
        modal: true,
            closeTo;
        prevProps
            ? withoutPrefix(prevProps.location.pathname)
            : "/",
        ;
    }
}
 >
    { modalElement }
    < /ModalRoutingContext.Provider>
    < /React.Fragment>;
null;
/Modal>
    < />;
const replaceComponentRenderer = ({ props }, opts) => {
    const { modalProps } = opts;
    return react_1.default.createElement(ReplaceComponentRenderer, Object.assign(Object.assign({}, props), { modalProps }));
};
exports.default = replaceComponentRenderer;
