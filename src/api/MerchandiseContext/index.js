import React, { Component } from "react";
export const MerchanContext = React.createContext();

export default class MerchanContainer extends Component {
  constructor(props) {
    super(props);
    this.baseURL = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`
    this.state = {
      merchandise: [],
      page: 1,
      nextPage: 2,
      total: 0,
      isLoading: true
    };
  }

  componentDidMount() {
    this.loadMerchandise(this.baseURL);
  }

  async apiGet(url) {
    return await fetch(url).then(response => response.json());
  }

  async loadMerchandise (url) {
    this.handleLoading(true);
    const response = await this.apiGet(url);
    if (this.validateApiResponse(response)) this.handleState(response);
  }

  validateApiResponse(response) {
    return response !== null && response !== undefined;
  }

  handleState(data) {
    const newMerchanArray = [...this.state.merchandise, ...data.products];
    this.setState({
      nextPage: 'https://' + data.nextPage,
      merchandise: newMerchanArray,
      total: data.products.length,
    });

    this.handleLoading(false);
  }

  handleLoading(bool) {
    !bool ? setTimeout(() => {
      this.setState({ isLoading: bool });
    }, 2000)
    : this.setState({ isLoading: bool });
  }

  render() {
    return (
      <MerchanContext.Provider
        value={{
          state: this.state,
          loadMerchandise: () => this.loadMerchandise(this.state.nextPage),
        }}
      >
        {this.props.children}
      </MerchanContext.Provider>
    );
  }
}