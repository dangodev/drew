import { h, Component } from 'preact';

import style from './style';

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
      <div class={style.casestudy}>
        <div class={style.images}>
          {this.props.images.map((image, i) => (
            <div
              onclick={() => this.selectImage(i)}
              class={this.state.selectedImage === i ? style.selectedimage: style.image }
              style={{
                backgroundImage: `url(${image})`,
                right: `${(i + 1) % 2 * 16.2037}%`,
                top: `${Math.floor(i/2) * 33.3333}%`,
              }}
            />
          ))}
        </div>
        <div class={style.inner}>
          <h1 class={style.title}>{this.props.title}</h1>
          <h3 class={style.role}>{this.props.role}</h3>
          <div class={style.text}>{this.props.children}</div>
          {this.props.link && (
            <a class={style.link} href={this.props.link} target="_blank">Visit</a>
          )}
        </div>
      </div>
    );
  }
}
