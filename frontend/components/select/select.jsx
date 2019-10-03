import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Icon from "../icon";
import SelectOptions from "./select-options";

const get = (object, key, fallback) => {
  try {
    return object[key];
  } catch (_) {
    return fallback;
  }
};

const getInitialOption = options => {
  const selectedOption = options.find(o => o.isSelected);
  return get(selectedOption, "value") || get(options[0], "value");
};

class Select extends React.Component {
  static propTypes = {
    labelText: PropTypes.string,
    id: PropTypes.string,
    defaultSelectedValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
  };

  static defaultProps = {
    options: []
  };

  fakeSelect = React.createRef();

  state = {
    dropdownIsVisible: false,
    hasTouch: false,
    isMounted: false,
    value: getInitialOption(this.props.options)
  };

  componentDidMount() {
    this.setState({ isMounted: true, value: this.props.defaultSelectedValue });

    window.addEventListener("click", this.handleClickOutside);
    window.addEventListener("touchstart", this.onTouchStart);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClickOutside);
    window.removeEventListener("touchstart", this.onTouchStart);
  }

  onTouchStart = () => {
    this.setState({ hasTouch: true });
    window.removeEventListener("touchstart", this.onTouchStart);
  };

  handleClickOutside = e => {
    if (
      e.target !== this.fakeSelect.current &&
      !this.fakeSelect.current.contains(e.target)
    ) {
      this.setState({ dropdownIsVisible: false });
    }
  };

  handleChange = value => {
    this.setState({ dropdownIsVisible: false });
    this.setState({ value });

    this.props.onChange(value);
  };

  onChange = e => {
    this.handleChange(e.target.value);
  };

  onOptionClick(value, e) {
    e.stopPropagation();

    if (value) this.handleChange(value);
  }

  toggleDropdown = () => {
    this.setState(state => ({ dropdownIsVisible: !state.dropdownIsVisible }));
  };

  getLabel = () =>
    get(this.props.options.find(o => o.value === this.state.value), "label");

  render() {
    return (
      <div
        className={cn("select", {
          "select--touch": this.state.hasTouch,
          "select--mounted": this.state.isMounted
        })}
      >
        <label htmlFor={this.props.id} className="select__label">
          {this.props.labelText}
        </label>
        <select
          name={this.props.name}
          id={this.props.id}
          onChange={this.onChange}
          value={this.state.value || ""}
        >
          {this.props.options.map(option => {
            const { value, text, label, id } = option;

            return (
              <option key={id} value={value || ""} disabled={!value}>
                {text ? `${text} (${label})` : `${label}`}
              </option>
            );
          })}
        </select>

        <div
          className="select__select-fake"
          onKeyDown={e => {
            if (e.keyCode === 27) this.toggleDropdown();
          }}
        >
          <div
            className="select__select-element"
            onClick={this.toggleDropdown}
            ref={this.fakeSelect}
          >
            {this.getLabel()}
            <div className="select__icon">
              <Icon name="caret" size={Icon.sizes.tiny} />
            </div>
          </div>
          {this.state.dropdownIsVisible && (
            <SelectOptions
              options={this.props.options}
              activeValue={this.state.value}
              onClick={(value, e) => this.onOptionClick(value, e)}
            />
          )}
        </div>
        <style jsx>{`
          .select {
            $self: &;
            position: relative;

            select {
              position: absolute;
              z-index: 2;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              font-size: 16px;
            }

            &--mounted {
              select {
                z-index: 0;
                opacity: 0;
              }
            }

            &--touch {
              select {
                z-index: 2;
              }
            }

            &__label {
              margin-bottom: 0.5rem;
              display: block;
            }

            &__select-fake {
              min-width: 100px;
              position: relative;
              user-select: none;
              background: white;

              #{$self}:not(.touch) select:focus + & {
                outline: 1px dotted #212121;
                outline: 5px auto -webkit-focus-ring-color;
              }
            }

            &__icon {
            }

            &__select-element {
              border: 1px solid black;
              display: flex;
              align-items: center;
              justify-content: space-between;

              padding: 1rem;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Select;
