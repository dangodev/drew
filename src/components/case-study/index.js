import { h, Component } from 'preact';

import style from './style.css';

export default class CaseStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: 0,
    };
    this.selectImage.bind(this);
  }

  selectImage(number) {
    this.setState({ selectedImage: number });
  }

  render() {
    return (
      <div className={style.casestudy}>
        <div className={style.images}>
          {this.props.images.map((image, i) => (
            <div
              onClick={() => this.selectImage(i)}
              className={this.state.selectedImage === i ? style.selectedimage : style.image}
              style={{
                backgroundImage: `url(${image})`,
                right: `${((i + 1) % 2) * 16.2037}%`,
                top: `${Math.floor(i / 2) * 33.3333}%`,
              }}
            />
          ))}
        </div>
        <div className={style.inner}>
          <h1 className={style.title}>{this.props.title}</h1>
          <h3 className={style.role}>{this.props.role}</h3>
          <div className={style.text}>{this.props.children}</div>
          {this.props.link && (
            <a className={style.link} href={this.props.link} target="_blank">
              Visit
            </a>
          )}
        </div>
      </div>
    );
  }
}
