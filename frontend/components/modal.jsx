import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import ReactModal from "react-modal";

import Button from "./button";

ReactModal.setAppElement("#__next");

const themes = {
  default: "default"
};

class Modal extends React.Component {
  static propTypes = {
    contentLabel: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    isVisible: PropTypes.bool,
    isCloseable: PropTypes.bool,
    children: PropTypes.node.isRequired,
    theme: PropTypes.any
  };

  static defaultProps = {
    isCloseable: true,
    theme: themes.default
  };

  render() {
    return (
      <>
        <ReactModal
          isOpen={this.props.isVisible}
          className={cn("modal", {
            [`modal--${themes[this.props.theme]}`]: themes[this.props.theme]
          })}
          onRequestClose={this.props.onClose}
          contentLabel={this.props.contentLabel}
          shouldCloseOnOverlayClick={this.props.isCloseable}
          overlayClassName={cn("modal__overlay", {
            [`modal__overlay--${themes[this.props.theme]}`]: themes[
              this.props.theme
            ]
          })}
          closeTimeoutMS={200}
        >
          <div className="modal__content">
            {this.props.isCloseable && (
              <div className="modal__close">
                <Button
                  textIsHidden={true}
                  onClick={this.props.onClose}
                  text="close modal"
                  iconName="close"
                  iconSize="tiny"
                />
              </div>
            )}
            {this.props.children}
          </div>
        </ReactModal>
        <style jsx global>
          {`
            .modal {
              $self: &;
              position: absolute;
              background-color: white;

              &--default {
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                box-shadow: 10px 10px 5px -9px rgba(0, 0, 0, 0.75);
                border: 1px solid #ececec;
                max-width: 768px;

                #{$self}__content {
                  padding: 3rem 2rem 2rem 2rem;
                  position: relative;
                }
              }

              &__close {
                position: absolute;
                top: 0;
                right: 0;
              }

              &__overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(255, 255, 255, 0.75);
                z-index: 11;

                &--default {
                  opacity: 0;
                  transition: opacity 0.2s ease-in-out;

                  &.ReactModal__Overlay--after-open {
                    opacity: 1;
                  }

                  &.ReactModal__Overlay--before-close {
                    opacity: 0;
                  }
                }
              }
            }
          `}
        </style>
      </>
    );
  }
}

Modal.themes = themes;

export default Modal;
